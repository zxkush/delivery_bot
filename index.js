require('dotenv').config();
const { Telegraf, Markup } = require('telegraf');

// Создаем бота
const bot = new Telegraf(process.env.TOKEN);

// Обработка команды /menu
bot.command('menu', (ctx) => {
    ctx.reply('🎂 Наш ассортимент и цены:', Markup.inlineKeyboard([
        Markup.button.url('Открыть меню', 'https://zxkush.github.io/delivery_bot/')
    ]));
});

// Запуск бота
bot.launch().then(() => {
    console.log("Бот запущен на Telegraf!");
});

// Чтобы бот корректно выключался при нажатии Ctrl+C
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));