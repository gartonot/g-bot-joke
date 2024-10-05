import { 
  settingsJokeByAdmin,
  startKeyboardByAdmin,
  globalSettingsJokeByAdmin,
} from './index.js';
import actionsKey from './actions-key.js';
import jokeController from '../http/controllers/joke-controller.js';
import randomId from '../helpers/random-id.js';

const keyboardActions = (bot) => {

  /*
    Действия админа
  */ 

  // Клик по кнопке запуска розыгрыша (рисуем кнопки настроек розыгрыша)
  bot.callbackQuery(actionsKey.ADMIN_SET_JOKE, async (ctx) => {
    ctx.session.jokeStartId = randomId();
    await jokeController.createJoke(ctx.session.jokeStartId);

    await ctx.editMessageText('Перед началом настроим розыгрыш', {
      reply_markup: settingsJokeByAdmin
    });
  });

  // Даём название розыгрышу
  bot.callbackQuery(actionsKey.ADMIN_SET_TITLE_JOKE, async (ctx) => {
    ctx.reply('Добавляем к розыгрышу название')
  })

  // Глобальные настройки
  bot.callbackQuery(actionsKey.ADMIN_SET_SETTINGS, async (ctx) => {
    await ctx.editMessageText('Глобальные настройки', {
      reply_markup: globalSettingsJokeByAdmin
    });
  })

  // Клик по кнопке назад из розыгрышка (рисуем главное меню для админа)
  bot.callbackQuery(actionsKey.MAIN_MENU_FROM_JOKE, async (ctx) => {
    await jokeController.deleteJokeBySessionId(ctx.session.jokeStartId);
    ctx.session.jokeStartId = undefined;
    
    await ctx.editMessageText('G-Bot Joke приветствует администрацию', {
      reply_markup: startKeyboardByAdmin
    })
  })

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
