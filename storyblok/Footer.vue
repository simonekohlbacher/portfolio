<template>
  <div
      v-editable="blok" class="w-full h-24 bg-[#f4eee1] flex items-center justify-between px-4">


    <h1 class="text-m mtracking-wider font-bold"
        v-html="copyright"></h1>
    <div class="text-xl tracking-wider"
         v-html="contact"></div>




  </div>
</template>

<script setup>

const props = defineProps({ blok: Object });

const copyright = computed(() =>
    renderRichText(props.blok.copyright)
);

const contact = computed(() =>
    renderRichText(props.blok.contact)
);

</script>
