
<template>
  <div id="sociallink"
       v-editable="blok"
       class="">

    <a :href="blok.link.url">
      <img :src="blok.icon.filename" class="socialicon dark:invert dark:brightness-0 dark:contrast-200"/>
    </a>

  </div>
</template>

<script setup>
defineProps({ blok: Object });

</script>

<style scoped>


.socialicon {
  width: 2rem;

}
.socialicon:hover {

  opacity: 0.2;

}

</style>