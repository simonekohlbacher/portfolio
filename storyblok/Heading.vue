<template>

  <div v-editable="blok" class="py-20 grid text-left md:col-start-1 md:col-end-2 dark:text-white">

      <div class="typewriter">
        <h1 class="text-3xl font-bold tracking-wider mb-12">{{ displayedText }}</h1>
      </div>

    <div class="animate__animated animate__fadeInUp animate__delay-2s">
       <h2 class="text-xl tracking-wider" v-html="h2"></h2>
        <div class="text-l whitespace-nowrap overflow-hidden text-ellipsis" v-html="text" v-if="text"></div>
      <div
          class="text-l whitespace-nowrap overflow-hidden text-ellipsis"
          v-html="text_dark"
          v-if="text_dark && isDarkMode">
      </div>
      <button
          @click="onButtonClick"
          v-if="isDarkMode"
          :class="[buttonClicked ? 'bg-gray-800 disbaled' : 'bg-white text-black']"
          class="mt-4 px-4 py-2 font-bold rounded shadow hover:bg-[#c6cdbc]">
        {{ buttonClicked ? 'tadaaa!' : 'Show NASA Picture of the day ->' }}
      </button>
    </div>

  </div>

</template>

<script setup>
import 'animate.css';
import { ref, inject, computed, onMounted } from 'vue';
import { renderRichText } from '@storyblok/vue';

// Zustand für Dark Mode und NASA-Button
const isDarkMode = inject('isDarkMode');
const setShowNasaImage = inject('setShowNasaImage');

// Status: Wurde der Button bereits geklickt?
const buttonClicked = ref(false);

// Storyblok-Props
const props = defineProps({ blok: Object });
const h2 = computed(() => renderRichText(props.blok.H2));
const text = computed(() => renderRichText(props.blok.Text));
const text_dark = computed(() => renderRichText(props.blok.text_dark));

// Typewriter-Text
const displayedText = ref('');
function extractTextFromRichText(richText) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = renderRichText(richText);
  return tempDiv.textContent || tempDiv.innerText || '';
}

// Button-Klick-Handler
const onButtonClick = () => {
  setShowNasaImage(true); // NASA-Bild aktivieren
  buttonClicked.value = true; // Button als geklickt markieren
};

// Typewriter-Effekt
onMounted(() => {
  const fullText = extractTextFromRichText(props.blok.H1);
  let i = 0;

  function typeWriter() {
    if (i < fullText.length) {
      displayedText.value += fullText.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();
});
</script>



<style scoped>

.typewriter h1 {
  display: inline-block;
  border-right: 2px solid; /* Caret */
  white-space: nowrap;     /* Verhindert Zeilenumbrüche */
  overflow: hidden;        /* Verhindert Textüberlauf */
  height: 50px;

}

@keyframes blink-caret {
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: black;
  }
}

.typewriter h1 {
  animation: blink-caret 0.75s step-end infinite; /* Blinken des Cursors */
}

</style>