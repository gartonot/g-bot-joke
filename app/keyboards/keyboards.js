import { Menu } from '@grammyjs/menu';
import { 
    userSetParticipation,
    adminSetJoke,
} from './actions/index.js';

export const startKeyboardByAdmin = new Menu('startKeyboardByAdmin')
    .text('Начать новый розыгрыш',          adminSetJoke).row()
    .text('История розыгрышей (DEV 🛠)',    () => {}).row()
    .text('Последйни розыгрыш(DEV 🛠)',     () => {});

export const startKeyboardByUser = new Menu('startKeyboardByUser')
    .text('Участвовать', userSetParticipation);
