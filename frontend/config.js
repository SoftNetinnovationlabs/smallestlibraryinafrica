const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://api.smallestlibrary.onrender.com' // Production URL
    : process.env.NODE_ENV === 'staging'
    ? 'https://api.smallestlibrary.org' // Staging URL
    : 'http://localhost:5000/api'; // Development URL
    export default BASE_URL
