<script setup>
const showDiv = ref(false);
</script>

<template>
  <div class="main relative">
    <Navbar
        class="absolute -bottom-[5rem] -left-5 -right-5 z-50 hidden xl:block"
      />
    <div
      class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur z-10"
    ></div>
    <div
      class="bg-[#1E1E1F] z-30 relative pt-10 pb-5 px-5 rounded-3xl border border-[#505050] divide-y divide-[#505050]"
    >
      <div
        class="Top flex flex-row xl:flex-col items-center pb-6 sm:ml-7 xl:ml-0 z-20"
      >
        <!-- Images -->
        <img
          src="@/public/images/myimg.png"
          alt=""
          class="w-[6rem] md:w-[12rem] rounded-[20%] shadow-inner"
        />
        <div class="Title ml-3 md:ml-6 xl:ml-0">
          <h1
            class="text-[22px] sm:text-2xl md:text-4xl xl:text-3xl font-medium text-white my-2"
          >
            MD. MUHIR UDDIN
          </h1>

          <p
            class="p-[1px] rounded-md from-rose-400 via-fuchsia-500 to-indigo-500 bg-gradient-to-r"
          >
            <span
              class="block text-white text-center font-semibold bg-[#2B2B2C] rounded-md"
              >Front-end Developer</span
            >
          </p>
        </div>
      </div>
      <div
        class="bottom  py-2 xl:block"
        :class="showDiv ? 'block ' : 'hidden'"
      >
        <div class="Contact">
          <!-- Conatact  -->
          <Contact />
        </div>

        <div class="Socials flex justify-center pt-2">
          <Socials />
        </div>
      </div>

      <!-- Show/Hide Button -->
      <button
        @click="showDiv = !showDiv"
        class="icon-box px-2 border-l border-[#615e5e] rounded-3xl rounded-tl-none rounded-br-none flex shadow-sm shadow-[#070707] text-[#F5CA65] py-2 absolute top-[-1PX] right-0 hover:bg-gradient-to-br from-[#ffb30159] to-[#000000] outline-none duration-300 xl:hidden"
      >
        <span class="hidden md:block"> Show Contacts </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="w-7 md:hidden"
        >
          <path fill="#f5ca65" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
