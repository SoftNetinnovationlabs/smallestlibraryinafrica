const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://slia.netoracloud.com/api' // Production URL
    : process.env.NODE_ENV === 'staging'
    ? 'https://slia.netoracloud.com/api' // Staging URL
    : 'http://192.168.0.103:9000/api'; // Development URL
    export default BASE_URL
