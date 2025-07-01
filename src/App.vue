<script setup lang="ts">
import ToggleTheme from './ToggleTheme/index.vue';

const onChange = (val: 'dark' | 'light') => {
  console.log(val);
};
</script>

<template>
  <div class="wrapper">
    <ToggleTheme @change="onChange"></ToggleTheme>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 120px;
  margin: 0 auto;
}
</style>
