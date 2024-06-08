<template>
  <div id="start"
      v-editable="blok" class="h-28 bg-[#f4eee1] flex items-center justify-between px-4">
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

    <a v-if="blok.home && blok.home.story && blok.home.story.url"
       :href="blok.home.story.url"
       class="inline-block mt-4 mr-6 button w-38">
      Back to start
    </a>

  </div>
</template>

<script setup>
import { computed } from 'vue';
import { renderRichText } from '@storyblok/vue';

const props = defineProps({ blok: Object });

const text = computed(() => renderRichText(props.blok.text));
</script>
