export default class Section {
  constructor({items, renderer}, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  clear() {
    this._container.innerHTML = '';
  };

  _renderItem() {
    this.clear();

    this._items.array.forEach(item => { // array ??? 
      this._renderer(item);
    });
  };

  addItem(element) {
    this._container.append(element);
  };

} 
