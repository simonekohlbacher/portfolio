<template>
  <div
      v-editable="blok"
      class="flex flex-col justify-between p-4 mx-8 mb-12 rounded-[5px] text-left min-h-96">

    <div class="image-container drop-shadow-2xl">
      <img :src="blok.img.filename" :alt="blok.img.alt"
           class="image-zoom w-full max-h-[400px] max-w-[400px] object-cover object-center "/>
    </div>
    <span>sdfsdf</span>
    <h1 class="text-xl font-bold mt-4" v-html="h1"></h1>

    <div class="text-l flex-grow mt-4" v-html="text"></div>

    <a v-if="blok.button?.story?.url" :href="blok.button.story.url"
       class="inline-block mt-2 button w-28">
      See More
    </a>

  </div>
</template>

<script setup>
const props = defineProps({blok: Object});
const h1 = computed(() => renderRichText(props.blok.h1));
const text = computed(() => renderRichText(props.blok.text));
</script>

<style scoped>
.image-container {
  position: relative;
  overflow: hidden;
}

.image-zoom {
  transition: transform 0.3s ease;
}

.image-container:hover .image-zoom {
  transform: scale(1.1);
}
</style>









