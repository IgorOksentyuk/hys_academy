import Select from '../select';
import Slider from '../slider';

export abstract class BaseApp {
  public slider?: Slider;
  public select?: Select;
  abstract init(): void;

  getSliderData(albumId: number): void {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.slider?.setData(data.slice(0, 8));

        this.slider?.render();
        this.onButtonsClick();
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  }
  abstract onButtonsClick(): void;
}
