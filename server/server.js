import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Store connected React clients
let clients = [];

// React connects here
app.get("/ivi-events", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  // Add this React client
  clients.push(res);

  console.log("React client connected");

  // Remove client when connection closes
  req.on("close", () => {
    clients = clients.filter((client) => client !== res);
    console.log("React client disconnected");
  });
});

// n8n sends the screen here
app.post("/ivi-screen", (req, res) => {
  console.log("Received from n8n:", req.body);

  const { screen } = req.body;

  // Send screen information to all connected React clients
  clients.forEach((client) => {
    client.write(`data: ${JSON.stringify({ screen })}\n\n`);
  });

  res.json({
    success: true,
    screen: screen,
  });
});

app.listen(3000, () => {
  console.log("IVI Node.js server running on http://localhost:3000");
});