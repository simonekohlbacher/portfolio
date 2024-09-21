<template>
  <div v-editable="blok" class="">

    <!--<MainNavigationItem
        v-for="item in $globalSettings.navItems"
        :key="item._uuid"
        :nav-item="item"
    /> -->

    <div class="animate__animated animate__fadeIn">


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
</style>