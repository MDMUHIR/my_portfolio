<script setup>
const contacts = reactive([
  {
    name: "Email",
    link: "mailto:mdmuhir04@gmail.com",
    title: "mdmuhir04@gmail.com",
    image:
      "https://api.iconify.design/ph:envelope-simple-light.svg?color=%23f5ca65",
  },
  {
    name: "Phone",
    link: "",
    title: "+880 1751925103",
    image:
      "https://api.iconify.design/stash:smartphone-light.svg?color=%23f5ca65",
  },
  {
    name: "Birthdate",
    link: "",
    title: "January 20, 2003",
    image:
      "https://api.iconify.design/material-symbols-light:calendar-month-outline-sharp.svg?color=%23f5ca65",
  },
  {
    name: "Location",
    link: "",
    title: "Kushtia, Bangladesh",
    image:
      "https://api.iconify.design/mdi-light:map-marker.svg?color=%23f5ca65",
  },
]);
</script>

<template>
  <div class="main">
    <div v-for="(contact, index) in contacts" :key="index" class="my-3">
      <div class="flex my-1">
        <div
          class="icon-box px-2 mx-2 border-l border-t border-[#615e5e] rounded-full flex shadow-sm shadow-[#000] duration-200 w-11 h-11"
        >
          <img
            :src="contact.image"
            alt=""
            class="icon w-7  md:w-8 mx-auto shadow-neutral-50 fill-current text-[#FDC663]"
          />
        </div>

        <div class="text text-[#e4e3e3] text-left px-2">
          <h2 class="text-sm font-semibold text-stone-400">
            {{ contact.name }}
          </h2>
          <p class=" font-thin  select-all">{{ contact.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
