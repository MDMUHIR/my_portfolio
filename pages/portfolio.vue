<script setup>
import Digitalnest from "../public/images/projects/Digitalnest.jpg";
import Chaldal from "../public/images/projects/Chaldal.jpg";
import HomeMeal from "../public/images/projects/HomeMeal.png";

const projects = reactive([
  {
    title: "Digitalnest",
    image: Digitalnest,
    description: "A SEO friendly ecommerce site",
    link: "https://digitalnest-ten.vercel.app/",
  },
  {
    title: "Grocery Shop",
    image: Chaldal,
    description: "Clone-design development of a Grocery Shop",
    link: "https://github.com/MDMUHIR/ChaldalgroceryShopDesign",
  },
  {
    title: "HoMe Meal",
    image: HomeMeal,
    description: 'Recipe App Development with "TheMealDB" API',
    link: "https://home-meal-muhir.vercel.app/",
  },
]);
</script>

<template>
  <div
    class="main w-full bg-[#1E1E1F] pt-10 pb-10 px-2 sm:px-12 xl:px-16 rounded-3xl border border-[#505050] relative overflow-hidden transform  transition-all duration-300"
  >
    <StylingTab heading="Portfolio" class="absolute top-0 left-0 right-0" />

    <!-- Projects -->

    <!-- nav tabs -->
    <div class="nab my-10">
      <ul class="flex text-white font-light space-x-4">
        <li
          class="flex gap-x-2 items-center bg-stone-800 px-2 rounded-full shadow-[#0f0f0f] border-l border-t border-[#2d76a1]"
        >
          <div class="pill w-3 h-3 bg-cyan-500 rounded-full"></div>
          Websites
        </li>
        <!-- <li>Mobile Apps</li> -->
      </ul>
    </div>

    <!-- Projects List -->
    <div
      class="Card-container flex flex-wrap justify-center items-end gap-5 pt-5"
    >
      <div
        class="Card-list card w-[20rem] p-3 bg-gradient-to-br from-[#2B2B2C] to-[#1E1E1F] shadow-xl shadow-[#000] z-40 rounded-xl border border-[#505050]/30 hover:border-[#505050] transition-all duration-300 transform hover:-translate-y-1"
        v-for="(project, index) in projects"
        :key="index"
      >
        <div>
          <!-- image -->
          <div class="img relative group">
            <a
              target="_blank"
              :href="project.link"
              class="w-full h-full group-hover:bg-black"
            >
              <img
                :src="project.image"
                alt="project img"
                class="rounded-lg border-2 border-transparent hover:border-rose-500 group-hover:scale-95 duration-300 w-full h-auto object-cover"
              />
              <div
                class="Icon absolute flex justify-center items-center bg-gradient-to-br from-black/80 to-black/50 w-full h-full top-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="55"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ffff"
                    d="M6.23 22H3.617q-.691 0-1.153-.462T2 20.385v-2.616h1v2.616q0 .269.173.442t.443.173H6.23zm11.54 0v-1h2.615q.269 0 .442-.173t.173-.442v-2.616h1v2.616q0 .69-.462 1.152T20.385 22zM12 17.73q-2.673 0-4.803-1.514Q5.067 14.7 3.981 12q1.086-2.7 3.216-4.216Q9.327 6.27 12 6.27t4.803 1.515T20.019 12q-1.086 2.7-3.216 4.216Q14.673 17.73 12 17.73m0-2.866q1.2 0 2.033-.832T14.866 12t-.833-2.033T12 9.135t-2.033.832T9.135 12t.832 2.033t2.033.833m0-1q-.779 0-1.322-.544q-.543-.543-.543-1.322t.543-1.322T12 10.135t1.322.543q.544.543.544 1.322t-.544 1.322q-.543.544-1.322.544M2 6.23V3.616q0-.691.463-1.153T3.616 2H6.23v1H3.616q-.27 0-.443.173T3 3.616V6.23zm19 0V3.616q0-.27-.173-.443T20.385 3h-2.616V2h2.616q.69 0 1.152.463T22 3.616V6.23z"
                  />
                </svg>
              </div>
            </a>
          </div>
          <!-- Heading -->
          <h1 class="heading text-stone-300 text-xl font-bold mt-4 mb-1 bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
            {{ project.title }}
          </h1>
          <p class="text-sm text-[#cfcfcf]/90 font-light">{{ project.description }}</p>
        </div>
      </div>
    </div>

    <!-- ============= -->
    <div
      class="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-700 z-10"
    ></div>
  </div>
</template>

<style scoped></style>
