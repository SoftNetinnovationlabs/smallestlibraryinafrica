const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://slia.netoracloud.com' // Production URL
    : process.env.NODE_ENV === 'staging'
    ? 'https://slia.netoracloud.com' // Staging URL
    : 'http://192.168.0.103:9000'; // Development URL
    export default BASE_URL
