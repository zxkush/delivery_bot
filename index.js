require('dotenv').config();
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.TOKEN);

// ЭТА КОМАНДА ОТВЕЧАЕТ НА /start
bot.start((ctx) => {
    ctx.reply('Привет! Я твой бот. Напиши /menu, чтобы увидеть ассортимент.');
});

// ЭТА КОМАНДА ОТВЕЧАЕТ НА /menu (с текстом под спойлером)
bot.command('menu', (ctx) => {
    ctx.reply(
        '🎂 Наш ассортимент и цены: https://zxkush.github.io/delivery_bot/\n\n' +
        '🤫 <tg-spoiler>(промокод NineGo даёт бесплатную доставку)</tg-spoiler>',
        { parse_mode: 'HTML' }
    );
});

// Запуск бота
bot.launch().then(() => {
    console.log("УРА! БОТ ЗАПУЩЕН!");
});