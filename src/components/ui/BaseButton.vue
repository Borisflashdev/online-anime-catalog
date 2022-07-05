<template>
    <button class=".button" v-if="isButton">
        <slot></slot>
    </button>
    <router-link v-else :to="to" class="router-style">
      <slot></slot>
    </router-link>
</template>

<script>
export default {
  props: ['isButton', 'to']
}
</script>

<style scoped>
button, .router-style {
  background-color: #0e0e0d;
  border: none;
  color: white;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-family: Courier;
}

.router-link-active {
  border: 2px #0e0e0d solid;
  color: #0e0e0d;
  background-color: white;
}

button:hover {
    border: 2px #0e0e0d solid;
    padding: 8px 13px;
    color: #0e0e0d;
    background-color: white;
}
</style>