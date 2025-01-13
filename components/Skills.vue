<script setup>
const coreFrontend = reactive([
  {
    name: "HTML5",
    link: "https://www.w3.org/html/",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
  },
  {
    name: "CSS3",
    link: "https://www.w3schools.com/css/",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
  },
  {
    name: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    link: "https://www.typescriptlang.org/",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
]);

// Frameworks and Libraries

const frameworkLibraries = reactive([
  {
    name: "Vue.js",
    link: "https://vuejs.org/",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg",
  },
  {
    name: "Nuxt.js",
    link: "https://nuxtjs.org/",
    icon: "https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg",
  },
  {
    name: "React",
    link: "https://reactjs.org/",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  },
]);

// Styling Frameworks:
const stylingFrameworks = reactive([
  {
    name: "Bootstrap",
    link: "https://getbootstrap.com",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Tailwind CSS",
    link: "https://tailwindcss.com/",
    icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
]);

// Build Tools and Version Control:
const buildToolsAndVersionCtrl = reactive([
  {
    name: "Vite",
    link: "https://vite.dev/",
    icon: "https://vite.dev/logo.svg",
  },
  {
    name: "Git/GitHub",
    link: "https://github.com/",
    icon: "https://github.githubassets.com/assets/gh-desktop-7c9388a38509.png",
  },
]);

// State Management:
const otherSkills = reactive([
  {
    name: "Pinia",
    description: "State management for vue.js",
    link: "https://pinia.vuejs.org/",
    icon: "https://pinia.vuejs.org/logo.svg",
  },
  {
    name: "VS COde",
    description: "Code editor.",
    link: "https://code.visualstudio.com/",
    icon: "https://api.iconify.design/mdi:microsoft-visual-studio-code.svg?color=%232d92f0",
  },
]);
</script>

<template>
  <div class="main sm:px-10 text-center">
    <div
      class="flex flex-row flex-wrap gap-x-4 md:flex-row mx-auto justify-center md:justify-start items-center"
    >
      <PropsSkillCard :items="coreFrontend" heading="Core Frontend" />
      <PropsSkillCard
        :items="frameworkLibraries"
        heading="Frameworks"
        color="bg-purple-500"
        class="mt-5"
      />

      <PropsSkillCard
        :items="stylingFrameworks"
        heading="Styling Frameworks"
        color="bg-indigo-500"
        class="mt-5"
      >
      </PropsSkillCard>
      <PropsSkillCard
        :items="buildToolsAndVersionCtrl"
        heading="Build & Version Ctrl"
        color="bg-orange-500"
        class="mt-5"
      />
      <PropsSkillCard
        :items="otherSkills"
        heading="Others"
        color="bg-cyan-500"
        class="mt-5"
      />
    </div>
  </div>
</template>

<style scoped></style>
