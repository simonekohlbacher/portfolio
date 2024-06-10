<template>
  <div
    v-editable="blok"
    class="container min-h-96 grid md:grid-cols-3 place-items-center mx-auto"
  >
    <StoryblokComponent
      v-for="blok in blok.box"
      :key="blok._uid"
      :blok="blok"/>
  </div>

</template>

<script setup>
defineProps({ blok: Object })
</script>
