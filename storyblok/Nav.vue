<template>
  <div
      id="start"
      v-editable="blok"
      class="h-28 bg-[#f4eee1] dark:bg-[#111] flex items-center justify-between"
  >
    <!-- Logo -->
    <div>
      <a :href="'/home'">
        <img
            :src="isDarkMode ? blok.logoDark.filename : blok.logo.filename"
            :alt="blok.logo.alt"
            class="h-16 md:h-20 ml-6 object-contain"
        />
      </a>
    </div>

    <!-- Burger Menu Button for small screens -->
    <div class="md:hidden mr-6">
      <button @click="toggleMenu" class="text-gray-800 dark:text-white focus:outline-none">
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

    <!-- Back to Start Button -->
    <a
        v-if="blok.home && blok.home.story && blok.home.story.url"
        :href="blok.home.story.url"
        class="hidden md:inline-block mt-4 mr-6 button"
    >
      Back to start
    </a>
  </div>

  <!-- Mobile Menu -->
  <div
      :class="[
      'md:hidden bg-[#f4eee1] dark:bg-[#111] overflow-hidden transition-all duration-500',
      isMenuOpen ? 'max-h-screen' : 'max-h-0'
    ]"
  >
    <StoryblokComponent
        v-for="navItem in blok.navItems"
        :key="navItem._uid"
        :blok="navItem"
        class="block py-2 text-gray-800 dark:text-white"
    />
    <a
        v-if="blok.home && blok.home.story && blok.home.story.url"
        :href="blok.home.story.url"
        class="block text-left py-2 button"
    >
      Back to start
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { StoryblokComponent } from '@storyblok/vue';
import { inject } from 'vue';

const props = defineProps({ blok: Object });
const isMenuOpen = ref(false);

// Toggle function to open/close the menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const isDarkMode = inject('isDarkMode');

</script>

<style scoped>
/* Define max-height transitions */
.max-h-0 {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-out;
}

.max-h-screen {
  max-height: 100vh;
  overflow: hidden;
  transition: max-height 0.5s ease-in;
}

.dark #start {
  border-bottom: 0.8px solid #fff;
}
</style>
