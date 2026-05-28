// Vercel Serverless Function - CORS proxy to bypass News API (newsapi.org) 426 referrer blocks on production domains.
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { country, category, page, pagesize, apiKey } = req.query;

  // Safe parameters defaults
  const paramCountry = country || 'us';
  const paramCategory = category || 'general';
  const paramPage = page || 1;
  const paramPageSize = pagesize || 6;
  const paramApiKey = apiKey || '9d6a90ffed354199b2336ac851290d8b';

  const url = `https://newsapi.org/v2/top-headlines?country=${paramCountry}&category=${paramCategory}&apiKey=${paramApiKey}&page=${paramPage}&pagesize=${paramPageSize}`;

  try {
    // Perform server-side fetch (which does not pass browser Referer headers)
    const apiRes = await fetch(url);
    const data = await apiRes.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
}
