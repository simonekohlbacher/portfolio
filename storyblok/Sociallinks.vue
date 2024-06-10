<template>
  <div id="sociallinks"
       v-editable="blok"
       class="flex space-x-4 md:justify-end mt-4 text-3xl">

    <StoryblokComponent
        v-for="blok in blok.links"
        :key="blok._uid"
        :blok="blok"/>

  </div>

</template>

<script setup>

defineProps({ blok: Object });


</script>
