(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.VHub = factory());
}(this, (function () { 'use strict';

var index = function (Vue) {
  var vm = new Vue();
  ['on', 'once', 'off', 'emit'].forEach(function (n) { return vm[("" + n)] = vm[("$" + n)]; });
  Vue.prototype.$hub = vm;
};

return index;

})));
//# sourceMappingURL=build.js.map
