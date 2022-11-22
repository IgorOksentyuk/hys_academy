import Storage from '../storage';

export function LocalStorage(target: Storage, key: string) {
  function getInputValue<T>(inputName: string): T {
    return JSON.parse(localStorage.getItem(inputName) as string) as T;
  }

  function setInputValue<T>(inputName: string, inputValue: T): void {
    localStorage.setItem(inputName, JSON.stringify(inputValue));
  }

  Object.defineProperty(target, key, {
    get: () => getInputValue,
    set: () => setInputValue,
  });
}
