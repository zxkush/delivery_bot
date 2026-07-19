require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

// Бот берет токен из файла .env автоматически
const token = process.env.TOKEN;
const bot = new TelegramBot(token, {polling: true});
const siteUrl = "https://zxkush.github.io/delivery_bot/";

bot.onText(/\/menu/, (msg) => {
    bot.sendMessage(msg.chat.id, "🍟 Наш ассортимент и цены:", {
        reply_markup: {
            inline_keyboard: [[{ text: "Открыть меню", url: siteUrl }]]
        }
    });
});

console.log("Бот запущен!");