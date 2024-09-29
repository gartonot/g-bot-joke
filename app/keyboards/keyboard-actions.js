import { settingsJokeByAdmin } from './index.js';
import actionsKey from './actions-key.js';

const keyboardActions = (bot) => {
  bot.callbackQuery(actionsKey.ADMIN_SET_JOKE, async (ctx) => {
    await ctx.reply('Админ запускает розыгрыш', {
      reply_markup: settingsJokeByAdmin
    });
  });

  bot.callbackQuery(actionsKey.USER_SET_PARTICIPATION, async (ctx) => {
    await ctx.reply('Пользователь нажал участвовать');
  });
};

export default keyboardActions;
