<script setup>
const educations = reactive([
  {
    title: "BBA in Management",
    time: "2023 - Continuing",
    description:
      "Currently pursuing a BBA in Management, focusing on core business principles, organizational behavior, strategic planning, and leadership. Gaining skills in effective management practices, decision-making, and business operations to prepare for leadership roles in various industries.",
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    time: "Passed in 2022",
    description:
      "Completed HSC with a focus on Business Studies, covering subjects such as accounting, Business Organization and Management, and Production Management & Marketing, laying a strong foundation for further education in business and management.",
  },
  {
    title: "Secondary School Certificate (SSC)",
    time: "Passed in 2020",
    description:
      "Completed HSC with a focus on business studies, covering subjects such as accounting, Finance And Banking, and Business  , laying a strong foundation for further education in business and management.",
  },
]);

const experiences = reactive([
  {
    title: "Front-end Web Developer",
    time: "2021 - Present",
    description:
      "I specialize in front end development and working with various JavaScript frameworks and libraries.",
  },
]);
</script>

<template>
  <div
    class="main bg-[#1E1E1F] pt-10 pb-5 px-2 sm:px-12 xl:px-16 rounded-3xl border border-[#505050] relative"
  >
    <StylingTab heading="Resume" class="absolute top-0 left-0 right-0" />

    <!-- Download -->

    <div class="Downloads mt-14">
      <div class="buttons flex justify-center z-20 my-6">
        <a
          href="https://github.com/MDMUHIR/CV.pdf/archive/refs/heads/main.zip"
          class="custom-btn btn-12 mr-2"
        >
          <span>Download</span><span>CV.pdf </span></a
        >
        <a href="https://github.com/MDMUHIR" class="custom-btn btn-12 ml-2">
          <span>Visit</span><span>GitHub </span></a
        >
      </div>
    </div>

    <!-- Skills Section -->
    <!-- ---------------------- -->
    <div class="Skill">
      <div class="Heading flex items-center mb-3">
        <div
          class="heading icon-box mx-2 border-l border-t border-[#615e5e] rounded-full flex shadow-sm shadow-[#000] duration-200 w-11 h-11 z-30 justify-center items-center bg-neutral-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="#c43636"
              d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h4.794c.092-.482.323-.942.696-1.314l.186-.186H6.25a1.75 1.75 0 0 1-1.75-1.75V8.5h15v2.532q.258.03.512.085c.47.102.814.412.988.791V6.25A3.25 3.25 0 0 0 17.75 3zm9.744 8.933L14.28 10.22a.75.75 0 1 0-1.06 1.06l1.691 1.692a5.1 5.1 0 0 1 1.083-1.04m-5.214-.653a.75.75 0 1 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-2.47-2.47zm9.019.814c.353.077.44.507.185.762l-1.905 1.904a1.527 1.527 0 0 0 2.16 2.16l1.905-1.904c.255-.255.685-.168.762.185a4.075 4.075 0 0 1-5.57 4.622l-2.729 2.73a1.527 1.527 0 0 1-2.16-2.16l2.73-2.73a4.074 4.074 0 0 1 4.622-5.57"
            />
          </svg>
        </div>
        <h1
          class="text-xl md:text-2xl font-semibold text-[#F9F9F9] flex z-40 from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent"
        >
          Tools & Technologies
        </h1>
      </div>
      <Skills />
    </div>
    <!-- education -->
    <!-- _______________________________ -->
    <div class="relative mt-5">
      <!-- Heading -->
      <div class="Heading flex items-center">
        <div
          class="heading icon-box px-2 mx-2 border-l border-t border-[#615e5e] rounded-full flex shadow-sm shadow-[#000] duration-200 w-11 h-11 z-30 justify-center items-center bg-neutral-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            class="z-40"
          >
            <path
              fill="#c43636"
              d="M7.5 22q-1.45 0-2.475-1.025T4 18.5v-13q0-1.45 1.025-2.475T7.5 2H20v15q-.625 0-1.062.438T18.5 18.5t.438 1.063T20 20v2zm.5-7h2V4H8zm-.5 5h9.325q-.15-.35-.237-.712T16.5 18.5q0-.4.075-.775t.25-.725H7.5q-.65 0-1.075.438T6 18.5q0 .65.425 1.075T7.5 20"
            />
          </svg>
        </div>
        <h1
          class="text-xl md:text-2xl font-semibold text-[#F9F9F9] flex z-40 from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent"
        >
          Education
        </h1>
      </div>
      <!-- List -->
      <ul
        v-for="(edu, index) in educations"
        :key="index"
        class="timeline-list text-base text-cyan-500 ml-[61px] z-10"
      >
        <li class="timeline-item relative my-4">
          <h4 class="text-lg">
            <!-- Title content -->

            {{ edu.title }}
          </h4>
          <span class="text-yellow-500 font-normal leading-7">
            <!-- Span content -->
            {{ edu.time }}
          </span>
          <p
            class="timeline-text text-gray-300 font-light leading-7 text-justify"
          >
            <!-- Text content -->
            {{ edu.description }}
          </p>
        </li>

        <!-- Additional list items -->
      </ul>
      <div
        class="line w-[1px] bg-[#4e4e4e] absolute top-0 bottom-[8rem] left-7 h-[calc(100%-4rem)]"
      ></div>
    </div>

    <!-- Experience -->
    <div class="relative">
      <!-- Heading -->
      <div class="Heading flex items-center">
        <div
          class="heading icon-box px-2 mx-2 border-l border-t border-[#615e5e] rounded-full flex shadow-sm shadow-[#000] duration-200 w-11 h-11 z-30 justify-center items-center bg-neutral-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            class="z-30"
          >
            <path
              fill="#c43636"
              d="M10 7h4V5.615q0-.269-.173-.442T13.385 5h-2.77q-.269 0-.442.173T10 5.615zm8 15q-1.671 0-2.835-1.164Q14 19.67 14 18t1.165-2.835T18 14t2.836 1.165T22 18t-1.164 2.836T18 22M4.615 20q-.69 0-1.153-.462T3 18.384V8.616q0-.691.463-1.153T4.615 7H9V5.615q0-.69.463-1.153T10.616 4h2.769q.69 0 1.153.462T15 5.615V7h4.385q.69 0 1.152.463T21 8.616v3.15q0 .373-.301.559t-.649.044q-.496-.184-1.016-.277Q18.514 12 18 12q-2.496 0-4.248 1.752T12 18q0 .258.014.538t.082.537q.067.367-.147.646q-.215.279-.562.279zm13.77-2.161V15.5q0-.161-.112-.273T18 15.116t-.273.111t-.111.273v2.333q0 .161.055.3q.056.14.187.27l1.519 1.52q.112.112.264.121q.151.01.282-.121t.13-.273t-.13-.273z"
            />
          </svg>
        </div>
        <h1
          class="text-xl md:text-2xl font-semibold text-[#F9F9F9] flex z-40 from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent"
        >
          Experience
        </h1>
      </div>
      <!-- List -->
      <ul
        v-for="(experience, index) in experiences"
        :key="index"
        class="timeline-list text-base text-cyan-500 ml-[61px] z-10"
      >
        <li
          class="flex items-center shadow-sm shadow-[#0f0f0f] border-l border-t border-[#4d4c4c] rounded-2xl p-5 timeline-item relative my-2"
        >
          <div class="icon-box px-1 mx-1 flex duration-200 w-12 h-11">
            <img
              src="https://api.iconify.design/streamline:programming-browser-code-1-code-browser-line-shell-programming-command-terminal.svg?color=%23c43636"
              alt=""
              class="icon w-7 md:w-8 mx-auto shadow-neutral-50 fill-current text-[#FDC663]"
            />
          </div>

          <div class="text text-[#e4e3e3] text-left px-3 border-l">
            <h2 class="text-xl font-semibold text-stone-400">
              {{ experience.title }}
            </h2>
            <span class="text-yellow-500 font-normal leading-7">
              <!-- Span content -->
              {{ experience.time }}
            </span>
            <p class="select-none">
              {{ experience.description }}
            </p>
          </div>
        </li>

        <!-- Additional list items -->
      </ul>
      <div
        class="line w-[1px] bg-[#4e4e4e] absolute top-0 bottom-[8rem] left-7 h-[calc(100%-4rem)]"
      ></div>
    </div>

    <!-- <animationGlowingBG /> -->
    <div
      class="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-700 z-10"
    ></div>
  </div>
</template>

<style scoped>
.timeline-item:not(:last-child)::before {
  content: "";
  position: absolute;
  top: 0px;
  left: -2rem;
  width: 1px;
  height: 20rem;
  background: #363636;
  z-index: 1; /* --jet */
}

.timeline-item::after {
  content: "";
  position: absolute;
  top: 0.5rem;
  left: -2.4rem;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background: #e03d3d; /* --text-gradient-yellow */
  box-shadow: 0 0 0 5px #363636; /* --jet */
  z-index: 3;
}
</style>
