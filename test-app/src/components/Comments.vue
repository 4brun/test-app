<template>
  <div class="content">
    <div class="content__item" v-for="comment in comments" :key="comment.id">
      <h4>Имя</h4>
      {{ comment.name }}
      <p><strong>Сообщение</strong> {{ comment.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Comments",
  methods: {
    ...mapActions({
      fetchComments: GET_COMMENTS_FROM_API,
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
