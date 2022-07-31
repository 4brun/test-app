<template>
  <card :items="this.users" />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Card from "@/UI/Card.vue";
export default {
  name: "Users",
  components: { Card },
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
