<script setup>
const props = defineProps({
  heading: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div
    class="main flex items-center bg-[#2e2e2e] rounded-t-3xl border-[#9729ffb2] border-b py-1"
  >
    <!-- Tab Buttons -->
    <div class="tab-button px-5 py-3 ">
      <div class="left flex space-x-2">
        <div class="pill w-3 h-3 bg-red-500 rounded-full"></div>
        <div class="pill w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div class="pill w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
    </div>
    <!-- Tab heading -->
    <h1 class="ml-5 px-3 text-center text-lg text-stone-400   shadow-inner shadow-[#000] absolute top-0 left-[5rem] right-7 bottom-0 rounded m-1   leading-9">{{ props.heading }}.js</h1>
  </div>
</template>

<style scoped></style>
