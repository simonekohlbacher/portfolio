<template>


  <h1 class="text-4xl font-bold mt-12 mb-8 text-center" v-html="headline"></h1>


  <div id="projects"
       v-editable="blok"
       class="grid md:grid-cols-3 gap-x-12 gap-y-12 md:mx-24 mb-16 sm:mx-4">

    <StoryblokComponent
        v-for="blok in blok.columns"
        :key="blok._uid"
        :blok="blok"
    />
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });

const headline = computed(() => renderRichText(props.blok.headline));
</script>
