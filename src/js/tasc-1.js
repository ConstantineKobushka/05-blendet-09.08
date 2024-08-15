import { refs } from './refs';
import {
  initFunction,
  onRemuveButtonClick,
  onTaskFormSubmit,
} from './handlers';

//! Task 1
/*
Створи перелік справ.
Є інпут, який вводиться назва завдання.
Після натискання на кнопку "Додати" завдання додається до списку #list.
Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
Забрати завдання зі списку.
Список із завданнями має бути доступним після перезавантаження сторінки.
*/

refs.taskForm.addEventListener('submit', onTaskFormSubmit);
document.addEventListener('DOMContentLoaded', initFunction);
refs.taskList.addEventListener('click', onRemuveButtonClick);
