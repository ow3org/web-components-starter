<script setup lang="ts">
interface Props {
  title: string;
}

const props = defineProps<Props>();

// reactive state
let count = $ref(0);

// functions that mutate state and trigger updates
function increment() {
  count++;
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count}.`);
  console.log(`title is`, props.title);
});
</script>

<template>
  <h1 class="text-3xl font-bold text-red-800">
    {{ props.title }}
  </h1>
  <button @click="increment">Count is: {{ count }}</button>
</template>

<style scoped>
@import '../styles/index.css';
</style>
