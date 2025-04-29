const express = require("express");
const next = require("next");
const dotenv = require("dotenv");
const connectDB = require("./src/db");
const apiApp = require("./src/app");

dotenv.config();

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

(async () => {
  try {
    // Prepare Next.js
    await nextApp.prepare();

    // Connect to MongoDB
   await connectDB();

    // Create Express server
    const server = express();

    // Mount API routes
    server.use("/api", apiApp);

    // Next.js custom route example
    server.get("/custom", (req, res) => {
      res.send("Hello from Custom Express route!");
    });

    // Default handler for Next.js
    server.all("*", (req, res) => {
      return handle(req, res);
    });

    // Start the server
    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Server initialization error:", err);
    process.exit(1);
  }
})();
