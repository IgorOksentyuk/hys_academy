export interface ISelect {
  readonly el: HTMLDivElement | null;
  dropdownList: HTMLDivElement | null;
  dropdownBtn: HTMLButtonElement | null;

  init: (onSelectChange: (albumId: number) => void) => void;
  createMarkup: () => string;
  render: () => void;
}
