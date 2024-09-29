import 'dotenv/config';
import { Bot } from 'grammy';

const init = () => {
  const bot = new Bot(process.env.BOT_API_KEY)
 
  bot.start();
  
  bot.api.setMyCommands([
    {
      command: 'start',
      description: 'Запуск',
    }
  ])

  bot.command('start', async (ctx) => {
    console.log(`Пользователь ${ctx.from.username} и ID: ${ctx.from.id} запустил бота командой start`);
    let welcomeText = 'Прива чечек'

    await ctx.reply(welcomeText);
  });
}

export default init;
