import { redis } from '../lib/redis.js';

export default async function handler(req, res) {
  try {
    // Cleanup old analytics data (older than 60 days)
    const result = await redis.zremrangebyscore('analytics', '-inf', Date.now() - 60*86400000);
    console.log(`[${new Date().toISOString()}] Backup completed`);
    return res.status(200).json({ success: true, result });
  } catch (error) {
    console.error(`[${new Date().toISOString()}] Backup failed:`, error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
