<template>
  <div id="projects"
       v-editable="blok"
       class="w-full grid md:grid-cols-3 gap-4 px-4 m-28"
  >
    <StoryblokComponent
        v-for="blok in blok.columns"
        :key="blok._uid"
        :blok="blok"
        class="flex flex-col justify-between p-4"
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
