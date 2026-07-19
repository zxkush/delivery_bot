const { Telegraf, Markup } = require('telegraf');

// Твой бот
const bot = new Telegraf('8264274999:AAGqAuQo0CtgAOY3AI4TBvl6z-AFRFxaL34');

bot.start((ctx) => {
    ctx.reply('Привет! Нажми кнопку ниже:', Markup.inlineKeyboard([
        Markup.button.url('Открыть доставку 🏪', 'https://yandex.ru')
    ]));
});

bot.launch();
console.log('Бот запущен!');