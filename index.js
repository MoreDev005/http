// Import express
const express = require('express');

// Inisialisasi aplikasi express
const app = express();

// Set port untuk server
const port = 3000;

// Route untuk halaman utama
app.get('/', (req, res) => {
  res.send('<h1>Selamat datang di Web Sederhana dengan Express!</h1>');
});

// Route untuk halaman "About"
app.get('/about', (req, res) => {
  res.send('<h2>Ini adalah halaman About.</h2>');
});

// Mulai server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
