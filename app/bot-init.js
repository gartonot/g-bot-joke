import 'dotenv/config';
import { Bot } from 'grammy';

const botInit = () => {
  const bot = new Bot(process.env.BOT_API_KEY)
  bot.start();

  return bot;
}

export default botInit;
