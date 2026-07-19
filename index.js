const TelegramBot = require('node-telegram-bot-api');

// Вставь сюда свой токен
const token = '8264274999:AAGqAuQo0CtgAOY3AI4TBvl6z-AFRFxaL34';

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