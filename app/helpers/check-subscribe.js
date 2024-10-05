import config from '../config.js';

const isSubscriber = async (ctx) => {
    const chatMember = await ctx.chatMembers.getChatMember(config.CHAT_JOKE_ID);

    const isSubscriber = chatMember.status !== 'left';

    if (!isSubscriber) {
        await ctx.reply(`Для участия вы должны быть подписаны на наш канал! ${config.CHAT_JOKE_NAME}`);
    } 

    return isSubscriber;
};

export default isSubscriber;
