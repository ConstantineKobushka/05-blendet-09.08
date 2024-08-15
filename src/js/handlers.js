import { STORAGE_KEY, tasks } from './data';
import { readFromLocalStorage, saveToLocalStorage } from './local-storage';
import { renderTasks } from './render-functions';

export function onTaskFormSubmit(e) {
  e.preventDefault();
  const task = e.target.elements.taskName.value.trim();
  tasks.push(task);
  renderTasks(tasks);
  saveToLocalStorage(STORAGE_KEY, tasks);
  e.target.reset();
}

export function initFunction() {
  let dataFromLocalStarage = readFromLocalStorage(STORAGE_KEY);
  console.log(dataFromLocalStarage);
  tasks = dataFromLocalStarage;
  renderTasks(tasks);
}

export function onRemuveButtonClick(e) {
  if (e.targetarget.nodeName !== 'BUTTON') return;
}
