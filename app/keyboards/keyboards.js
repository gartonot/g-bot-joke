import { InlineKeyboard } from 'grammy';
import actionsKey from './actions-key.js';

// Admin keyboards
export const startKeyboardByAdmin = new InlineKeyboard()
    .text('Начать новый розыгрыш', actionsKey.ADMIN_SET_JOKE).row()
    .text('История розыгрышей (DEV 🛠)', '-').row()
    .text('Последйни розыгрыш(DEV 🛠)', '-');

export const settingsJokeByAdmin = new InlineKeyboard()
    .text('Настройка 1', '-').row()
    .text('Настройка 2', '-').row()
    .text('Настройка 3', '-');


// User keyboards
export const startKeyboardByUser = new InlineKeyboard()
    .text('Участвовать', actionsKey.USER_SET_PARTICIPATION);
