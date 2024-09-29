import 'dotenv/config';
import { Bot } from 'grammy';
import registerPlugins from './modules/register-plugins.js';
import registerKeyboards from './modules/register-keyboards.js';

const botInit = () => {
  const bot = new Bot(process.env.BOT_API_KEY);

  // Регистрируем плагины
  registerPlugins(bot);
  // Регистрируем клавиатуры
  registerKeyboards(bot);

  // Запускаем бота
  bot.start();

  return bot;
}

export default botInit;
