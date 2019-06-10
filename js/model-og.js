function Model () {
   //////////// implement below
   this._attributes = {};
   this._callbacks = {
    change: []
   };
};
 Model.prototype.on = function (event, fn) {
   //////////// implement below
   var cbList = this._callbacks[event];
   if (cbList) {
     this._callbacks[event].push(fn);
   } else {
     this._callbacks[event] = [fn];
   }
 };
 Model.prototype.off = function (event, fn=null) {
   //////////// implement below
   this._callbacks[event] = fn ? this._callbacks[event].filter(fun => fun !== fn) : [];
 };
 Model.prototype.trigger = function (event) {
   //////////// implement below
   (this._callbacks[event] || []).forEach(cb => cb());
 };
 Model.prototype.set = function (prop, value) {
   //////////// implement below
   this._attributes[prop] = value;
   this._callbacks.change.forEach(cb => cb());
   (this._callbacks[`change:${prop}`] || []).forEach(cb => cb());

 };
 Model.prototype.get = function (prop) {
   //////////// implement below
   return this._attributes[prop];
 };

 Model.prototype.stateOpinion = function (opinion) {
   return function () {
     console.log(`My name is ${this.get('name')} and I think ${opinion}`)
   };
 };

 var model = new Model();

 model.get('name'); // undefined
 model.set('name', 'sam');
 model.get('name'); // sam

function eventHandler1() {
  console.log('hey something changed');
}
function eventHandler2() {
  console.log('whoa another change callback');
}
model.on('change', eventHandler1);
model.on('change', eventHandler1);
model.on('change', eventHandler2);

 model.set('age', 27);
 // => 'hey something changed'
 // => 'hey something changed'
 // => 'whoa another change callback'

 model.off('change', eventHandler1);
 model.set('age', 28);
 // => 'whoa another change callback'

 model.off('change');
 model.set('age', 29);
 // => nothing

 model.on('change', model.stateOpinion('mayo is gross').bind(model))
 model.trigger('change');
 // => My name is sam and I think mayo is gross





 function nameChangedCallback() {
   console.log(`hey name changed to ${this.get('name')}`);
 }

 model.on('change:name', nameChangedCallback.bind(model));

 // model.on('change:name', () => {
 //   console.log('anonymous change:name callback');
 // });
 //

 //
 model.set('name', 'Richard');
 // // => 'hey something changed'
 // // => 'hey name changed to Richard'
 // // => 'anonymous change:name callback'
 //
 // model.off('change:name', nameChangedCallback);
 // model.set('name', 'John');
 // // => 'hey something changed'
 // // => 'anonymous change:name callback'
 //
 // model.trigger('change');
 // // => 'hey something changed'
 //
 // model.off('change');
 // model.set('name', 'Carl');
 // // => nothing
