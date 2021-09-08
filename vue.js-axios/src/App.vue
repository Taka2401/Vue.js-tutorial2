<template>
  <div id="app">
    <h2>掲示板に投稿する</h2>
    <label for="name">ニックネーム</label>
    <input id="name" type="text" v-model="name">
    <br><br>
    <label for="comment">コメント</label>
    <textarea id="comment" v-model="comment"></textarea>
    <br><br>
    <button @click="createComment">送信する</button>
    <h2>掲示板</h2>
    <br>
    <div v-for="post in posts" :key="post.name">
      <div>名前：{{ post.fields.name.stringValue }}</div>
      <div>コメント：{{ post.fields.comment.stringValue }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      comment: '',
      posts: []
    }
  },
  // axios get(取得したいサーバーのURL、リクエストの設定)
  created() {
    axios.get(
      'https://firestore.googleapis.com/v1/projects/vue-axios-e9ec9/databases/(default)/documents/comments'
    )
    .then(response=> {
      this.posts = response.data.documents;
      console.log(response.data.documents);
    });
  },
  methods: {
    createComment() {
      // axios post(送り先のURL、送るデータ、追加オプション)
      axios.post(
        'https://firestore.googleapis.com/v1/projects/vue-axios-e9ec9/databases/(default)/documents/comments',
        { //firebaseの場合はfieldsをつける
          fields: {
            name: {
              stringValue: this.name
            },
            comment: {
              stringValue: this.comment
            }
          }
        }
      )
      .then(() => {
        axios.get('// url').then(response => {
          this.posts = response.data.documents;
        });
      })
      this.name = '';
      this.comment = '';
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
