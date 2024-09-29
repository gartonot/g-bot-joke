import {
    startKeyboardByAdmin,
    startKeyboardByUser,
    settingsJokeByAdmin,
} from '../keyboards/index.js';

const registerKeyboards = (bot) => {
    bot.use(startKeyboardByAdmin);
    bot.use(startKeyboardByUser);
    bot.use(settingsJokeByAdmin);
}

export default registerKeyboards;
