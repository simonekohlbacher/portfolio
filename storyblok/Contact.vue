<template>
  <div
      v-editable="blok"
      class="grid md:grid-cols-2 place-items-center h-[80vh] md:h-[60vh] lg:h-[70vh] bg-[#c6cdbc] dark:bg-[#111]">

    <img :src="blok.img.filename" :alt="blok.img.alt" class="max-h-[400px]"/>

    <StoryblokComponent v-for="column in blok.contact"
                        :key="column._uid"
                        :blok="column"/>

  </div>


</template>

<script setup>
defineProps({ blok: Object })
</script>
