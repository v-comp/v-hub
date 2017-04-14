import VHubComponent from './v-hub.vue';

VHubComponent.install = Vue => {
  Vue.component(VHubComponent.name, VHubComponent);
};

export default VHubComponent;
