<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script lang="ts">
import '@babel/polyfill';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>
