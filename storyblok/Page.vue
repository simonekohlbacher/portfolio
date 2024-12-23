<template>


      <StoryblokComponent
          v-for="blok in blok.nav"
          :key="blok._uid"
          :blok="blok"
      />


      <StoryblokComponent
          v-for="blok in blok.body"
          :key="blok._uid"
          :blok="blok" />

      <StoryblokComponent
          v-for="blok in blok.footer"
          :key="blok._uid"
          :blok="blok"
      />



</template>

<script setup>

import { provide, ref, onMounted, onUnmounted } from 'vue';
import 'animate.css';

defineProps({ blok: Object });

const isDarkMode = ref(false);
const checkDarkMode = () => {
  const htmlElement = document.documentElement;
  isDarkMode.value = htmlElement.classList.contains('dark');
};

onMounted(() => {
  checkDarkMode();

  const observer = new MutationObserver(() => {
    checkDarkMode();
  });

  observer.observe(document.documentElement, { attributes: true });

  onUnmounted(() => {
    observer.disconnect();
  });
});

// Globally provide `isDarkMode`
provide('isDarkMode', isDarkMode);
</script>


<style>
html {
  scroll-behavior: smooth;
}
</style>