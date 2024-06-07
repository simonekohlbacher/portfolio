<template>
  <div class="relative w-64 h-64 flex flex-col items-center justify-center">
    <!-- Hintergrundkreis -->
    <svg class="absolute w-full h-full" viewBox="0 0 36 36">
      <path
          class="text-gray-200"
          d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
      />
    </svg>

    <!-- Fortschrittskreis -->
    <svg class="absolute w-full h-full animate-progress" viewBox="0 0 36 36">
      <path
          :style="{ stroke: '#000000' }"
          class="text-beige-500 animate-stroke"
          d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-dasharray="100, 100"
          :stroke-dashoffset="100 - blok.progress"
      />
    </svg>

    <!-- Bild in der Mitte des Kreises -->
    <img :src="blok.icon.filename" :alt="blok.icon.alt" class="w-16 h-16 rounded-full object-cover z-10">

    <br>
    <!-- Text in der Mitte des Kreises -->
    <div class="text-center z-10">
      <div class="text-l" v-html="text"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });

const text = computed(() => renderRichText(props.blok.text));
</script>

<style scoped>
/* CSS-Animation für den Fortschrittskreis */
@keyframes progress {
  from { stroke-dashoffset: 100; }
  to { stroke-dashoffset: calc(100 - 90); }
}

/* CSS-Animation für die Farbe */
@keyframes stroke {
  from { stroke: transparent; }
  to { stroke: #000000; }
}

/* Animation-Klasse für den Fortschrittskreis */
.animate-progress {
  animation: progress 5s ease-in-out forwards;
}

/* Animation-Klasse für die Farbe */
.animate-stroke {
  animation: stroke 5s ease-in-out forwards;
}
</style>
