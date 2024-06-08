<template>
  <div
      v-editable="blok"
    class="grid grid-cols-2 place-items-center h-4/5 bg-[#ffffff]">


    <StoryblokComponent class="max-w-full"
        v-for="column in blok.heading"
        :key="column._uid"
        :blok="column"
    />

    <img :src="blok.img.filename" :alt="blok.img.alt" class="h-[70vh] justify-self-end"/>


  </div>
</template>

<script setup>

defineProps({ blok: Object });

</script>
