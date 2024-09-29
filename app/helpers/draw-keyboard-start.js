import isAdmin from './is-admin.js';
import { 
  startKeyboardByAdmin,
  startKeyboardByUser,
} from '../keyboards/index.js';

const welcomeAdmin = async (ctx) => {
  await ctx.reply('G-Bot Joke приветствует администрацию', {
    reply_markup: startKeyboardByAdmin
  });
}

const welcomeUser = async (ctx) => {
  /*
    TODO

    Проверяем, есть ли доступный розыгрыш в данный момент, 
      если да - то предлагаем пользователю участвовать
      если нет - то говорим, что сейчас нет розыгрышей
  */

  await ctx.reply('Добро пожаловать в G-Bot Joke', {
    reply_markup: startKeyboardByUser,
  });
}

const welcomeHandler = async (ctx) => {
  if(isAdmin(ctx.from.id)) {
    await welcomeAdmin(ctx);
  } else {
    await welcomeUser(ctx);
  }
}

const drawKeyboardStart = (bot) => {
  // Приветствуем пользователя\админа по кнопке старт
  bot.command('start', welcomeHandler);
}

export default drawKeyboardStart;
