import { GrammyError, HttpError } from 'grammy';

const botCatchError = (bot) => {
    bot.catch((catchError) => {
        const ctx = catchError.ctx;
        console.log(`Error while handling update ${ctx.update.update_id}:`);

        const error = catchError.error;

        if (error instanceof GrammyError) {
            console.error('Error in request:', error.description)
        } else if (error instanceof HttpError) {
            console.error('Could not contact Telegram', error);
        } else {
            console.error('Unknow error', error);
        }
    });
}

export default botCatchError;
