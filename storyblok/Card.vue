<template>
  <div
      v-editable="blok"
      class="w-full p-12 bg-[#f5f5dc] rounded-[5px] text-center min-h-96 "
  >
    <img :src="blok.img.filename" alt="TODO" class="cover div1 w-full max-h-[400px]"/>


    <h1 class="text-2xl text-[#1d243d] font-bold">
      {{ getText(blok.h1) }}
    </h1>
    <p>
      {{ getText(blok.text) }}
    </p>
    <a :href="blok.button.url" class="inline-block bg-[#1d243d] text-white px-4 py-2 rounded-[5px] mt-4">
      See More
      {{ getText(blok.button.text) }}
    </a>



  </div>
</template>

<script setup>
defineProps({ blok: Object });


function getText(block) {
  if (!block || !block.content || !block.content[0] || !block.content[0].content || !block.content[0].content[0]) {
    return '';
  }
  return block.content[0].content[0].text;
}


</script>
