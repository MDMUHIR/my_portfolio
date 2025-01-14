<script setup>
const route = useRoute();
</script>

<template>
  <nav class="main flex justify-center items-center">
    <nav
      class="rounded-full bg-gradient-to-br from-neutral-500 to-[#642828] xl:w-[35rem] p-0.5"
    >
      <div
        class="list px-2 md:px-12 py-1 md:py-2 backdrop-blur-mds flex justify-center items-center space-x-4 xl:space-x-10 bg-sla te-800 rounded-full relative overflow-hidden bg-gray-900/90 backdrop-blur-md"
      >
        <nuxt-link to="/">
          <p
            class="px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:bg-white/10"
            :class="
              route.path === '/'
                ? 'bg-white/50 text-white  font-semibold'
                : 'text-stone-100'
            "
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 576 512"
              class="text-base scale-110"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
              ></path></svg
            ><span class="hidden md:inline">Home</span>
          </p></nuxt-link
        >
        <nuxt-link to="/resume">
          <p
            class="px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:bg-white/10"
            :class="
              route.path === '/resume'
                ? 'bg-white/50 text-white  font-semibold'
                : 'text-gray-100'
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="text-base scale-110"
              height="1em"
              width="1em"
              viewBox="0 0 256 256"
              stroke="currentColor"
              fill="currentColor"
            >
              <path
                d="m210.78 39.25l-130.25-23A16 16 0 0 0 62 29.23l-29.75 169a16 16 0 0 0 13 18.53l130.25 23a16 16 0 0 0 18.54-13l29.75-169a16 16 0 0 0-13.01-18.51m-75.28 92.31a8 8 0 0 1-7.87 6.61a8.3 8.3 0 0 1-1.4-.12l-41.5-7.33A8 8 0 0 1 87.52 115l41.48 7.29a8 8 0 0 1 6.5 9.27m47-24.18a8 8 0 0 1-7.86 6.61a7.6 7.6 0 0 1-1.41-.13l-83-14.65a8 8 0 0 1 2.79-15.76l83 14.66a8 8 0 0 1 6.51 9.27Zm5.55-31.52a8 8 0 0 1-7.87 6.61a8.4 8.4 0 0 1-1.4-.12l-83-14.66a8 8 0 1 1 2.78-15.75l83 14.65a8 8 0 0 1 6.52 9.27Z"
              />
            </svg>

            <span class="hidden md:inline">Resume</span>
          </p></nuxt-link
        >
        <nuxt-link to="/portfolio">
          <p
            class="px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:bg-white/10"
            :class="
              route.path === '/portfolio'
                ? 'bg-white/50 text-white  font-semibold'
                : 'text-gray-100'
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="text-base scale-110"
              height="1em"
              width="1em"
              viewBox="0 0 20 20"
              stroke="currentColor"
              fill="currentColor"
            >
              <path
                d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9zm3-8V2H8v1z"
              />
            </svg>

            <span class="hidden md:inline">Portfolio</span>
          </p></nuxt-link
        >
        <!-- <nuxt-link to="/contact">
          <p
            class=""
            :class="
              route.path === '/contact'
                ? 'text-[#350023]  bg-white/50 px-2 pt-0.5  rounded-full  shadow-inner shadow-black scale-110 border p'
                : 'text-gray-100 '
            "
          >
            Contact
          </p></nuxt-link
        > -->
      </div>
    </nav>
  </nav>
</template>

<style scoped></style>
