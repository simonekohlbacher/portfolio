<template>
  <div v-editable="blok" class="nav-container block text-left py-2">
    <a href="#start" class="nav-link">Start</a>
    <a href="#about" class="nav-link">About</a>
    <a href="#projects" class="nav-link">Projects</a>
    <a href="#contact" class="nav-link">Contact</a>
  </div>

  <!-- Dark Mode Toggler -->
  <label class="inline-flex items-center cursor-pointer">
    <input type="checkbox" v-model="isDarkMode" class="sr-only peer" @change="toggleDarkMode">
    <div class="relative mx-6 w-11 h-6 bg-black rounded-full outline dark:bg-white">
    <span class="absolute left-1 top-0.45 transition-transform duration-200"
          :class="{'translate-x-5': isDarkMode}">
      <i class="fas fa-sun text-[#f4eee1]" v-if="!isDarkMode"></i>
      <i class="fas fa-moon text-black" v-else></i>
    </span>
    </div>
  </label>



</template>

<script setup>
import {ref, watch} from "vue";
import '@fortawesome/fontawesome-free/css/all.css';

defineProps({ blok: Object });


// Zustand für den Dark Mode (initial auf false)
const isDarkMode = ref(false);

// Funktion zum Umschalten des Dark Mode
const toggleDarkMode = () => {
  // Hier ist der Code zur Anpassung des Dark Modes
  document.documentElement.classList.toggle('dark', isDarkMode.value);
};

// Automatisch den Body anpassen, wenn Dark Mode aktiviert wird
watch(isDarkMode, (newVal) => {
  document.documentElement.classList.toggle('dark', newVal);
});
</script>

<style scoped>
.nav-container {
  @apply uppercase font-bold p-2 mr-2 grid grid-cols-1 md:gap-4 md:flex md:justify-between sm:gap-0;
}
.nav-link {
  @apply px-4 py-2 rounded transition transform;
  @apply text-black dark:text-white;
}

.nav-link:hover {
  @apply text-white bg-black;
}
</style>
