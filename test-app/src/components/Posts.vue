<template>
  <div class="content">
    <div class="content__item" v-for="post in posts" :key="post.id">
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

</style>
