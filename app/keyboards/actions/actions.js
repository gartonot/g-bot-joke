// Действия для админа
export const adminSetJoke = async (ctx) => {
  await ctx.reply('Вы запустили розыгрыш');
}

// Действия для пользователя
export const userSetParticipation = async (ctx) => {
  await ctx.reply('Вы нажали участвовать');
}
