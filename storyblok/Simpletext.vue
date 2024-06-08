<template>
  <div
      v-editable="blok"
      class="py-12 teyt-left">

    <div class="text-l flex-grow mt-4" v-html="text"></div>

  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });

const text = computed(() =>
    renderRichText(props.blok.text)
);</script>
