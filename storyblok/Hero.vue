<template>
  <div
      v-editable="blok"
      :class="{ dark: isDarkMode }"
      class="grid grid-cols-1 md:grid-cols-2 place-items-center h-3/4 bg-[#fff] dark:bg-[#111]">
    <StoryblokComponent
        v-for="column in blok.heading"
        :key="column._uid"
        :blok="column" />

    <img
        :src="isDarkMode ? nasaImage : blok.img.filename"
        :alt="blok.img.alt"
        class="md:h-[70vh] sm:h-auto justify-self-end md:col-start-2 md:col-end-3"/>
  </div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue';
// :src="isDarkMode ? nasaImage : blok.img.filename"


defineProps({ blok: Object });

const nasaImage = ref('');
const isDarkMode = inject('isDarkMode');

// API-Daten abrufen
const fetchNasaImage = async () => {
  try {
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=BAvLWzoAn9CVHGLWx6YwEPWilvm9SBz6Is8q9h4e');
    const data = await response.json();
    nasaImage.value = data.hdurl || data.url;
  } catch (error) {
    console.error('Fehler beim Abrufen des NASA-Bilds:', error);
  }
};


// Dark Mode und API aufrufen, wenn Komponente geladen ist
onMounted(() => {
  fetchNasaImage();
});
</script>
