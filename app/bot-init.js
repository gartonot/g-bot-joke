import { Bot } from 'grammy';
import registerPlugins from './modules/register-plugins.js';

const botInit = () => {
  const bot = new Bot(process.env.BOT_API_KEY);

  // Регистрируем плагины
  registerPlugins(bot);

  // Разрешения на обновление
  const allowedUpdates = ['message', 'callback_query', 'chat_member'];

  // Запускаем бота
  bot.start({ allowed_updates: allowedUpdates });

  return bot;
}

export default botInit;
