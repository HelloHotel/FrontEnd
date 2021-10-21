import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import Vuex from 'vuex';
Vue.use(Vuex);
//import VueSocketio from 'vue-socket.io';
//import chatModule from '../src/Modules/chat';
Vue.config.productionTip = false;



/*const store = new Vuex.Store({
  state:{
    io:{}
  },
  mutations:{
    setSocket: (state,socket)=>{
      state.io = socket;
      console.log("socket conectado");
    }
  },
  modules:{
    chatModule
  }
});*/

//Vue.use(VueSocketio, 'http://localhost:5000',store);

new Vue({
  vuetify,
  router,

  render: h => h(App)
}).$mount('#app')
