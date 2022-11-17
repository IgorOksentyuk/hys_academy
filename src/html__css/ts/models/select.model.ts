export interface ISelect {
  init: (onSelectChange: (albumId: number) => void) => void;
  createMarkup: () => string;
  render: () => void;
}
