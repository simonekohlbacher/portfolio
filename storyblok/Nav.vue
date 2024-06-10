<template>
  <div
      id="start"
      v-editable="blok"
      class="h-28 bg-[#f4eee1] flex items-center justify-between"
  >
    <div>
      <a :href="'/home'">
        <img :src="blok.logo.filename" :alt="blok.logo.alt" class="h-16 md:h-20 ml-6 object-contain" />
      </a>
    </div>

    <!-- Burger Menu for small screens -->
    <div class="md:hidden mr-6">
      <button @click="toggleMenu" class="text-gray-800 focus:outline-none">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>

    <!-- Navigation Items for medium and large screens -->
    <div class="hidden md:flex md:items-center md:space-x-6">
      <StoryblokComponent
          v-for="navItem in blok.navItems"
          :key="navItem._uid"
          :blok="navItem"
          class="text-sm md:text-lg"
      />
    </div>

    <a
        v-if="blok.home && blok.home.story && blok.home.story.url"
        :href="blok.home.story.url"
        class="hidden md:inline-block mt-4 mr-6 button"
    >
      Back to start
    </a>
  </div>

  <!-- Mobile Menu -->
  <div v-if="isMenuOpen" class="md:hidden bg-[#f4eee1]">
    <StoryblokComponent
        v-for="navItem in blok.navItems"
        :key="navItem._uid"
        :blok="navItem"
        class="block text-center py-2"
    />
    <a
        v-if="blok.home && blok.home.story && blok.home.story.url"
        :href="blok.home.story.url"
        class="block text-center py-2"
    >
      Back to start
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { StoryblokComponent } from '@storyblok/vue';

const props = defineProps({ blok: Object });
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
