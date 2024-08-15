import { refs } from './refs';

export function renderTasks(tasks) {
  const marcup = tasks
    .map(
      task => `
      <li class="task-list--item">
        ${task}
        <button type="button" class="task-list--btn">Видалити</button>
      </li>
    `
    )
    .join('');

  refs.taskList.innerHTML = marcup;
}
