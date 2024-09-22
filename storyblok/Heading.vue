<template>

  <div v-editable="blok" class="py-20 grid text-left">

      <div class="typewriter">
        <h1 class="text-3xl font-bold tracking-wider mb-12">{{ displayedText }}</h1>
      </div>

    <div class="animate__animated animate__fadeInUp animate__delay-2s">
       <h2 class="text-xl tracking-wider" v-html="h2"></h2>
        <div class="text-l whitespace-nowrap overflow-hidden text-ellipsis" v-html="text" v-if="text"></div>
      </div>

  </div>

</template>

<script setup>
import 'animate.css';
import {ref, onMounted, computed} from 'vue';
import {renderRichText} from "@storyblok/vue";

// Storyblok-Props
const props = defineProps({blok: Object});
const h2 = computed(() => renderRichText(props.blok.H2));
const text = computed(() => renderRichText(props.blok.Text));

// Ref für den Typewriter-Text, der nach und nach angezeigt wird
const displayedText = ref("");

// Hilfsfunktion, um RichText in reinen Text zu konvertieren
function extractTextFromRichText(richText) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = renderRichText(richText);
  return tempDiv.textContent || tempDiv.innerText || "";
}

// Typewriter-Effekt
onMounted(() => {
  const fullText = extractTextFromRichText(props.blok.H1); // Reinen Text extrahieren
  let i = 0;

  function typeWriter() {
    if (i < fullText.length) {
      displayedText.value += fullText.charAt(i); // Zeichen für Zeichen hinzufügen
      i++;
      setTimeout(typeWriter, 100); // Tippgeschwindigkeit (100ms)
    }
  }

  displayedText.value = ''; // Sicherstellen, dass der Text bei Null startet
  typeWriter(); // Typewriter-Effekt starten
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