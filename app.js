const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const bot = new TelegramBot('6699252069:AAFplmsyZCoBUvPlo-r59HtSzGdPizj89EQ', { polling: true });

// Обработка данных формы
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/form', (req, res) => {
  const formData = req.body;
  
  // Отправка уведомления в Telegram
  const chatId = '1817509731'; // Замените на ваш chatId
  const message = `Новая форма!\nИмя: ${formData.name}\nEmail: ${formData.email}\nСообщение: ${formData.message}`;

  bot.sendMessage(chatId, message);
  
  res.send('Данные успешно отправлены');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});