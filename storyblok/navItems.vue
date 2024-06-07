<template>
  <div
    v-editable="blok"
    class=""
  >

    <div class="nav p-4 flex justify-center gap-4 rounded-lg uppercase font-bold">
      <a href="#start" class="nav-link">Start</a>
      <a href="#projects" class="nav-link">Projects</a>
      <a href="#about" class="nav-link">About</a>
      <a href="#contact" class="nav-link">Contact</a>

    </div>
  </div>

</template>

<script setup>

const props = defineProps({ blok: Object });

const text = computed(() =>
    renderRichText(props.blok.text)
);

</script>
