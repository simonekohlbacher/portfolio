<template>
  <div
      id="start"
      v-editable="blok"
      :class="{ dark: isDarkMode }"
      class="grid grid-cols-1 md:grid-cols-2 place-items-center h-3/4 bg-[#fff] dark:bg-[#111]">
    <!-- Heading-Komponente -->
    <StoryblokComponent
        v-for="column in blok.heading"
        :key="column._uid"
        :blok="column"
    />

    <!-- Bild -->
    <img
        :src="showNasaImage ? nasaImage : blok.img.filename"
        :alt="blok.img.alt"
        class="md:h-[70vh] sm:h-auto justify-self-end md:col-start-2 md:col-end-3"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, provide, inject } from 'vue';

defineProps({ blok: Object });

const nasaImage = ref('');
const isDarkMode = inject('isDarkMode');
const showNasaImage = ref(false); // Zustand für NASA-Bild

// NASA-Bild abrufen
const fetchNasaImage = async () => {
  try {
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=BAvLWzoAn9CVHGLWx6YwEPWilvm9SBz6Is8q9h4e');
    const data = await response.json();
    nasaImage.value = data.hdurl || data.url;
  } catch (error) {
    console.error('Fehler beim Abrufen des NASA-Bilds:', error);
  }
};

// Zustand mit anderen Komponenten teilen
provide('setShowNasaImage', (value) => {
  showNasaImage.value = value;
});

// NASA-Bild vorab laden
onMounted(() => {
  fetchNasaImage();
});
</script>



<style scoped>

.dark #start {
  border-bottom: 0.8px solid #fff;
}

</style>
