export interface IStorage {
  getInputValue: (inputName: string) => void;
  setInputValue: (inputName: string, inputValue: string) => void;
  clearInputValue: (inputValue: string) => void;
}
