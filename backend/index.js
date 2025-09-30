const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Пример маршрута
app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: "Кроссовки", price: 2999 },
    { id: 2, name: "Наушники", price: 1999 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
