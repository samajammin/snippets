class Model {
  constructor() {
    this._attrs = {};
    this._eventHandlers = {
      change: []
    };
  }

  get(attr) {
    return this._attrs[attr];
  }

  set(attr, value) {
    this._attrs[attr] = value;
    this._eventHandlers.change.forEach(handler => handler(...arguments));
  }

  on(event, callback) {
    if (this._eventHandlers[event]) {
      this._eventHandlers[event].push(callback);
    } else {
      this._eventHandlers[event] = [callback];
    }
  }

  off(event, callback) {
    if (!this._eventHandlers[event]) {
      throw new Error(`No handlers for event: ${event}`);
    }
    this._eventHandlers[event] = this._eventHandlers[event].filter(
      handler => handler !== callback
    );
  }

  trigger(event, ...args) {
    if (!this._eventHandlers[event]) {
      throw new Error(`No handlers for event: ${event}`);
    }
    this._eventHandlers[event].forEach(handler => handler(...args));
  }
}

var model = new Model();

model.get('name');
// undefined

model.set('name', 'Bob');
model.get('name');
// Bob

function changeCallback1(prop, val) {
  console.log(`${prop} changed to ${val}`);
}

function changeCallback2() {
  console.log(`changeCallback2`);
}

model.on('change', changeCallback1);
model.on('change', changeCallback2);

model.set('name', 'Alice');
// name changed to Alice
// changeCallback2

model.on('myCustomEvent', function(...args) {
  console.log(`myCustomEvent triggered with args: ${args}`);
});

model.trigger('myCustomEvent', 'arg1', 'arg2');
// myCustomEvent triggered with args: arg1, arg2

model.off('change', changeCallback1);
// changeCallback2

model.off('change', changeCallback2);

model.set('name', 'Jim');
// nothing
