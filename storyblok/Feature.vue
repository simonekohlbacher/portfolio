<template>
  <div v-editable="blok" class="md:px-44 sm:px-12 py-20 h-68 text-center dark:bg-[#111]">

    <div ref="headingSection" class="heading">
      <h2 class="text-2xl font-bold tracking-wider dark:text-white" v-html="heading"></h2> <br>
    </div>

    <div ref="textSection" class="text">
      <div class="text-base tracking-wider px-20 dark:text-white" v-html="text"></div>
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
  const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === headingSection.value) {
              entry.target.classList.add('animate');
              observer.unobserve(entry.target); // Stoppt das Beobachten nach der Animation
            } else if (entry.target === textSection.value) {
              entry.target.classList.add('animate');
              observer.unobserve(entry.target); // Stoppt das Beobachten nach der Animation
            }
          }
        });
      },
      { rootMargin: '0px 0px -100px 0px' } // Trigger ein wenig früher, bevor das Element den Viewport verlässt
  );

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
  transition: opacity 1s ease 1.2s;
}

.text p span {
  color: red !important;
}

.text.animate {
  opacity: 1;
}

.dark .text-white {
  color: white !important;
}




</style>
