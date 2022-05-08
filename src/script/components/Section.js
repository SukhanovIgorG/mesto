export class Section {
  constructor({items, renderer}, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  clear() {
    this._container.innerHTML = '';
  };

  _renderItem() {
    this.clear();

    this._items.forEach(item => { // array ??? 
      this._renderer(item);
    });
  };

  addItem(element) {
    this._container.append(element);
  };

  addItemBefore(element) {
    this._container.prepend(element);
  };

} 
