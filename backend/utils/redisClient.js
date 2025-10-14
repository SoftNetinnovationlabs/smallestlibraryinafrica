import Redis from 'ioredis';

let redis;

const tryConnectProd = async () => {
  try {
    redis = new Redis({
      url: process.env.REDIS_REST_URL,
    });

    redis.on('connect', () => console.log('✅ Connected to Redis (Production)'));
    redis.on('error', (err) => console.error('❌ Redis connection error:', err));

    return redis;
  } catch (err) {
    console.error('Redis connection error:', err);
  }
};

const tryConnectLocal = async () => {
  try {
    redis = new Redis(
      process.env.REDIS_REST_URL_LOCAL || 'redis://localhost:6379'
    ); // defaults to localhost:6379
    redis.on('connect', () => console.log('✅ Connected to Redis (Local)'));
    redis.on('error', (err) => console.error('❌ Redis connection error:', err));

    return redis;
  } catch (err) {
    console.error('Redis connection error:', err);
  }
};

// Choose which to run based on NODE_ENV, not the URL itself
const connectRedis = process.env.NODE_ENV === 'production' ? tryConnectProd : tryConnectLocal;

// Initialize immediately
connectRedis();

export default redis;
