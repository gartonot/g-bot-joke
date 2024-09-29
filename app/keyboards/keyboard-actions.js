import { 
  settingsJokeByAdmin,
  startKeyboardByAdmin,
} from './index.js';
import actionsKey from './actions-key.js';

const keyboardActions = (bot) => {

  /*
    Действия админа
  */ 

  // Клик по кнопке запуска розыгрыша (рисуем кнопки настроек розыгрыша)
  bot.callbackQuery(actionsKey.ADMIN_SET_JOKE, async (ctx) => {
    await ctx.editMessageText('Перед началом настроим розыгрыш', {
      reply_markup: settingsJokeByAdmin
    });
  });

  // Клик по кнопке назад (рисуем главное меню для админа)
  bot.callbackQuery(actionsKey.MAIN_MENU, async (ctx) => {
    await ctx.editMessageText('G-Bot Joke приветствует администрацию', {
      reply_markup: startKeyboardByAdmin
    })
  })

  /*
    Действия пользователя
  */

  // Клик по кнопке участвовать
  bot.callbackQuery(actionsKey.USER_SET_PARTICIPATION, async (ctx) => {
    await ctx.reply('Пользователь нажал участвовать');
  });
};

export default keyboardActions;
