<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  heading: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "bg-red-500",
  },
});
</script>

<template>
  <div
    class="main min-w-[20rem] bg-[#151419] border border-[#666565] shadow-[#6b5f5f] shadow-lg rounded-2xl relative overflow-hidden"
  >
    <div class="content relative z-30">
      <!-- Heading -->
      <div class="heading py-3">
        <slot>
          <h1
            class="text-xl lg:text-2xl font-medium text-[#FFFFFF] px-2 py-1 tracking-wide"
          >

            {{ props.heading }}
          </h1>
        </slot>
      </div>
      <!-- skill list -->
      <div
        class="flex flex-wrap items-center justify-center border-[#666565] border-t py-1 relative overflow-hidden"
      >
        <div v-for="(skill, index) in props.items" :key="index" class="z-20">
          <a
            :href="skill.link"
            class="px-5 flex flex-col md:flex-row items-center justify-center btn10 py-2"
          >
            <img :src="skill.icon" alt="" class="w-8 sm:w-10 max-h-12" />
            
            <p
              class="px-1 m-1 rounded-full from-rose-400 via-fuchsia-500 to-indigo-500 bg-gradient-to-r"
            >
              <span
                class="block text-black px-3 font-medium rounded-full bg-white"
              >
                {{ skill.name }}</span
              >
            </p>
          </a>
        </div>
        <div
          class="absolute top-[0rem] bottom-0 left-0 right-0 w-full bg-[#46464656] filter blur- animate-pulse delay-700"
        ></div>
      </div>
    </div>

    <!-- Bg Gradient Color -->
    <div
      class="absolute -top-[10rem] -right-[10rem] w-[20rem] h-[20rem] rounded-full filter blur-3xl animate-pul se delay-700"
      :class="props.color"
    ></div>
  </div>
</template>

<style scoped></style>
