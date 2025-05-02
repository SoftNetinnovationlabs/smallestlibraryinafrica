const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://api-smallestlibraryinafrica.onrender.com.api' // Production URL
    : process.env.NODE_ENV === 'staging'
    ? 'https://api.smallestlibraryinafrica.org/api' // Staging URL
    : 'http://localhost:5000/api'; // Development URL
    export default BASE_URL
