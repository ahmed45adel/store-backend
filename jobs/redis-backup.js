import { redis } from '../lib/redis.js';

export default async function handler(req, res) {
  try {
    const result = await redis.save();
    console.log(`[${new Date().toISOString()}] Backup completed`);
    res.status(200).json({ success: true, result });
  } catch (error) {
    console.error(`[${new Date().toISOString()}] Backup failed:`, error);
    res.status(500).json({ success: false, error: error.message });
  }
}
