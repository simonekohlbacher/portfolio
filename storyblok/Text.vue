<template>
  <div id="text" v-editable="blok" class="ml-6 sm:ml-52">
    <h2 class="text-2xl font-bold mb-4" v-html="blok.heading"></h2>
    <div class="tracking-wider md:text-lg sm:text-xs text-left mb-24" v-html="text"></div>
  </div>
</template>

<script setup>

const props = defineProps({ blok: Object });

const text = computed(() => renderRichText(props.blok.text));
const heading = computed(() => renderRichText(props.blok.heading));

</script>
