<template>
  <card :items="this.comments" />
</template>

<script>
import Card from "@/UI/Card.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Comments",
  components: { Card },
  methods: {
    ...mapActions({
      fetchComments: "GET_COMMENTS_FROM_API",
    }),
  },
  mounted() {
    this.fetchComments();
  },
  computed: {
    ...mapGetters({
      comments: "COMMENTS",
    }),
  },
};
</script>


<style scoped>
</style>
