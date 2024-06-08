<template>
  <div
      v-editable="blok"
      class="grid md:grid-cols-2 place-items-center h-4/6 bg-[#c6cdbc]">

    <img :src="blok.img.filename" :alt="blok.img.alt" class="max-h-[300px]"/>

    <StoryblokComponent class="max-w-full"
                        v-for="column in blok.contact"
                        :key="column._uid"
                        :blok="column"
    />



  </div>
</template>

<script setup>

defineProps({ blok: Object });

</script>
