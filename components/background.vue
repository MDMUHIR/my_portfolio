<script setup></script>

<template>
  <div class="bg-[#121212] fixed inset-0 z-[-1]">
    <div class="area">
      <ul class="circles">
        <li class=""></li>
        <li class=""></li>
        <li class=""></li>
        <li class="">
          <div
            class="w-[5rem] h-[5rem] bg-red-500/50 rounded-full filter blur-3xl animate-pulse delay-700"
          ></div>
        </li>
        <li class=""></li>
        <li class=""></li>
        <li class=""></li>
        <li class=""></li>
        <li class=""></li>
        <li class="">
          <div
            class="w-[5rem] h-[5rem] bg-amber-500/50 rounded-full filter blur-3xl animate-pulse delay-700"
          ></div>
        </li>
        <li class=""></li>
        <li class=""></li>
        <li class="">
          <div
            class="w-[5rem] h-[5rem] bg-amber-500/50 rounded-full filter blur-3xl animate-pulse delay-700"
          ></div>
        </li>
        <li class=""></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.circle {
  width: 20px;
  height: 20px;
  border: 1px solid #000;
  position: absolute;
  border-radius: 15px;
}
/* Background animation */

* {
  margin: 0px;
  padding: 0px;
}

/* .area {
  background: #4e54c8;
  background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
  width: 100%;
  height: 100vh;
} */

.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;
  /* box-shadow: rgba(255, 255, 255, 0.56) 4px 4px 70px 4px; */
  
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 130px;
  height: 130px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
  background: #000;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 120px;
  height: 120px;
  animation-delay: 0s;
  animation-duration: 25s;
}
.circles li:nth-child(11) {
  left: 95%;
  width: 15px;
  height: 15px;
  animation-delay: 0s;
  animation-duration: 20s;
  background: #000;
}
.circles li:nth-child(12) {
  left: 5%;
  width: 18px;
  height: 18px;
  animation-delay: 0s;
  animation-duration: 15s;
  background: #000;
}
.circles li:nth-child(13) {
  left: 2%;
  width: 18px;
  height: 18px;
  animation-delay: 0s;
  animation-duration: 8s;
  background: #6e6e6e;
}
.circles li:nth-child(14) {
  left: 98%;
  width: 18px;
  height: 18px;
  animation-delay: 0s;
  animation-duration: 16s;
  background: #6e6e6e;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}
</style>
