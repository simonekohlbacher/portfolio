<template>
  <div
      v-editable="blok" class="h-24 bg-[#f4eee1] flex items-center justify-between px-4 dark:bg-[#111]">

    <h1 class="text-m  font-bold md:ml-12 sm:ml-4 dark:text-white"
        v-html="copyright"></h1>

    <div class="md:text-m tracking-wider text-right md:mr-12 sm:mr-4 underline sm:text-sm dark:text-white"
         v-html="links"></div>
  </div>
</template>

<script setup>

const props = defineProps({ blok: Object });
const copyright = computed(() => renderRichText(props.blok.copyright));
const links = computed(() => renderRichText(props.blok.links));

</script>
