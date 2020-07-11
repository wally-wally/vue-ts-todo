<template>
  <div>
    <h1>TODO LIST</h1>
    <ol class="breadcrumb">
      <li><router-link to="/">All</router-link></li>
      <li><router-link to="/active">Active</router-link></li>
      <li><router-link to="/clear">Clear</router-link></li>
    </ol>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>

<style scoped>
h1 {
  font-weight: 600;
  text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.1);
  animation: flicker 1s linear alternate infinite;
}

@keyframes flicker {
  0% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}
</style>