<script setup>
  const showDiv = ref(false);


</script>

<template>
  <div
    class="main flex items-center justify-center"
  >
    <div
      class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-60 blur-xl group-hover:opacity-75 transition-all duration-500 animate-gradient z-10"
    ></div>

    <div
      class="bg-[#1E1E1F] z-30 relative pt-10 pb-5 px-5 rounded-3xl border border-[#505050]/50 divide-y divide-[#505050]/50 backdrop-blur-sm group hover:border-[#505050] transition-colors duration-500"
    >
      <div
        class="Top flex flex-row xl:flex-col items-center justify-center pb-6 sm:ml-7 xl:ml-0 z-20"
      >
        <!-- Images -->
        <div class="relative overflow-hidden rounded-[20%] group/image">
          <img
            src="@/public/images/myimg.png"
            alt="Profile"
            
            class="w-[6rem] md:w-[12rem] transform transition-all duration-700 scale-100 group-hover/image:scale-110"
          
          />
          <div
            class="absolute inset-0 bg-gradient-to-tr from-rose-500/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"
          ></div>
        </div>
        <div class="Title ml-3 mr-1 md:ml-6 xl:ml-0 text-center">
          <h1
            class="text-[22px] sm:text-2xl md:text-4xl xl:text-3xl font-medium text-white my-2"
          >
            MD. MUHIR UDDIN
          </h1>

          <p
            class="p-[1px] md:m-1 rounded-md from-rose-400 via-fuchsia-500 to-indigo-500 bg-gradient-to-r"
          >
            <span
              class="block text-white text-center font-semibold bg-[#2B2B2C] rounded-md"
              >Front-end Developer</span
            >
          </p>
        </div>
      </div>
      <div class="bottom py-2 xl:block" :class="showDiv ? 'block ' : 'hidden'">
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

<style scoped>
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 8s linear infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
