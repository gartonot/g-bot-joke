import { 
  settingsJokeByAdmin,
  startKeyboardByAdmin,
  globalSettingsJokeByAdmin,
} from './index.js';
import actionsKey from './actions-key.js';
import jokeController from '../http/controllers/joke-controller.js';

const keyboardActions = (bot) => {

  /*
    Действия админа
  */ 

  // Клик по кнопке запуска розыгрыша (рисуем кнопки настроек розыгрыша)
  bot.callbackQuery(actionsKey.ADMIN_SET_JOKE, async (ctx) => {
    
    // TODO: сделать хелпер для рандомного числа + указать диапозон // подключить либу

    // Создаём рандомный айди для розыгрыша и сохраняем его в базу
    ctx.session.jokeStartId = Math.floor(Math.random() * 100);
    await jokeController.createJoke(ctx.session.jokeStartId);

    await ctx.editMessageText('Перед началом настроим розыгрыш', {
      reply_markup: settingsJokeByAdmin
    });
  });

  bot.callbackQuery(actionsKey.ADMIN_SET_SETTINGS, async (ctx) => {
    await ctx.editMessageText('Глобальные настройки', {
      reply_markup: globalSettingsJokeByAdmin
    });
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
