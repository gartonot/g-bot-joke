import { 
    settingsJokeByAdmin,
    startKeyboardByAdmin,
    globalSettingsJokeByAdmin,
    returnJokeSettingsKeyboard,
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

        await ctx.editMessageText('Настройки розыгрыша', {
            reply_markup: settingsJokeByAdmin
        });
    });

    // Если был клик по кнопке отмена во время настроек розыгрыша
    bot.callbackQuery(actionsKey.ADMIN_SET_JOKE_SETTINGS, async (ctx) => {
        ctx.session.isSetTitle = false;
        
        await ctx.editMessageText('Настройки розыгрыша', {
            reply_markup: settingsJokeByAdmin
        });
    })

    // Клик по кнопке "Добавить название"
    bot.callbackQuery(actionsKey.ADMIN_SET_TITLE_JOKE, async (ctx) => {
        ctx.session.isSetTitle = true;
        
        await ctx.editMessageText('Напишите название розыгрыша', {
            reply_markup: returnJokeSettingsKeyboard,
        });
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

    // Обработчик на сообщения
    bot.on('message', async (ctx) => {
        if(ctx.session.isSetTitle) {
            ctx.session.isSetTitle = false;
            const jokeId = ctx.session.jokeStartId;
            const title = ctx.message.text;
            await jokeController.setTitleJokeById(jokeId, title);

            await ctx.reply(`Настройки розыгрыша: \n${title}`, {
                reply_markup: settingsJokeByAdmin
            });
        }
    });
};

export default keyboardActions;
