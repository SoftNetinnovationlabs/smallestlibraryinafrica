const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://api-smallestlibraryinafrica.onrender.com' // Production URL
    : process.env.NODE_ENV === 'staging'
    ? 'https://api.smallestlibraryinafrica.org' // Staging URL
    : 'http://localhost:5000/api'; // Development URL
    export default BASE_URL
