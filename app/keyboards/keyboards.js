import { Menu } from '@grammyjs/menu';
import { 
    userSetParticipation,
    adminSetJoke,
} from './actions/index.js';

// Admin keyboards
export const startKeyboardByAdmin = new Menu('startKeyboardByAdmin')
    .text('Начать новый розыгрыш',          adminSetJoke).row()
    .text('История розыгрышей (DEV 🛠)',    () => {}).row()
    .text('Последйни розыгрыш(DEV 🛠)',     () => {});

export const settingsJokeByAdmin = new Menu('settingsJokeByAdmin')
    .text('Настройка 1', () => {}).row()
    .text('Настройка 2', () => {}).row()
    .text('Настройка 3', () => {});

// User keyboards
export const startKeyboardByUser = new Menu('startKeyboardByUser')
    .text('Участвовать', userSetParticipation);
