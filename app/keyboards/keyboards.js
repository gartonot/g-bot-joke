import { InlineKeyboard } from 'grammy';

// Admin keyboards
export const startKeyboardByAdmin = new InlineKeyboard()
    .text('Начать новый розыгрыш', 'adminSetJoke').row()
    .text('История розыгрышей (DEV 🛠)', '-').row()
    .text('Последйни розыгрыш(DEV 🛠)', '-');

export const settingsJokeByAdmin = new InlineKeyboard()
    .text('Настройка 1', '-').row()
    .text('Настройка 2', '-').row()
    .text('Настройка 3', '-');


// User keyboards
export const startKeyboardByUser = new InlineKeyboard()
    .text('Участвовать', 'userSetParticipation');
