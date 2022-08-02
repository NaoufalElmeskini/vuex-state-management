<template>
  <base-container title="Vuex">
    <h3>{{this.counter}}</h3>
    <h3>normalized: {{this.normalizedCounter}}</h3>
    <button @click="addOne">add 1</button>
    <button @click="addTen">add 10</button>
    <button @click="addOneDelayed">add 10 (delayed)</button>
  </base-container>

</template>

<script>
import BaseContainer from './components/BaseContainer.vue';

export default {
  components: {
    BaseContainer,
  },
  computed: {
    counter() {
      return this.$store.getters.finalCounter;
    },
    normalizedCounter() {
      return this.$store.getters.normalizedCounter;
    },

  },
  methods: {
    addOne() {
      this.$store.commit('increment');
    },
    addTen() {
      this.$store.commit('increase', {value: 10});
    },
    addOneDelayed() {
      this.$store.dispatch('increment');
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;

}

button {
  margin-right: 10px;
}
</style>
