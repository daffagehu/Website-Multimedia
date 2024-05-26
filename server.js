const express = require('express');
const app = express();
const port = 3000;

// Mengatur folder public sebagai folder statis
app.use(express.static(path.join(__dirname, 'Website')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Website', 'index.html'));
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
