const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://api-smallestlibraryinafrica.onrender.com' 
    : process.env.NODE_ENV === 'staging'
    ? 'https://api.smallestlibraryinafrica.org' 
    : 'http://localhost:5000'; 
    export default baseURL
