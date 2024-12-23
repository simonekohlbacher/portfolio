<template>
  <div
      class="relative w-64 h-64 flex flex-col items-center justify-center mb-12"
      @mouseover="handleMouseOver"
      @mouseleave="handleMouseLeave"
      @click="handleClick"
  >
    <!-- Hintergrundkreis -->
    <svg class="absolute w-full h-full" viewBox="0 0 36 36">
      <path
          class="text-white dark:text-[#111]"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
      />
    </svg>

    <!-- Fortschrittskreis -->
    <svg class="absolute w-full h-full" viewBox="0 0 36 36">
      <path
          :style="{ stroke: isDarkMode ? '#fff' : '#000' }"
          class="text-beige-500"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-dasharray="100, 100"
          :stroke-dashoffset="100 - blok.progress"
      />
    </svg>

    <!-- Container für Bild und Text -->
    <div class="relative flex flex-col items-center justify-center">
      <!-- Bild mit Hover- und Klick-Effekt -->
      <img
          :src="blok.icon.filename"
          :alt="blok.icon.alt"
          class="w-16 h-16 object-cover transition-opacity duration-300 dark:invert dark:brightness-0 dark:contrast-200"
          :class="{ 'opacity-0': isHovered || isClicked }"
      />

      <!-- Beschreibung des Skills -->
      <div class="absolute inset-0 flex items-center justify-center dark:text-white">
        <!-- Überschrift anzeigen, wenn nicht gehovert oder geklickt -->
        <div v-if="!isHovered && !isClicked" class="text-l font-bold text-center">
          <div v-html="text" class="mt-24"></div>
        </div>
        <!-- Beschreibung anzeigen, wenn gehovert oder geklickt -->
        <div v-if="isHovered || isClicked" class="border-1 px-4 py-2 text-l text-center">
          <div v-html="description"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, computed, inject} from 'vue';
import { renderRichText } from '@storyblok/vue';

const isDarkMode = inject('isDarkMode');
const props = defineProps({ blok: Object });
const text = computed(() => renderRichText(props.blok.text));
const description = computed(() => renderRichText(props.blok.description));
const isHovered = ref(false);
const isClicked = ref(false);

const handleMouseOver = () => {
  isHovered.value = true;
};

const handleMouseLeave = () => {
  isHovered.value = false;
};

const handleClick = () => {
  isClicked.value = !isClicked.value;
};
</script>

<style scoped>

img {
  z-index: 10;
}

img.opacity-0 {
  opacity: 0;
}
</style>
