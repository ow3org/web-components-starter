<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Props {
  title: string;
}

const props = defineProps<Props>();

// reactive state
const count = ref(0);

// functions that mutate state and trigger updates
function increment() {
  count.value++;
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`);
});
</script>

<template>
  <h1 class="text-3xl font-bold underline">{{ props.title }}</h1>
  <button @click="increment">Count is: {{ count }}</button>
</template>
