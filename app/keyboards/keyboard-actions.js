const keyboardActions = (bot) => {

  bot.callbackQuery('adminSetJoke', async (ctx) => {
    await ctx.reply('Админ запускает розыгрыш');
  });

  bot.callbackQuery('userSetParticipation', async (ctx) => {
    await ctx.reply('Пользователь нажал участвовать');
  });
};

export default keyboardActions;
