<template>
  <div
      v-editable="blok"
    class="container grid md:grid-cols-2 place-items-center max-w-full min-h-96 max">

    <img :src="blok.img.filename" alt="TODO" class="cover div1 w-full max-h-[400px]"/>

    <StoryblokComponent class="max-w-full"
        v-for="column in blok.heading"
        :key="column._uid"
        :blok="column"
    />

  </div>
</template>

<script setup>

defineProps({ blok: Object });

</script>
