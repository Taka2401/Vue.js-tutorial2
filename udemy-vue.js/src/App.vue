<template>
  <div style="padding: 10rem;">
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
      <EventTitle
        :value="eventData.title"
        @input="eventData.title = $event"
      ></EventTitle>
      <label for="maxNumber"></label>
      <input
        id="maxNumber"
        type="number"
        v-model.number="eventData.maxNumber"
      />
      <p>{{ eventData.maxNumber }}</p>
      <label for="host">主催者</label>
      <input id="host" type="text" v-model.trim="eventData.host" />
      <pre>{{ eventData.host }}</pre>
      <label for="detail">イベントの内容</label>
      <textarea
        id="detail"
        cols="30"
        rows="10"
        v-model="eventData.detail"
      ></textarea>
      <pre>{{ eventData.detail }}</pre>
      <input id="isPrivate" type="checkbox" v-model="eventData.isPrivate" />
      <label for="isPrivate">非公開</label>
      <p>{{ eventData.isPrivate }}</p>
      <input
        type="checkbox"
        id="10代"
        value="10代"
        v-model="eventData.target"
      />
      <label for="10代">10代</label>
      <input
        type="checkbox"
        id="20代"
        value="20代"
        v-model="eventData.target"
      />
      <label for="20代">20代</label>
      <input
        type="checkbox"
        id="30代"
        value="30代"
        v-model="eventData.target"
      />
      <label for="30代">30代</label>
      <p>{{ eventData.target }}</p>
      <input type="radio" id="free" value="無料" v-model="eventData.price" />
      <label for="free">無料</label>
      <input type="radio" id="paid" value="有料" v-model="eventData.price" />
      <label for="paid">有料</label>
      <p>開催場所</p>
      <select v-model="eventData.location" multiple>
        <option v-for="location in locations" :key="location">{{
          location
        }}</option>
      </select>
      <p>{{ eventData.location }}</p>
    </div>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import EventTitle from "./components/EventTitle.vue";

export default {
  data() {
    return {
      number: 14,
      currentComponent: "Home",
      locations: ["東京", "大阪", "名古屋"],
      eventData: {
        title: "",
        maxNumber: 0,
        host: "",
        detail: "",
        isPrivate: false,
        target: [],
        price: "無料",
        location: [],
      },
    };
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    },
  },
  components: {
    LikeHeader,
    Home,
    About,
    EventTitle,
  },
};
</script>
