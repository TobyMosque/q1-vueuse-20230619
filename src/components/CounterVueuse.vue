<template>
  <q-card>
    <q-card-section class="text-h6 text-center">
      Counter Store (vueuse)
    </q-card-section>
    <q-separator></q-separator>
    <q-card-section>
      <q-input type="number" label="Count" v-model.number="count"  />
      <q-btn @click="increment" label="Increment">Increment</q-btn>
      double: {{ doubleCount }}
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { useCounterStore } from '../composables/counter';

const counterStore = useCounterStore();
const { count, doubleCount, increment } = counterStore;
</script>
