<template>
  <div v-editable="blok" class="nav-container">
    <a href="#start" class="nav-link text-center">Start</a>
    <a href="#about" class="nav-link text-center">About</a>
    <a href="#projects" class="nav-link text-center">Projects</a>
    <a href="#contact" class="nav-link text-center">Contact</a>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style scoped>
.nav-container {
  @apply uppercase font-bold p-2 mr-2 grid grid-cols-2 md:gap-4 sm:grid-cols-1 md:flex md:justify-between sm:gap-0;
}
.nav-link {
  @apply px-4 py-2 rounded transition transform;
}
.nav-link:hover {
  @apply text-white bg-black;
}
</style>
