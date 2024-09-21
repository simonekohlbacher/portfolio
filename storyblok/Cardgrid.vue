<template>
  <h1 class="text-4xl font-bold mt-12 mb-8 text-center" v-html="headline"></h1>

  <div id="projects" v-editable="blok">

    <transition-group name="fade" tag="div" class="grid md:grid-cols-3 gap-x-12 gap-y-12 md:mx-24 mb-16 sm:mx-4">
      <StoryblokComponent
          v-for="(item, index) in visibleCards"
          :key="item._uid"
          :blok="item"
          class="fade-item"
      />
    </transition-group>
  </div>

  <div class="text-center mb-16">
    <button
        v-if="visibleCards.length < props.blok.columns.length"
        @click="loadMore"
        class="mt-2 button w-40"
    >
      Show me more
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { renderRichText } from "@storyblok/vue";

const props = defineProps({ blok: Object });
const headline = computed(() => renderRichText(props.blok.headline));

// condition for displayed cards
const cardsToShow = ref(3);

// calculate current visible cards
const visibleCards = computed(() => props.blok.columns.slice(0, cardsToShow.value));

// load more cards (+3)
const loadMore = () => {
  if (cardsToShow.value < props.blok.columns.length) {
    cardsToShow.value += 3;
  }
};
</script>

<style scoped>
/* animation for adding cards */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease-in;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
