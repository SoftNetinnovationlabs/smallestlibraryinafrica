/**
 * Validation middleware for news routes
 * Add more sophisticated validation as needed
 */

// Validate news creation/update data
export const validateNewsData = (req, res, next) => {
  const errors = [];
  const { mainTitle, excerpt, sections } = req.body;

  // Validate main title
  if (req.method === 'POST') {
    if (!mainTitle || typeof mainTitle !== 'string' || mainTitle.trim().length === 0) {
      errors.push('Main title is required');
    }
  }

  if (mainTitle) {
    if (mainTitle.length > 200) {
      errors.push('Main title must be less than 200 characters');
    }
    if (mainTitle.length < 3) {
      errors.push('Main title must be at least 3 characters');
    }
  }

  // Validate excerpt
  if (req.method === 'POST') {
    if (!excerpt || typeof excerpt !== 'string' || excerpt.trim().length === 0) {
      errors.push('Excerpt is required');
    }
  }

  if (excerpt) {
    if (excerpt.length > 500) {
      errors.push('Excerpt must be less than 500 characters');
    }
    if (excerpt.length < 10) {
      errors.push('Excerpt must be at least 10 characters');
    }
  }

  // Validate sections
  if (sections) {
    let parsedSections;
    
    try {
      parsedSections = typeof sections === 'string' ? JSON.parse(sections) : sections;
    } catch (err) {
      errors.push('Sections must be valid JSON');
      return res.status(400).json({ message: 'Validation failed', errors });
    }

    if (!Array.isArray(parsedSections)) {
      errors.push('Sections must be an array');
    } else {
      if (req.method === 'POST' && parsedSections.length === 0) {
        errors.push('At least one section is required');
      }

      if (parsedSections.length > 20) {
        errors.push('Maximum 20 sections allowed');
      }

      parsedSections.forEach((section, index) => {
        if (!section.title || section.title.trim().length === 0) {
          errors.push(`Section ${index + 1}: Title is required`);
        } else if (section.title.length > 150) {
          errors.push(`Section ${index + 1}: Title must be less than 150 characters`);
        }

        if (!section.content || section.content.trim().length === 0) {
          errors.push(`Section ${index + 1}: Content is required`);
        } else if (section.content.length > 10000) {
          errors.push(`Section ${index + 1}: Content must be less than 10000 characters`);
        }
      });
    }
  }

  // Validate files
  if (req.files) {
    const mainImage = req.files['mainImage'];
    const sectionImages = req.files['sectionImages'];

    if (mainImage && mainImage.length > 0) {
      const file = mainImage[0];
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
      
      if (!allowedTypes.includes(file.mimetype)) {
        errors.push('Main image must be JPEG, PNG, or WebP format');
      }
    }

    if (sectionImages && sectionImages.length > 0) {
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
      
      sectionImages.forEach((file, index) => {
        if (!allowedTypes.includes(file.mimetype)) {
          errors.push(`Section image ${index + 1} must be JPEG, PNG, or WebP format`);
        }
      });
    }
  }

  if (errors.length > 0) {
    return res.status(400).json({ 
      message: 'Validation failed',
      errors
    });
  }

  next();
};

// Sanitize HTML content to prevent XSS
export const sanitizeNewsContent = (req, res, next) => {
  const { mainTitle, excerpt } = req.body;

  // Basic HTML escaping (consider using a library like DOMPurify or validator.js)
  const escapeHtml = (text) => {
    if (!text) return text;
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '/': '&#x2F;',
    };
    return text.replace(/[&<>"'/]/g, (char) => map[char]);
  };

  if (mainTitle) {
    req.body.mainTitle = escapeHtml(mainTitle.trim());
  }

  if (excerpt) {
    req.body.excerpt = escapeHtml(excerpt.trim());
  }

  // Sanitize sections
  if (req.body.sections) {
    let sections = req.body.sections;
    
    if (typeof sections === 'string') {
      try {
        sections = JSON.parse(sections);
      } catch (err) {
        return res.status(400).json({ 
          message: 'Invalid sections format',
          error: 'Sections must be valid JSON'
        });
      }
    }

    if (Array.isArray(sections)) {
      sections = sections.map(section => ({
        ...section,
        title: section.title ? escapeHtml(section.title.trim()) : '',
        content: section.content ? escapeHtml(section.content.trim()) : '',
      }));

      req.body.sections = JSON.stringify(sections);
    }
  }

  next();
};

// Rate limiting for news creation (simple implementation)
const creationAttempts = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_ATTEMPTS = 5; // 5 posts per minute

export const rateLimitNewsCreation = (req, res, next) => {
  // Get client identifier (IP or user ID)
  const identifier = req.ip || req.connection.remoteAddress;
  const now = Date.now();

  if (!creationAttempts.has(identifier)) {
    creationAttempts.set(identifier, []);
  }

  const attempts = creationAttempts.get(identifier);
  
  // Remove old attempts outside the window
  const recentAttempts = attempts.filter(time => now - time < RATE_LIMIT_WINDOW);
  
  if (recentAttempts.length >= MAX_ATTEMPTS) {
    return res.status(429).json({ 
      message: 'Too many requests',
      error: `Maximum ${MAX_ATTEMPTS} posts per minute allowed`,
      retryAfter: Math.ceil((RATE_LIMIT_WINDOW - (now - recentAttempts[0])) / 1000)
    });
  }

  recentAttempts.push(now);
  creationAttempts.set(identifier, recentAttempts);

  // Cleanup old entries periodically
  if (Math.random() < 0.01) { // 1% chance
    const cutoff = now - RATE_LIMIT_WINDOW;
    for (const [key, times] of creationAttempts.entries()) {
      const validTimes = times.filter(time => time > cutoff);
      if (validTimes.length === 0) {
        creationAttempts.delete(key);
      } else {
        creationAttempts.set(key, validTimes);
      }
    }
  }

  next();
};

// Validate query parameters for pagination
export const validatePaginationParams = (req, res, next) => {
  const { page, limit, sort, order } = req.query;

  if (page && (isNaN(page) || parseInt(page) < 1)) {
    return res.status(400).json({ 
      message: 'Invalid pagination parameter',
      error: 'Page must be a positive integer'
    });
  }

  if (limit && (isNaN(limit) || parseInt(limit) < 1 || parseInt(limit) > 100)) {
    return res.status(400).json({ 
      message: 'Invalid pagination parameter',
      error: 'Limit must be between 1 and 100'
    });
  }

  if (sort && !['createdAt', 'updatedAt', 'title'].includes(sort)) {
    return res.status(400).json({ 
      message: 'Invalid sort parameter',
      error: 'Sort must be one of: createdAt, updatedAt, title'
    });
  }

  if (order && !['asc', 'desc'].includes(order.toLowerCase())) {
    return res.status(400).json({ 
      message: 'Invalid order parameter',
      error: 'Order must be either asc or desc'
    });
  }

  next();
};

// Log request for debugging (optional)
export const logNewsRequest = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const path = req.path;
  const ip = req.ip || req.connection.remoteAddress;

  console.log(`[${timestamp}] ${method} ${path} - IP: ${ip}`);

  if (req.body && Object.keys(req.body).length > 0) {
    console.log('Body keys:', Object.keys(req.body));
  }

  if (req.files && Object.keys(req.files).length > 0) {
    console.log('Files:', Object.keys(req.files));
  }

  next();
};