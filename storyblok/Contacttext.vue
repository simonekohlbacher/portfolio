<template>

  <div id="contact"
       v-editable="blok"
       class="p-20 min-h-96 max-h-96 grid place-items-center text-right	"
  >
    <div class="space-y-4"> <!-- Container für vertikale Abstände -->

      <h1 class="text-4xl tracking-wider font-bold"
          v-html="headline"></h1>
      <div class="text-xl tracking-wider"
           v-html="contact"></div>

      <div class="container grid md:grid-cols-3 gap-6">

        <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer" class="inline-block py-2 rounded-[5px] mt-4 button buttonSec">
          Mail
        </a>

        <a :href="blok.insta.url" target="_blank" rel="noopener noreferrer" class="inline-block py-2 rounded-[5px] mt-4 button buttonSec">
          Insta
        </a>

        <a :href="blok.linkedin.url" target="_blank" rel="noopener noreferrer" class="inline-block py-2 rounded-[5px] mt-4 button buttonSec">
          LinkedIn
        </a>

      </div>

    </div>
    </div>
</template>

<script setup>

const props = defineProps({ blok: Object });

const headline = computed(() =>
    renderRichText(props.blok.headline)
);

const contact = computed(() =>
    renderRichText(props.blok.contact)
);




</script>
