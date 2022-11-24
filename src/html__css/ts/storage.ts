import { IStorage } from './models/storage.model';
import { LocalStorage } from './decorators/localStorage.decorator';

export default class Storage implements IStorage {
  @LocalStorage
  localData: string = '';

  public getInputValue<T>(localData: string): T {
    return JSON.parse(localStorage.getItem(localData) as string) as T;
  }

  public setInputValue<T>(inputName: string, localData: T): void {
    localStorage.setItem(inputName, JSON.stringify(localData));
  }

  public clearInputValue(inputValue: string) {
    localStorage.removeItem(inputValue);
  }
}
