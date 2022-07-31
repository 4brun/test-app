<template>
  <div class="content">
    <div class="content__item" v-for="user in users" :key="user.id">
      <h4>{{ user.username }}</h4>
      <p>{{ user.name }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Users",
  methods: {
    ...mapActions({
      getUsers: "GET_USERS_FROM_API",
    }),
  },
  mounted() {
    this.getUsers();
  },
  computed: {
    ...mapGetters({
      users: "USERS",
    }),
  },
};
</script>


<style scoped>
</style>
