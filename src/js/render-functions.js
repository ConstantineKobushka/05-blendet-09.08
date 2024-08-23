import { refs } from './refs';

export function renderTasks(tasks) {
  const marcup = tasks
    .map(
      task => `
      <li class="task-list--item" id=${task.id}>
        ${task.text}
        <button class="task-list--item-btn" type="button" class="task-list--btn">Видалити</button>
      </li>
    `
    )
    .join('');

  refs.taskList.innerHTML = marcup;
}
