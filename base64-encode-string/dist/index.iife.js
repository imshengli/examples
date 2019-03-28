(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global['base64-encode-string'] = factory());
}(this, function () { 'use strict';

  var foo = 'hello world!';

  function index () {
    console.log(foo);
  }

  return index;

}));
