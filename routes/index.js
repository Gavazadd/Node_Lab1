function GET(req, res, url, payload) {
  res.json({ text: "root get" });
}

function OPTIONS(req, res, url, payload) {
  res.json({ name: "root options" });
}

function POST(req, res, url, payload) {
  res.json({ text: "root post" });
}

export { GET, OPTIONS, POST };
