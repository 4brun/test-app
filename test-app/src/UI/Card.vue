<template>
  <div class="content">
    <div class="content__item" v-for="item in items" :key="item.id">
      <div v-if="item.username">
        <h4>{{ item.username }}</h4>
        <p>{{ item.name }}</p>
      </div>
      <div v-else-if="item.name && item.body">
        <h4>{{ item.name }}</h4>
        <p><strong>Сообщение :</strong> {{ item.body }}</p>
      </div>
      <div v-else-if="item.title">
        <h4>{{ item.title }}</h4>
        <p><strong>Описание :</strong> {{ item.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      requred: true,
    },
  },
};
</script>

<style>
.content__item {
  border: 2px solid #42b983;
  margin: 10px;
}
</style>