import 'dotenv/config';
import { Bot } from 'grammy';
import registerPlugins from './modules/register-plugins.js';

const botInit = () => {
  const bot = new Bot(process.env.BOT_API_KEY);

  // Регистрируем плагины
  registerPlugins(bot);

  // Запускаем бота
  bot.start();

  return bot;
}

export default botInit;
