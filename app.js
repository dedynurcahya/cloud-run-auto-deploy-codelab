const express = require("express");
const path = require("path");

const app = express();

// Serve static files dari folder public
app.use(express.static(path.join(__dirname, "public")));

// Route utama
app.get("/", (req, res) => {
  res.send("Cloud Run berhasil jalan 🚀");
});

// Port Cloud Run (WAJIB pakai process.env.PORT)
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
