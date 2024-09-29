import {
    startKeyboardByAdmin,
    startKeyboardByUser,
} from '../keyboards/index.js';

const registerKeyboards = (bot) => {
    bot.use(startKeyboardByAdmin);
    bot.use(startKeyboardByUser);
}

export default registerKeyboards;
