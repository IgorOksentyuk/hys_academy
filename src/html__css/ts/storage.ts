import { IStorage } from './models/storage.model';
import { LocalStorage } from './decorators/localStorage.decorator';

export default class Storage implements IStorage {
  @LocalStorage
  localData: string = '';

  public getInputValue<T>(inputName: string): T {
    return JSON.parse(this.localData);
  }

  public setInputValue<T>(inputName: string, inputValue: T): void {
    localStorage.setItem(inputName, JSON.stringify(inputValue));
  }

  public clearInputValue(inputValue: string) {
    localStorage.removeItem(inputValue);
  }
}
