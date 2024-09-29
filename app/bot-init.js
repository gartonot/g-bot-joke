import 'dotenv/config';
import { Bot } from 'grammy';
import userCheck from './helpers/user-check.js';

const botInit = () => {
  const bot = new Bot(process.env.BOT_API_KEY)
  bot.start();

  // Делаем проверку на то, какой пользователь запустил бота
  userCheck(bot);

  return bot;
}

export default botInit;
