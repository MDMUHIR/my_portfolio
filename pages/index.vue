<script setup>

</script>

<template>
  <div
    class="main bg-[#1E1E1F] pt-10 pb-5 px-3 sm:px-10 xl:px-16 rounded-3xl border border-[#505050] relative mx-auto flex flex-col justify-center items-center w-full"
  >
    <StylingTab heading="About Me" class="absolute top-0 left-0 right-0" />

    <!-- cover letter -->
    <div class="cover-latter">
      <p
        class="text-lg xl:text-lg 2xl:text-xl font-mo no mt-5 mb-6 text-stone-300 sm:text-justify first-letter:text-3xl xl:first-letter:text-5xl first-letter:text-red-400"
      >
        With expertise in web development and hands-on experience using a
        variety of powerful tools, I embarked on my journey in 2021 to craft a
        meaningful career in this dynamic field. My passion for technology
        drives me to continually enhance my skills, and I'm always eager to
        embrace new challenges, explore emerging frameworks, and stay at the
        cutting edge of web development. As an enthusiastic learner and
        developer, I'm open to exciting opportunities that allow me to innovate
        and grow in this ever-evolving landscape!
      </p>
    </div>
    <!-- What Im Doing-->
    <div class="pt-6 mx-auto">
      <h1 class="text-2xl xl:text-3xl mb-3 font-bold text-[#F9F9F9]">
        What I'm Doing
      </h1>

      <div class="grid xl:grid-cols-2 xl:space-x-5">
        <div
          class="flex items-center my-1 shadow-sm shadow-[#0f0f0f] border-l border-t border-[#4d4c4c] rounded-2xl p-5"
        >
          <div class="icon-box px-2 mx-1 flex duration-200 w-11 h-11">
            <img
              src="https://api.iconify.design/streamline:programming-browser-code-1-code-browser-line-shell-programming-command-terminal.svg?color=%23c43636"
              alt=""
              class="icon w-7 md:w-8 mx-auto shadow-neutral-50 fill-current text-[#FDC663]"
            />
          </div>

          <div class="text text-[#e4e3e3] text-left px-2">
            <h2 class="text-xl font-semibold text-stone-400">
              Web Development
            </h2>
            <p class="select-none">
              High-quality development of sites at the professional level.
            </p>
          </div>
        </div>
        <!-- Mobile apps -->
        <div
          class="flex items-center my-1 shadow-sm shadow-[#0f0f0f] border-l border-t border-[#4d4c4c] rounded-2xl p-5"
        >
          <div class="icon-box mx-2 flex duration-200 w-12 h-12">
            <img
              src="https://api.iconify.design/hugeicons:mobile-programming-01.svg?color=%23c43636"
              alt=""
              class="icon mx-auto shadow-neutral-50 fill-current text-[#FDC663]"
            />
          </div>

          <div class="text text-[#e4e3e3] text-left px-2">
            <h2 class="text-xl font-semibold text-stone-400">Mobile Apps</h2>
            <p class="select-none">
              Professional development of cross-platform applications for iOS
              and Android.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- <animationGlowingBG /> -->
    <div
      class="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-700 z-10"
    ></div>

    <!-- Elfsight WhatsApp widget -->
    <!-- <div
      class="elfsight-app-3dcbab37-1c22-401c-9075-16371c7a8d75"
      data-elfsight-app-lazy
    ></div> -->
  </div>
</template>

<style scoped></style>
