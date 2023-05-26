import { Telegraf } from "telegraf";

const token = process.env.BOT_TOKEN || '';
const bot = new Telegraf(token);

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Scan a beer'))
bot.on('text', ctx => ctx.reply(ctx.message.text));
bot.on('photo', ctx => ctx.reply('Photo received'));
bot.command('info', (ctx) => ctx.reply('Hello'))
void bot.launch();

