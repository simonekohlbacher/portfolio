<template>

  <div
      v-editable="blok"
      class="p-20 grid place-items-center text-left"
  >
    <div class="space-y-4">
      <h1 class="text-4xl font-bold tracking-wider mb-12"
          v-html="h1"></h1>
      <h2 class="text-2xl tracking-wider"
          v-html="h2"></h2>
      <div class="text-xl tracking-wider"
           v-html="text" v-if="text">
      </div>


    </div>
  </div>
</template>

<script setup>

const props = defineProps({ blok: Object });
const h1 = computed(() => renderRichText(props.blok.H1));
const h2 = computed(() => renderRichText(props.blok.H2));
const text = computed(() => renderRichText(props.blok.Text));


</script>
