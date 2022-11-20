export default class Storage {
  getSliderData() {
    let sliderData = window.localStorage.getItem('sliderData');
    return JSON.parse(sliderData);
  }

  getInputValue(inputName) {
    return window.localStorage.getItem(inputName);
  }

  setInputValue(inputName, inputValue) {
    window.localStorage.setItem(inputName, inputValue);
  }

  clearInputValue(inputValue) {
    window.localStorage.removeItem(inputValue);
  }
}
