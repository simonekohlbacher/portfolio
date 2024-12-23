<template>
  <div id="contact"
       v-editable="blok"
       class="grid place-items-center"
  >

    <div class="lg:text-right md:text-right sm:text-left dark:text-white">

      <h1 class="md:text-4xl sm:text-s tracking-wider font-bold"
          v-html="headline"></h1>

      <div class="tracking-wider md:text-lg sm:text-xs"
           v-html="contact"></div>

      <StoryblokComponent
          v-for="blok in blok.links"
          :key="blok._uid"
          :blok="blok"/>

    </div>
  </div>
</template>

<script setup>

const props = defineProps({ blok: Object });

const headline = computed(() => renderRichText(props.blok.headline));
const contact = computed(() => renderRichText(props.blok.contact));

</script>
