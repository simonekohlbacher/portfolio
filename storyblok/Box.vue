<template>
  <div
      v-editable="blok"
      class="container grid md:grid-cols-2 place-items-center max-w-full min-h-96 bg-[#c6cdbc]"

  >

    <div class="text-base tracking-wider"
         v-html="headline"></div>


  </div>
</template>

<script setup>

const props = defineProps({ blok: Object });

const headline = computed(() =>
    renderRichText(props.blok.headline)
);
</script>
