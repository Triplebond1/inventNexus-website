const app = require("./app");

const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load environment variables from .env file
dotenv.config();


mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
      console.log('✅ Connected to MongoDB');
  
      // Start the server only after successful DB connection
      const PORT = process.env.PORT || 4000;
      app.listen(PORT, () => {
        console.log(`🚀 Server is running on port ${PORT}`);
      });
    })
    .catch(err => {
      console.error('❌ Failed to connect to MongoDB', err);
      process.exit(1); // Exit process with failure
    });