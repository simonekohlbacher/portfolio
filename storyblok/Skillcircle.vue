<template>
  <div class="relative w-64 h-64 flex flex-col items-center justify-center mb-12">
    <!-- Hintergrundkreis -->
    <svg class="absolute" viewBox="0 0 36 36">
      <path
          class="text-white"
          d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="currentColor"
          stroke-width="2"/>
    </svg>

    <!-- Fortschrittskreis -->
    <svg class="absolute w-full h-full " viewBox="0 0 36 36">
      <path
          :style="{ stroke: '#000000' }"
          class="text-beige-500"
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

    <!-- Bild mit Hover-Effekt -->
    <img
        :src="blok.icon.filename"
        :alt="blok.icon.alt"
        class="w-16 h-16 object-cover z-10 hover:translate-y-[-5px] transition-transform duration-300"
        @mouseover="isHovered = true"
        @mouseleave="isHovered = false"
    >

    <!-- Beschreibung des skills -->
    <div class="text-center z-10">
      <div class="text-l font-bold" v-html="text"></div>
      <div class="border-1 px-12 text-l text-center" v-if="isHovered" v-html="description"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });
const text = computed(() => renderRichText(props.blok.text));
const description = computed(() => renderRichText(props.blok.description));
const isHovered = ref(false);
</script>

<style scoped>
.hover:hover {
  transform: translateY(-5px);
}
</style>
