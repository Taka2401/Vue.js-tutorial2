import Vue from 'vue'
import App from './App.vue'
import ToDoList from './components/ToDoList.vue'

Vue.config.productionTip = false
Vue.component('ToDoList', ToDoList);

new Vue({
  render: h => h(App),
}).$mount('#app')
