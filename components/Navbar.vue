<script setup>
const route = useRoute();
</script>

<template>
  <div class="main flex justify-center">
    <div
      class="rounded-full bg-gradient-to-br from-cyan-500 via-[#ffffff] to-[#ff0202] animate-gradient-x p-[2px]"
    >
      <div
        class="list px-2 md:px-12 py-1 md:py-3 bg-[#242425cc] backdrop-blur-mds flex justify-center items-center space-x-4 rounded-full text-sm font-semibold md:text-md"
      >
        <nuxt-link to="/">
          <p
            class="hover:text-[#f56565] duration-200 cursor-pointer"
            :class="
              route.path === '/'
                ? 'text-[#350023]  bg-white/50 px-2 pt-0.5  rounded-full  shadow-inner shadow-black scale-110   '
                : 'text-white'
            "
          >
            About
          </p></nuxt-link
        >
        <nuxt-link to="/resume">
          <p
            class="hover:text-[#f56565] duration-200 cursor-pointer"
            :class="
              route.path === '/resume'
                ? 'text-[#350023]  bg-white/50 px-2 pt-0.5  rounded-full  shadow-inner shadow-black scale-110 p   '
                : 'text-white'
            "
          >
            Resume
          </p></nuxt-link
        >
        <nuxt-link to="/portfolio">
          <p
            class="hover:text-[#f56565] duration-200 cursor-pointer"
            :class="
              route.path === '/portfolio'
                ? 'text-[#350023]  bg-white/50 px-2 pt-0.5  rounded-full  shadow-inner shadow-black scale-110 p'
                : 'text-white'
            "
          >
            Portfolio
          </p></nuxt-link
        >
        <!-- <nuxt-link to="/contact">
          <p
            class="hover:text-[#f56565] duration-200 cursor-pointer"
            :class="
              route.path === '/contact'
                ? 'text-[#350023]  bg-white/50 px-2 pt-0.5  rounded-full  shadow-inner shadow-black scale-110 p'
                : 'text-white '
            "
          >
            Contact
          </p></nuxt-link
        > -->
      </div>
    </div>
  </div>
</template>

<style scoped></style>
