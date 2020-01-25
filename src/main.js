import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.options.root = 'https://vue-http-7e0ae.firebaseio.com/';

Vue.http.interceptors.push((r, n) => {
  console.log(r);
  n(nr => console.log(nr));
});

new Vue({
  el: '#app',
  render: h => h(App)
});
