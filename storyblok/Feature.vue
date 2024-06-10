<template>
  <div
    v-editable="blok"
    class="md:px-44 sm:px-12 py-20 h-68 text-center">

    <h2 class="text-2xl font-bold tracking-wider"
         v-html="heading"></h2>

    <br>

    <div class="text-base tracking-wider px-20"
         v-html="text"></div>

    <StoryblokComponent
        v-for="blok in blok.columns"
        :key="blok._uid"
        :blok="blok"/>
  </div>

</template>

<script setup>

const props = defineProps({ blok: Object });
const text = computed(() => renderRichText(props.blok.text));
const heading = computed(() => renderRichText(props.blok.heading));

</script>
