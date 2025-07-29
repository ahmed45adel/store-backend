import Redis from "ioredis";
import dotenv from "dotenv";
import { URL } from 'url';

dotenv.config();

const redisUrl = new URL(process.env.UPSTASH_REDIS_URL);

// Upstash-optimized connection configuration
export const redis = new Redis({
  host: redisUrl.hostname,
  port: redisUrl.port,
  username: redisUrl.username,
  password: redisUrl.password,
  tls: {
    servername: redisUrl.hostname,
    rejectUnauthorized: false
  },
  connectTimeout: 20000,
  maxRetriesPerRequest: 2,
  enableAutoPipelining: true,
  retryStrategy: (times) => Math.min(times * 100, 3000)
});
