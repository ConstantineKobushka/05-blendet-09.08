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

document.addEventListener('DOMContentLoaded', initFunction);
refs.taskForm.addEventListener('submit', onTaskFormSubmit);
refs.taskList.addEventListener('click', onRemuveButtonClick);
