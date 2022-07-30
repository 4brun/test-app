import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: () => ({
    users: [],
    posts: [],
    comments: []
  }),
  getters: {
    USERS: state => state.users,
    POSTS: state => state.posts,
    COMMENTS: state => state.comments
  },
  mutations: {
    SET_USERS_TO_STORE(state, users) {
      state.users = users
    },
    SET_POSTS_TO_STORE(state, posts) {
      state.posts = posts
    },
    SET_COMMENTS_TO_STORE(state, comments) {
      state.comments = comments
    }
  },
  actions: {
    async GET_USERS_FROM_API({ commit }) {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        commit("SET_USERS_TO_STORE", response.data)
      } catch (error) {
        console.log(error);
      }
    },
    async GET_POSTS_FROM_API({ commit }) {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        commit("SET_POSTS_TO_STORE", response.data)
      } catch (error) {
        console.log(error);
      }
    },
    async GET_COMMENTS_FROM_API({ commit }) {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/comments?_limit=10"
        );
        commit("SET_COMMENTS_TO_STORE", response.data)
      } catch (error) {
        console.log(error);
      }
    },
  },
})
