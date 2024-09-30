import { hydrate } from '@grammyjs/hydrate';
import { MemorySessionStorage  } from 'grammy'; 
import { chatMembers } from "@grammyjs/chat-members";

const registerPlugins = (bot) => {
  const adapter = new MemorySessionStorage();

  bot.use(chatMembers(adapter));
  bot.use(hydrate());
}

export default registerPlugins;
