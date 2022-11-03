export default class Storage {
  getSliderData() {
    let sliderData = window.localStorage.getItem('sliderData');
    return JSON.parse(sliderData);
  }
  getSurname() {
    return window.localStorage.getItem('inputName');
  }

  getPhoneNumber() {
    return window.localStorage.getItem('phone-number');
  }

  getEmail() {
    return window.localStorage.getItem('email');
  }

  setSurname(inputValue) {
    window.localStorage.setItem('inputName', inputValue);
  }

  setPhoneNumber(inputValue) {
    window.localStorage.setItem('phone-number', inputValue);
  }

  setEmail(inputValue) {
    window.localStorage.setItem('email', inputValue);
  }

  clearSurname() {
    window.localStorage.removeItem('inputName');
  }

  clearPhoneNumber() {
    window.localStorage.removeItem('phone-number');
  }

  clearEmail() {
    window.localStorage.removeItem('email');
  }
}
