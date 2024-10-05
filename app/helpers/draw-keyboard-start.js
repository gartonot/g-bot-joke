import isAdmin from './is-admin.js';
import { 
    startKeyboardByAdmin,
    startKeyboardByUser,
} from '../keyboards/index.js';
import checkSubscribe from './check-subscribe.js';
import jokeController from '../http/controllers/joke-controller.js';

const welcomeAdmin = async (ctx) => {
    /*
        Если вдруг админ решил нажать ещё раз кнопку старта, 
         а старый розыгрыш ещё не завершился, 
         тогда удаляем этот розыгрыш
    */
    if (ctx.session.jokeStartId) {
        jokeController.deleteJokeBySessionId(ctx.session.jokeStartId);
    }

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
    const isSubscriber = await checkSubscribe(ctx);

    if (isSubscriber) {
        if (isAdmin(ctx.from.id)) {
            await welcomeAdmin(ctx);
        } else {
            await welcomeUser(ctx);
        }
    }
}

const drawKeyboardStart = (bot) => {
    // Приветствуем пользователя\админа по кнопке старт
    bot.command('start', welcomeHandler);
}

export default drawKeyboardStart;
