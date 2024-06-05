<template>
  <div
      v-editable="blok"
      class="container grid md:grid-cols-2 place-items-center max-w-full min-h-96"

  >

    <StoryblokComponent class="max-w-full"
                        v-for="column in blok.heading"
                        :key="column._uid"
                        :blok="column"
    />

    <img v-if="blok.img" :src="getImageUrl(blok.img)" class="max-w-full min-h-96"/>


  </div>
</template>

<script setup>

defineProps({ blok: Object });

function getImageUrl(image) {
  return image.filename ? `https://a.storyblok.com/f/98699/1200x800/${image.filename}` : '';
}
</script>
