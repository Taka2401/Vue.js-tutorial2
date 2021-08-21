<template>
  <div>
    <LikeHeader>
      <p>はじめまして</p>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <button @click="currentComponent = 'Home'">home</button>
    <button @click="currentComponent = 'About'">about</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <div>
      <h2>イベントのフォーム</h2>
      <label for="title"></label>
      <input id="title" type="text" v-model.lazy="eventData.title">
      <p>{{ eventData.title }}</p>
      <label for="maxNumber"></label>
      <input id="maxNumber" type="number" v-model.number="eventData.maxNumber">
      <p>{{ typeof eventData.maxNumber }}</p>
    </div>
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
      currentComponent: 'Home',
      eventData: {
        title: 'タイトル',
        maxNumber: 0
      }
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

