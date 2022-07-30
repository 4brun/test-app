<template>
  <div class="content">
    <div v-for="post in posts" :key="post.id">
      <h4>Название</h4>
      {{ post.title }}
      <p><strong>Описание</strong> {{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Posts",
  methods: {
    ...mapActions({
      fetchPosts: "GET_POSTS_FROM_API",
    }),
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapGetters({
      posts: "POSTS",
    }),
  },
};
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
