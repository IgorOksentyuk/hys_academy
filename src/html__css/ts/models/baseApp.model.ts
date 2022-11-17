import Select from '../select';
import Slider from '../slider';

export abstract class BaseApp {
  #slider?: Slider;
  #select?: Select;
  abstract init(): void;
  abstract getSliderData(albumId: number): void;
  abstract onButtonsClick(): void;
}
