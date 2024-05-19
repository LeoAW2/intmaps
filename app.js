const express = require('express');
const path = require('path');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

// Настройка пула соединений с базой данных PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'INTmaps',
  password: '6539',
  port: 5432,
});

// Middleware для раздачи статических файлов
app.use(express.static(path.join(__dirname, 'public')));

// Основной маршрут для отправки index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Маршрут для поиска аудиторий
app.get('/search', async (req, res) => {
  const { room } = req.query;

  if (!room) {
    return res.status(400).send('Room number is required');
  }

  try {
    const result = await pool.query(
      'SELECT * FROM auditoriums WHERE room_number = $1',
      [room]
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
