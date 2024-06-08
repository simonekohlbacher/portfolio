<template>
  <div id="about"
    v-editable="blok" class="bg-[#c6cdbc]">

    <StoryblokComponent class=""
                        v-for="column in blok.feature"
                        :key="column._uid"
                        :blok="column"
    />

    <StoryblokComponent
      v-for="blok in blok.grid"
      :key="blok._uid"
      :blok="blok"
    />


  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
