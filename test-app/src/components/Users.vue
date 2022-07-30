<template>
  <div class="content">
    <div v-for="user in users" :key="user.id">
      <h4>Имя</h4>
      {{ user.name }}
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
