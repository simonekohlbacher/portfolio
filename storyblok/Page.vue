<template>

  <div v-editable="blok" :class="{ dark: isDarkMode }">

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

    </div>

</template>

<script setup>

//import Mainnav from "./Mainnav.vue";
import { useNuxtApp } from '#app';
import 'animate.css';

const { $globalSettings } = useNuxtApp();

defineProps({ blok: Object });


</script>


<style>
html {
  scroll-behavior: smooth;
}

html.dark p {
  color: red ;
}
</style>