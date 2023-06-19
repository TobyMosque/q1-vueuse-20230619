<template>
  <q-page class="flex flex-center">
    <counter-store></counter-store>
    <counter-vueuse></counter-vueuse>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCounterStore } from 'src/stores/counter'
import CounterStore from 'src/components/CounterStore.vue';
import CounterVueuse from 'src/components/CounterVueuse.vue';

export default defineComponent({
  name: 'PageIndex',
  components: { CounterStore, CounterVueuse },
  setup() {
    const { count, doubleCount, increment } = useCounterStore();
    return { count, doubleCount, increment };
  }
});

</script>
