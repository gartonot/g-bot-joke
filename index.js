import botInit from './app/bot-init.js';
import drawKeyboardStart from './app/helpers/draw-keyboard-start.js';

const bot = botInit();

// Рисуем стартовые клавиатуры
drawKeyboardStart(bot);

// ctx.menu.update() - обновляет меню (если там что-то изменилось)

// 4. [admin] Начать розыгрыш - предлагаются настройки: 
//   - указать название розыгрыша
//   - указать текст для кнопки (по дефолту "Участвовать")
//   - Настрйока: Показывать кол-во пользователей в розыгрыше или нет
//   - указать кол-во победителей (необязательно, если не выбранно тогда участвуют все кто нажал)
//   - добавить обложку (необязательно, если нет, то без обложки)
//   - указать время автозавершения розыгрыша (по дефолту 3 минуты)

// 5. [admin] Если розыгрыш уже запущен, тогда кнопки для админа следующие:
//   - Завершить розыгрыш

//   // feat на будущее
//   - настройки (изменить название, изменить кол-во победителей, изменить обложку и т.д.)
