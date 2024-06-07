<template>
  <div
      v-editable="blok"
      class="flex flex-col justify-between p-12 rounded-[5px] text-left min-h-96"
  >
    <img :src="blok.img.filename" :alt="blok.img.alt" class="w-full max-h-[400px] max-w-[400px] object-cover object-center drop-shadow-2xl"/>

    <h1 class="text-xl font-bold mt-4" v-html="h1"></h1>

    <div class="text-l flex-grow mt-4" v-html="text"></div>

    <a :href="blok.button && blok.button.story ? blok.button.story.url: '#'" class="inline-block mt-4 button w-28">
      See More
    </a>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });

const h1 = computed(() =>
    renderRichText(props.blok.h1)
);

const text = computed(() =>
    renderRichText(props.blok.text)
);
</script>
