<template>
  <card :items="this.posts" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Card from "@/UI/Card.vue";
export default {
  name: "Posts",
  components: { Card },
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
