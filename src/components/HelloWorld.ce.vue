<template>
  <h1>Hello World</h1>
  <img :src="url" />
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';

// interface Props {
//   src: string;
// }

// const props = defineProps<Props>();

const url = computed(
  () =>
    `https://images.pexels.com/photos/11039600/pexels-photo-11039600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
);

onMounted(() => {
  console.log('url', url.value);
});
</script>
