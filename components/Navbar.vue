<script setup>
  const route = useRoute();
</script>

<template>
  <nav class="main flex justify-center items-center w-full">
    <nav
      class="rounded-full bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 w-[95%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[35rem] p-0.5 shadow-lg shadow-black/30 backdrop-blur-md"
    >
      <div
        class="list px-2 sm:px-4 md:px-8 lg:px-10 xl:px-12 py-1.5 sm:py-2 md:py-2.5 flex justify-center items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 xl:space-x-10 rounded-full relative overflow-hidden bg-neutral-950/50 backdrop-blur-md border border-white/10 transition-all duration-300 hover:border-white/20 hover:bg-neutral-950/60"
      >
        <nuxt-link to="/" class="group">
          <p
            class="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-1.5 sm:gap-2 md:gap-2.5 hover:bg-white/10 hover:scale-105"
            :class="
              route.path === '/'
                ? 'bg-gradient-to-r from-neutral-800 to-neutral-900 text-white font-semibold shadow-inner shadow-black/20'
                : 'text-neutral-200 hover:text-white'
            "
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 576 512"
              class="text-sm sm:text-base scale-110 transition-transform duration-300 group-hover:scale-110"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
              ></path>
            </svg>
            <span class="hidden sm:inline">Home</span>
          </p>
        </nuxt-link>
        <nuxt-link to="/portfolio" class="group">
          <p
            class="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-1.5 sm:gap-2 md:gap-2.5 hover:bg-white/10 hover:scale-105"
            :class="
              route.path === '/portfolio'
                ? 'bg-gradient-to-r from-neutral-800 to-neutral-900 text-white font-semibold shadow-inner shadow-black/20'
                : 'text-neutral-200 hover:text-white'
            "
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              class="text-sm sm:text-base scale-110 transition-transform duration-300 group-hover:scale-110"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V5h16l.002 14H4z"
              ></path>
            </svg>
            <span class="hidden sm:inline">Portfolio</span>
          </p>
        </nuxt-link>
        <nuxt-link to="/resume" class="group">
          <p
            class="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-1.5 sm:gap-2 md:gap-2.5 hover:bg-white/10 hover:scale-105"
            :class="
              route.path === '/resume'
                ? 'bg-gradient-to-r from-neutral-800 to-neutral-900 text-white font-semibold shadow-inner shadow-black/20'
                : 'text-neutral-200 hover:text-white'
            "
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 384 512"
              class="text-sm sm:text-base scale-110 transition-transform duration-300 group-hover:scale-110"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"
              ></path>
            </svg>
            <span class="hidden sm:inline">Resume</span>
          </p>
        </nuxt-link>
        <nuxt-link to="/contact" class="group">
          <p
            class="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-1.5 sm:gap-2 md:gap-2.5 hover:bg-white/10 hover:scale-105"
            :class="
              route.path === '/contact'
                ? 'bg-gradient-to-r from-neutral-800 to-neutral-900 text-white font-semibold shadow-inner shadow-black/20'
                : 'text-neutral-200 hover:text-white'
            "
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              class="text-sm sm:text-base scale-110 transition-transform duration-300 group-hover:scale-110"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"
              ></path>
            </svg>
            <span class="hidden sm:inline">Contact</span>
          </p>
        </nuxt-link>
      </div>
    </nav>
  </nav>
</template>

<style scoped>
  .main {
    transform: translateZ(0);
    will-change: transform;
  }
</style>
