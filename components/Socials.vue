<script setup>
const socials = reactive([
  {
    name: "Skype",
    link: "https://join.skype.com/invite/um45L2MIzxQP",
    image: "https://api.iconify.design/ri:skype-fill.svg?color=%23ffffff",
  },

  {
    name: "WhatsApp",
    link: "https://wa.link/m875rv",
    image:
      "https://api.iconify.design/mingcute:whatsapp-fill.svg?color=%23ffffff",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/md-muhir",
    image: "https://api.iconify.design/ri:linkedin-fill.svg?color=%23ffffff",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/md_muhiruddin",
    image: "https://api.iconify.design/mdi:twitter.svg?color=%23ffffff",
  },
  {
    name: "YouTube",
    link: "https://youtube.com/@codegrammarbd?si=b5Q9WA3fwe5dLE-o",
    image: "https://api.iconify.design/mdi:youtube.svg?color=%23ffffff",
  },
]);
</script>

<template>
  <div class="main flex">
    <div class="m-1" v-for="(social, index) in socials" :key="index">
      <a :href="social.link" target="_blank" class="">
        <img
          :src="social.image"
          alt=""
          class="w-7 opacity-50 hover:opacity-100 duration-200"
        />
      </a>
    </div>
  </div>
</template>
