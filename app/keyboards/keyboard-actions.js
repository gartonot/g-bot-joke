import { settingsJokeByAdmin } from './index.js';

const keyboardActions = (bot) => {
  bot.callbackQuery('adminSetJoke', async (ctx) => {
    await ctx.reply('Админ запускает розыгрыш', {
      reply_markup: settingsJokeByAdmin
    });
  });

  bot.callbackQuery('userSetParticipation', async (ctx) => {
    await ctx.reply('Пользователь нажал участвовать');
  });
};

export default keyboardActions;
