import { hydrate } from '@grammyjs/hydrate'; 

const registerPlugins = (bot) => {
  bot.use(hydrate());
}

export default registerPlugins;
