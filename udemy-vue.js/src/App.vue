<template>
  <div>
    <LikeHeader>
      <p>はじめまして</p>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <button @click="currentComponent = 'Home'">home</button>
    <button @click="currentComponent = 'About'">about</button>
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'

export default {
  data() {
    return {
      number :14,
      currentComponent: 'Home'
    };
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    }
  },
  components: {
    LikeHeader,
    Home,
    About
  }
};
</script>

