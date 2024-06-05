<template>
  <div
      v-editable="blok"
      class="w-full p-12 bg-[#f5f5dc] text-center max-w-full min-h-96 max-h-96 grid place-items-center"
  >
    <div class="space-y-4"> <!-- Container für vertikale Abstände -->
    <h1 class="text-4xl text-[#1d243d] font-bold tracking-wider">
      {{ getText(blok.H1) }}
    </h1>
    <br>
    <h2 class="text-3xl text-[#1d243d] font-bold tracking-wider">
      {{ getText(blok.H2) }}
    </h2>
    <br>
    <p>
      {{ getText(blok.Text) }}
    </p>
  </div>
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
