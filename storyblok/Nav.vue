<template>
  <div id="start"
      v-editable="blok" class="w-full h-24 bg-[#f4eee1] flex items-center justify-between px-4">
    <div class="flex items-center">

      <img :src="blok.logo.filename" :alt="blok.logo.alt" class="h-20 ml-6"/>

    </div>
    <div class="flex space-x-4">
      <StoryblokComponent
          v-for="navItem in blok.navItems"
          :key="navItem._uid"
          :blok="navItem"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { renderRichText } from '@storyblok/vue';

const props = defineProps({ blok: Object });

const text = computed(() => renderRichText(props.blok.text));
</script>
