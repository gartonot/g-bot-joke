import 'dotenv/config';
import botInit from './app/bot-init.js';
import botCatchError from './app/bot-catch-error.js';
import drawKeyboardStart from './app/helpers/draw-keyboard-start.js';
import registerKeyboards from './app/modules/register-keyboards.js';

const bot = botInit();

// Рисуем стартовые клавиатуры
drawKeyboardStart(bot);

// Регистрируем действия по клавиатуре
registerKeyboards(bot);

// Обработчик ошибок
botCatchError(bot);
