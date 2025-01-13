<script setup>
const services = reactive([
  {
    id: 1,
    title: "Custom Vue.js Application Development",
    description:
      "Design and develop custom web applications using Vue.js based on client requirements. Build scalable, high-performance web apps with a focus on user experience.",
  },
  {
    id: 2,
    title: "Single Page Application (SPA) Development",
    description:
      "Develop fast and responsive single-page applications (SPAs) using Vue.js to create seamless user experiences without reloading entire pages.",
  },
  {
    id: 3,
    title: "Vue.js Component Development",
    description:
      "Create reusable, modular components that can be integrated into different parts of the application to enhance maintainability and efficiency.",
  },
  {
    id: 4,
    title: "Vue.js + Nuxt.js Development",
    description:
      "Build server-side rendered (SSR) applications or static websites using Nuxt.js, enhancing SEO and page load speed.",
  },
  {
    id: 5,
    title: "Vue.js UI/UX Development",
    description:
      "Design and implement user-friendly interfaces with Vue.js, ensuring accessibility, performance, and responsiveness.",
  },
  {
    id: 6,
    title: "API Integration and State Management",
    description:
      "Integrate RESTful or GraphQL APIs into Vue.js applications and manage data flow using Vuex or Pinia for state management.",
  },
  {
    id: 7,
    title: "Vue.js Front-End Architecture",
    description:
      "Set up robust front-end architectures using Vue.js, organizing projects for scalability, maintainability, and performance.",
  },
  {
    id: 8,
    title: "Progressive Web App (PWA) Development",
    description:
      "Develop PWAs using Vue.js to offer a native-like experience with features like offline access, push notifications, and fast loading times.",
  },
  {
    id: 9,
    title: "Real-Time Applications Development",
    description:
      "Build real-time applications with Vue.js and WebSockets or Firebase to enable features like live chat, notifications, or real-time updates.",
  },
  {
    id: 10,
    title: "Testing and Debugging Vue.js Applications",
    description:
      "Write unit tests using Jest or Mocha and conduct end-to-end testing with Cypress to ensure quality and functionality. Debug and troubleshoot Vue.js applications to enhance performance and user experience.",
  },
  {
    id: 11,
    title: "Migration to Vue.js",
    description:
      "Help businesses migrate from older technologies or other front-end frameworks like Angular or React to Vue.js for better performance and scalability.",
  },
  {
    id: 12,
    title: "Vue.js Plugin Development",
    description:
      "Develop custom plugins and libraries that extend the functionality of Vue.js for specific use cases or projects.",
  },
  {
    id: 13,
    title: "Performance Optimization",
    description:
      "Optimize Vue.js applications by implementing lazy loading, code-splitting, and other techniques to enhance load times and overall performance.",
  },
  {
    id: 14,
    title: "Responsive and Mobile-First Development",
    description:
      "Develop responsive web applications using Vue.js that work seamlessly across different devices and screen sizes.",
  },
  {
    id: 15,
    title: "Consulting and Code Review",
    description:
      "Offer consulting services to guide businesses through Vue.js development best practices and architecture. Provide code reviews to ensure quality, performance, and adherence to best practices.",
  },
]);
const toggleDescription = ref(null);
</script>

<template>
  <div class="main services p-10">
    <h1 class="text-3xl 2xl:text-4xl mb-5 text-white font-mono font-bold text-center">Services</h1>
    <div
      class="h-64 overflow-y-scroll Scrollbar shadow-inner shadow-white bg-black/50 rounded-[5px] py-2"
    >
      <div class="services flex flex-col justify-center items-center flex-wrap">
        <div
          class="services text-white px-6 text-center"
          :class="
            toggleDescription == service.id
              ? ' bg-black/50 mx-4  items-center scale-100  rounded-tr-3xl rounded-bl-3xl border'
              : 'scale-75'
          "
          v-for="(service, index) in services"
          :key="index"
        >
          <h1
            @click="toggleDescription = service.id"
            class="lg:text-3xl text-xl m-2  text-bold cursor-pointer flex"
            :class="
              toggleDescription == service.id
                ? 'text-white decoration-double underline underline-offset-3 decoration-pink-500  '
                : 'text-[#d4cfcf] hover:text-cyan-300'
            "
          >
            <span class="mr-2">{{ service.id }}.</span>{{ service.title }}

            <span v-if="toggleDescription !== service.id" class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M16.939 7.939L12 12.879l-4.939-4.94l-2.122 2.122L12 17.121l7.061-7.06z"
                />
              </svg>
            </span>
          </h1>
          <p
            v-if="toggleDescription == service.id"
            class="lg:text-2xl pb-2 my-2"
          >
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
