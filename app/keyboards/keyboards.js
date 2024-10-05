import { InlineKeyboard } from 'grammy';
import actionsKey from './actions-key.js';

// Admin keyboards
export const startKeyboardByAdmin = new InlineKeyboard()
    .text('🎉 Начать новый розыгрыш', actionsKey.ADMIN_SET_JOKE).row()
    .text('⚙ Настройки розыгрыша', actionsKey.ADMIN_SET_SETTINGS).row()
    .text('(DEV 🛠) История розыгрышей', '-').row()
    .text('(DEV 🛠) Последйни розыгрыш', '-');

export const settingsJokeByAdmin = new InlineKeyboard()
    .text('🖊 Добавить название ', actionsKey.ADMIN_SET_TITLE_JOKE).row()
    .text('🎇 Уведомить пользователей', '-').row()
    .text('✅ Запустить розыгрыш!', '-').row()
    .text('⬅ Вернуться назад', actionsKey.MAIN_MENU_FROM_JOKE);

export const globalSettingsJokeByAdmin = new InlineKeyboard()
    .text('🧵 Текст для кнопки участия', '-').row()
    .text('🏆 Количество победителей', '-').row()
    .text('⏳ Автозавершение', '-').row()
    .text('⬅ Вернуться назад', actionsKey.MAIN_MENU);

// User keyboards
export const startKeyboardByUser = new InlineKeyboard()
    .text('Участвовать', actionsKey.USER_SET_PARTICIPATION);
