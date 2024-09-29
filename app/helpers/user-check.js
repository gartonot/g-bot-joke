import isAdmin from './is-admin.js';
import { 
  startKeyboardByAdmin,
  startKeyboardByUser,
} from '../keyboards/index.js';

const welcomeAdmin = (ctx) => {
  ctx.reply('G-BOT Joke приветствует администрацию', {
    reply_markup: startKeyboardByAdmin
  });
}

const welcomeUser = (ctx) => {
  ctx.reply('Добро пожаловать в G-BOT Joke', {
    reply_markup: startKeyboardByUser,
  });
}

const userCheck = (bot) => {
  bot.use(startKeyboardByAdmin);
  bot.use(startKeyboardByUser);

  bot.command('start', (ctx) => {
    if(isAdmin(ctx.from.id)) {
      welcomeAdmin(ctx);
    } else {
      welcomeUser(ctx);
    }
  })
}

export default userCheck;
