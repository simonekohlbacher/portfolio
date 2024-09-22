<template>

  
  <div v-editable="blok" class="grid grid-cols-1 md:grid-cols-2 place-items-center h-3/4 bg-[#ffffff]">
    <StoryblokComponent
        v-for="column in blok.heading"
        :key="column._uid"
        :blok="column"
        class="md:col-start-1 md:col-end-2"/>

    <img
        :src="blok.img.filename"
        :alt="blok.img.alt"
        class="md:h-[70vh] sm:h-auto justify-self-end md:col-start-2 md:col-end-3"/>

  </div>

</template>


<script setup>

defineProps({ blok: Object });

</script>
