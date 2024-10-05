import { hydrate } from '@grammyjs/hydrate';
import { MemorySessionStorage, session  } from 'grammy'; 
import { chatMembers } from "@grammyjs/chat-members";

const registerPlugins = (bot) => {
    const adapter = new MemorySessionStorage();

    bot.use(chatMembers(adapter));
    bot.use(hydrate());
    bot.use(session({ initial: () => ({ botStart: true }) }));
}

export default registerPlugins;
