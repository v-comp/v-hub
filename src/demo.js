import VHubComponent from './index';
window.Vue.use(VHubComponent);

// logic of your demo here...
let vm = new Vue({
  el: '#app',
  template: '<v-hub :text="text"></v-hub>',
  data() {
    return {
      text: 'Hello World'
    };
  },
});
