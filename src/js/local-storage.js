export function saveToLocalStorage(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Помилка при записуванні:', error.message);
  }
}

export function readFromLocalStorage(key) {
  try {
    let serializedState = JSON.parse(localStorage.getItem(key));

    console.log(serializedState);
    if (serializedState === null) {
      return (serializedState = []);
    }
    return serializedState;
  } catch (error) {
    console.error('Помилка при считуванні:', error.message);
  }
}
