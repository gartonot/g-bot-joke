const userCheck = (bot) => {
  const ID_ADMIN = 0 // TODO: хранить в БД или env

  bot.command('start', (ctx) => {
    if(ctx.from.id === ID_ADMIN) {
      ctx.reply('G-BOT Joke приветствует администрацию');
    } else {
      ctx.reply('Добро пожаловать в G-BOT Joke');
    }
  })
}

export default userCheck;
