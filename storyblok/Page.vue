<template>
  <div v-editable="blok" class="">

    <!--<MainNavigationItem
        v-for="item in $globalSettings.navItems"
        :key="item._uuid"
        :nav-item="item"
    /> -->

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
const { $globalSettings } = useNuxtApp();
defineProps({ blok: Object });
</script>


<style>
html {
  scroll-behavior: smooth;
}
</style>