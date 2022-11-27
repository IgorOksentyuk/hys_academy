import { IStorage } from './models/storage.model';

export default class Storage implements IStorage {
  public getInputValue<T>(inputName: string): T {
    return JSON.parse(localStorage.getItem(inputName) as string) as T;
  }

  public setInputValue<T>(inputName: string, inputValue: T): void {
    localStorage.setItem(inputName, JSON.stringify(inputValue));
  }

  public clearInputValue(inputValue: string) {
    localStorage.removeItem(inputValue);
  }
}
