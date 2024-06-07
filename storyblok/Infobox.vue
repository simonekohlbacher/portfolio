<template>
  <div id="about"
    v-editable="blok" class="bg-[#c6cdbc]"
  >
    <StoryblokComponent
      v-for="blok in blok.boxgrid"
      :key="blok._uid"
      :blok="blok"
    />

    <StoryblokComponent class=""
                        v-for="column in blok.feature"
                        :key="column._uid"
                        :blok="column"
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
