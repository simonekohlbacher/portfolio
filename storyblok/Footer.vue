<template>
  <div
      v-editable="blok" class="h-24 bg-[#f4eee1] flex items-center justify-between px-4">


    <h1 class="text-m mtracking-wider font-bold ml-12"
        v-html="copyright"></h1>

    <div class="text-m tracking-wider text-right mr-12 underline"
         v-html="links"></div>



  </div>
</template>

<script setup>

const props = defineProps({ blok: Object });

const copyright = computed(() =>
    renderRichText(props.blok.copyright)
);

const links = computed(() =>
    renderRichText(props.blok.links)
);

</script>
