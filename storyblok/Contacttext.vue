<template>

  <div id="contact"
       v-editable="blok"
       class="w-full p-20 max-w-full min-h-96 max-h-96 grid place-items-center text-right	"
  >
    <div class="space-y-4"> <!-- Container für vertikale Abstände -->

      <h1 class="text-4xl tracking-wider font-bold"
          v-html="headline"></h1>
      <div class="text-xl tracking-wider"
           v-html="contact"></div>



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
