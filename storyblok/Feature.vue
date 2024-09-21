<template>
  <div v-editable="blok" class="md:px-44 sm:px-12 py-20 h-68 text-center">
    <div ref="headingSection" class="heading">
      <h2 class="text-2xl font-bold tracking-wider" v-html="heading"></h2> <br>
    </div>

    <div ref="textSection" class="text">
      <div class="text-base tracking-wider px-20" v-html="text"></div>
    </div>
  </div>

  <StoryblokComponent
      v-for="blok in blok.columns"
      :key="blok._uid"
      :blok="blok"/>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { renderRichText } from "@storyblok/vue";

const props = defineProps({ blok: Object });
const text = computed(() => renderRichText(props.blok.text));
const heading = computed(() => renderRichText(props.blok.heading));

const headingSection = ref(null);
const textSection = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target === headingSection.value) {
          entry.target.classList.add('animate');
        } else if (entry.target === textSection.value) {
          entry.target.classList.add('animate');
        }
      }
    });
  });

  observer.observe(headingSection.value);
  observer.observe(textSection.value);
});
</script>

<style scoped>
.heading {
  opacity: 0;
  transform: translateX(-200px);
  transition: opacity 1s ease, transform 1s ease-in;
}

.heading.animate {
  opacity: 1;
  transform: translateX(0);
}


.text {
  opacity: 0;
  transform: translateX(400px);
  transition: opacity 1s ease, transform 1s ease-in 0.8s;
}

.text.animate {
  opacity: 1;
  transform: translateX(0);
}
</style>
