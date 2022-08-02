import { createApp } from 'vue';

import App from './App.vue';
import {createStore} from "vuex";

const store = createStore({
   state() {
      return {
         counter: 10
      }
   },
   mutations: {
      increment(state) {
         state.counter = state.counter + 1;
      },
      increase(state, payload) {
         state.counter = state.counter + payload.value;
      }
   },
   getters: {
      finalCounter(state) {
         return 'final counter: ' + state.counter;
      },
      normalizedCounter(state) {
         const finalCounter = state.counter;
         if (finalCounter > 100) {
            return 100;
         } else if (finalCounter < 0) {
            return 0;
         }
         return finalCounter;
      },
   },
   actions: {
      increment(context) {
         setTimeout(() => {
            context.commit('increment')
         }, 1000);
      }
   }
});

const app = createApp(App);
app.use(store);

app.mount('#app');
