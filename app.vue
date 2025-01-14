<template>
  <div>
    <Background />

    <div
      class="flex flex-col xl:flex-row items-center xl:items-stretch md:container mt-4 xl:mt-[5.5rem] mb-14 mx-auto md:px-4 space-y-8 xl:space-y-0 xl:space-x-8"
    >
      <!-- Navigation bar -->

      <!-- Hero on left or top side -->
      <div class="Hero xl:w-[25rem] m-1 z-30">
        <Hero class="sticky top-[5.8rem] left-0" />
      </div>

      <!-- Content on right or bottom -->
      <div class="mx-2 w-full">
        <div
          class="p-[1.5px] rounded-3xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 relative z-30 w-full h-full"
        >
          <!-- Nav content pages -->
          <NuxtPage class="h-full w-full z-40" />
          <!--  -->
          <!-- Navigation bar -->
          <Navbar class="fixed left-0 right-0 bottom-0 z-50 m-1 xl:hidden" />
          <Navbar
            class="fixed left-0 right-0 top-3 z-50 m-1 justify-center hidden xl:flex ml-[23rem]"
          />
          <div
            class="absolute -bottom-0 -right-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-700 z-10"
          ></div>
        </div>
      </div>
    </div>

    <!-- Snippets -->
    <div
      class="fixed top-0 left-0 w-[20rem] h-[20rem] bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse delay-700"
    ></div>
    <div
      class="fixed bottom-0 left-[25%] w-[12rem] h-[12rem] bg-indigo-500/20 rounded-full filter blur-3xl animate-pulse delay-700"
    ></div>

    <!-- bio -->
    <div
      class="hidden xl:block fixed top-[20%] left-[1rem] transform animate-float px-4 py-2 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-400 w-[10rem] text-center"
    >
      " Turning ideas into code 💻 "
    </div>
    <div
      class="hidden xl:block fixed top-[50%] right-[1rem] transform animate-float px-4 py-2 rounded-lg bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 text-orange-400 w-[10rem] text-center"
    >
      "Frontend magic & backend logic ⚔️🪚"
    </div>
    <div
      class="hidden xl:block fixed top-[75%] left-[1rem] transform animate-float px-4 py-2 rounded-lg bg-teal-500/10 backdrop-blur-sm border border-teal-500/20 text-teal-400 w-[10rem] text-center"
    >
      "Lifelong learner 🌱"
    </div>
  </div>
</template>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>
