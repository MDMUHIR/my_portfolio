<script setup></script>

<template>
  <div class="main Hero text-white">
    <div
      class="hero flex items-center justify-normal flex-col md:flex-row bg-black/75 shadow-inner shadow-[#424242] rounded-b-3xl m-2 mt-0"
    >
      <div
        class="left-part w-2/3 mt-10 md:mt-0 md:pt-0 flex flex-col items-center"
      >
        <h1 class="text-2xl lg:text-4xl 2xl:text-6xl font-sans text-center">
          Hi! I’m
        </h1>
        <!-- typeWriter -->
        <div class="container">
          <div class="Hero-text">
            <h1
              class="typewriter text-3xl sm:text-4xl md:text-5xl xl:text-7xl 2xl:text-9xl font-medium text-right font-sans"
            >
              <span
                class="bg-clip-text text-transparent bg-[url('@/public/images/bg.png')] bg-contain object-contain in vert grayscale-[50%] drop-shadow "
              >
                MD. MUHIR UDDIN
              </span>
            </h1>
          </div>
        </div>
        <h1
          class="text-lg sm:text-2xl lg:text-3xl font-mono font-bold mb-6 mt-2 text-center italic"
        >
          A Front-end Developer
        </h1>
        <!-- CV & GITHUB BUTTONS -->
        <div class="buttons flex justify-center z-20">
          <a
            href="https://github.com/MDMUHIR/CV.pdf/archive/refs/heads/main.zip"
            class="custom-btn btn-12 border-[#D5A45A] mr-2"
          >
            <span>Download</span><span>CV </span></a
          >
          <a href="https://github.com/MDMUHIR" class="custom-btn btn-12 ml-2">
            <span>Visit</span><span>GitHub </span></a
          >
        </div>
      </div>

      <!-- image -->
      <div class="image-part md:w-1/3 relative mr-1 pt-3">
        <img
          class="w-1/2 mx-auto md:w-full max-w-[10rem] lg:max-w-[20rem] 2xl:max-w-[25rem] grayscale-0 hover:grayscale transition-all duration-300 rounded-full drop-shadow shadow-white"
          src="@/public/images/myimg.png"
          alt=""
        />
        <h4
          class="text-[12px] font-bold italic mb-4 font-mono text-center md:mr-6"
        >
          I appreciate you taking the time to explore my profile
        </h4>
        <Contact class="absolute bottom-16 right-0 md:right-7 z-0" />
      </div>
    </div>

    <!-- cover letter -->
    <div class="cover-latter mt-2">
      <h1
        class="text-3xl 2xl:text-4xl mb-2 ml-2 md:ml-12 font-bold font-mono text-white"
      >
        About <span class="text-red-500">-_-</span>
      </h1>
      <p class="text-xl 2xl:text-3xl px-4 md:px-10 font-mono mb-6 md:ml-10 text-center">
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
  </div>
</template>

<style scoped>
/* :root {
  --primary-color: #c8dc71;
  --gradient-color: linear-gradient(180deg, #d2ff00 0%, #00d2ff 100%);
} */

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Custom */

.typewriter {
  overflow: hidden;
  white-space: nowrap;
  border-right: 5px solid;
  animation: type 1.5s steps(90) 1.5s 1 normal both, cursor 1s step-end infinite;
  position: relative;
}

@keyframes type {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

@keyframes cursor {
  0% {
    border-color: rgb(210, 61, 61);
  }
  50% {
    border-color: transparent;
  }
}
</style>
