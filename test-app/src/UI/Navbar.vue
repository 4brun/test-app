<template>
  <div class="navbar">
    <h4>test-app</h4>
    <div class="navbar__links">
      <router-link to="/">Users</router-link>
      <router-link to="/posts">Posts</router-link>
      <router-link to="/comments">Comments</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
.navbar {
  height: 60px;
  background-color: gainsboro;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
  color: #42b983;
}
.navbar__links {
  margin-left: auto;
}
.navbar__links a {
  margin-left: 20px;
  text-decoration: none;
  color: #42b983;
}
</style>