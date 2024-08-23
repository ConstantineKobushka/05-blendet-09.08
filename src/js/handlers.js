import { data } from './data';
import { readFromLocalStorage, saveToLocalStorage } from './local-storage';
import { renderTasks } from './render-functions';

export function onTaskFormSubmit(e) {
  e.preventDefault();
  const taskText = e.target.elements.taskName.value.trim();
  if (taskText === '') {
    e.target.elements.taskName.focus();
    return;
  }

  const newTask = {
    id: Date.now(),
    text: taskText,
  };

  data.tasks.push(newTask);
  renderTasks(data.tasks);
  saveToLocalStorage(data.STORAGE_KEY, data.tasks);
  e.target.reset();
  e.target.elements.taskName.focus();
}

export function initFunction() {
  data.tasks = readFromLocalStorage(data.STORAGE_KEY);
  renderTasks(data.tasks);
}

export function onRemuveButtonClick(e) {
  if (e.target.nodeName !== 'BUTTON') return;
  const parenNode = e.target.closest('.task-list--item');
  const id = Number(parenNode.id);
  data.tasks = data.tasks.filter(task => task.id !== id);
  saveToLocalStorage(data.STORAGE_KEY, data.tasks);
  parenNode.remove();
}
