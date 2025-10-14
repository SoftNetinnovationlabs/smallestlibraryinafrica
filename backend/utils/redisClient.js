import Redis from "ioredis";

let redisClient;

const connectRedis = async () => {
  try {
    const redisUrl =
      process.env.NODE_ENV === "production"
        ? process.env.REDIS_REST_URL
        : process.env.REDIS_REST_URL_LOCAL || "redis://localhost:6379";

    console.log(`🔗 Connecting to Redis using URL: ${redisUrl}`);
    redisClient = new Redis(redisUrl, {
      retryStrategy: (times) => Math.min(times * 100, 3000),
      maxRetriesPerRequest: null,
    });

    redisClient.on("connect", () => console.log(`✅ Redis connected (${process.env.NODE_ENV})`));
    redisClient.on("ready", () => console.log("🚀 Redis ready"));
    redisClient.on("error", (err) => console.error("❌ Redis error:", err));
    redisClient.on("close", () => console.warn("🔌 Redis connection closed"));

    return redisClient;
  } catch (err) {
    console.error("Redis connection error:", err);
  }
};

// ✅ Immediately connect, then export the connected instance
const redisPromise = connectRedis();

export default redisPromise;
