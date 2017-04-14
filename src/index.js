export default function (Vue) {
  const vm = new Vue();
  ['on', 'once', 'off', 'emit'].forEach(n => vm[`${n}`] = vm[`$${n}`]);
  Vue.prototype.$hub = vm;
};
