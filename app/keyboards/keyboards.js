import { InlineKeyboard } from 'grammy';
import actionsKey from './actions-key.js';

// Admin keyboards
export const startKeyboardByAdmin = new InlineKeyboard()
    .text('🎉 Начать новый розыгрыш', actionsKey.ADMIN_SET_JOKE).row()
    .text('(DEV 🛠) История розыгрышей', '-').row()
    .text('(DEV 🛠) Последйни розыгрыш', '-');

export const settingsJokeByAdmin = new InlineKeyboard()
    .text('Настройка 1', '-').row()
    .text('Настройка 2', '-').row()
    .text('Настройка 3', '-').row()
    .text('⬅ Назад ', actionsKey.MAIN_MENU);


// User keyboards
export const startKeyboardByUser = new InlineKeyboard()
    .text('Участвовать', actionsKey.USER_SET_PARTICIPATION);
