export default class Storage {
  getSliderData() {
    let sliderData: any = window.localStorage.getItem('sliderData');
    return JSON.parse(sliderData);
  }

  getInputValue(inputName: any) {
    return window.localStorage.getItem(inputName);
  }

  setInputValue(inputName: any, inputValue: any) {
    window.localStorage.setItem(inputName, inputValue);
  }

  clearInputValue(inputValue: any) {
    window.localStorage.removeItem(inputValue);
  }
}
