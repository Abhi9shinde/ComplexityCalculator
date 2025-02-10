export default async function handler(req, res) {
  const url = process.env.EXTERNAL_API_URL;
  const externalApiUrl = url;

  try {
    const response = await fetch(externalApiUrl, {
      method: req.method,
      headers: req.headers,
      body: req.method === "POST" ? JSON.stringify(req.body) : undefined,
    });

    const data = await response.json();

    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from the API" });
  }
}
