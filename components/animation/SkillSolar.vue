<script setup></script>

<template>
  <div class="main">
    <div class="skills mx-auto w-auto inline-block">
      <div class="skills-circle-wrap w-[400px] h-[400px]">
        <!-- <div class="rotate rounded-full bg-black text-xs text-red-400 flex text-center">hover me</div> -->
        <div class="skills-circle">
          <div class="skill-orbit">
            <div class="skill-planet"><span>JS</span></div>
          </div>
          <div class="skill-orbit">
            <div class="skill-planet"><span>CSS</span></div>
          </div>
          <div class="skill-orbit">
            <div class="skill-planet"><span>HTML</span></div>
          </div>
          <div class="skill-orbit">
            <div class="skill-planet"><span>Nuxt</span></div>
          </div>
          <div class="skill-orbit">
            <div class="skill-planet"><span>Vue</span></div>
          </div>
        </div>
        <div class="skills-top-circle panel"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skills-circle-wrap {
  /* width: 400px;
  height: 400px; */
  position: relative;
  margin: 10px auto;
  pointer-events: fill;
  cursor: pointer;
  -webkit-transform: perspective(900px);
  transform: perspective(900px);
}
.skills-top-circle {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 50px #ffeb00;
}
.skills-circle {
  /* width: 400px;
  height: 400px; */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 50%;
  transition: 3s all;
}

.skill-orbit {
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transition: 3s all;
  transform: perspective(900px);
}
.skill-orbit:nth-child(1) {
  width: 100%;
  height: 100%;
}
.skill-orbit:nth-child(2) {
  width: 82.5%;
  height: 82.5%;
}
.skill-orbit:nth-child(3) {
  width: 65%;
  height: 65%;
}
.skill-orbit:nth-child(4) {
  width: 47.5%;
  height: 47.5%;
}
.skill-orbit:nth-child(5) {
  width: 30%;
  height: 30%;
}
.skill-planet {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  top: -15px;
  left: 0;
  right: 0;
  margin: 0 auto;
  font-family: Arial;
  font-weight: 100;
  text-align: center;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  transition: 1s all;
}
.skill-planet span {
  display: block;
}

.skill-orbit:nth-child(1) .skill-planet {
  background: #a9925f;
  border: 2px solid #fff9bf;
  color: #fff9bf;
  font-size: 16px;
  line-height: 26px;
}
.skill-orbit:nth-child(2) .skill-planet {
  background: #5f6151;
  border: 2px solid #a3b476;
  color: #a3b476;
  font-size: 12px;
  line-height: 26px;
}
.skill-orbit:nth-child(3) .skill-planet {
  background: #443f35;
  border: 2px solid #c77751;
  color: #c77751;
  font-size: 9px;
  line-height: 26px;
}
.skill-orbit:nth-child(4) .skill-planet {
  background: #6e391e;
  border: 2px solid #fbaf3f;
  color: #fbaf3f;
  font-size: 12px;
  line-height: 26px;
}
.skill-orbit:nth-child(5) .skill-planet {
  background: #282e27;
  border: 2px solid #327959;
  color: #327959;
  font-size: 12px;
  line-height: 26px;
}
.skill-orbit:nth-child(1) .skill-planet {
  -webkit-animation: travelOrbit 10s infinite linear;
  animation: travelOrbit 10s infinite linear;
  -webkit-transform-origin: 50% 713%;
  transform-origin: 50% 713%;
}
.skill-orbit:nth-child(1) span {
  -webkit-animation: unrotate 10s infinite linear;
  animation: unrotate 10s infinite linear;
}
.skill-orbit:nth-child(2) .skill-planet {
  -webkit-animation: travelOrbit 8s infinite linear;
  animation: travelOrbit 8s infinite linear;
  -webkit-transform-origin: 50% 597%;
  transform-origin: 50% 597%;
}
.skill-orbit:nth-child(2) span {
  -webkit-animation: unrotate 8s infinite linear;
  animation: unrotate 8s infinite linear;
}
.skill-orbit:nth-child(3) .skill-planet {
  -webkit-animation: travelOrbit 6s infinite linear;
  animation: travelOrbit 6s infinite linear;
  -webkit-transform-origin: 50% 480%;
  transform-origin: 50% 480%;
}
.skill-orbit:nth-child(3) span {
  -webkit-animation: unrotate 6s infinite linear;
  animation: unrotate 6s infinite linear;
}
.skill-orbit:nth-child(4) .skill-planet {
  -webkit-animation: travelOrbit 4s infinite linear;
  animation: travelOrbit 4s infinite linear;
  -webkit-transform-origin: 50% 363%;
  transform-origin: 50% 363%;
}
.skill-orbit:nth-child(4) span {
  -webkit-animation: unrotate 4s infinite linear;
  animation: unrotate 4s infinite linear;
}
.skill-orbit:nth-child(5) .skill-planet {
  -webkit-animation: travelOrbit 2s infinite linear;
  animation: travelOrbit 2s infinite linear;
  -webkit-transform-origin: 50% 243%;
  transform-origin: 50% 243%;
}
.skill-orbit:nth-child(5) span {
  -webkit-animation: unrotate 2s infinite linear;
  animation: unrotate 2s infinite linear;
}
@-webkit-keyframes travelOrbit {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes travelOrbit {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes unrotate {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(-360deg);
  }
}
@keyframes unrotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

/* .rotate:hover + .skills-circle {
  -webkit-transform: rotate3d(60, 35, 0, 360deg);
  transform: rotate3d(60, 35, 0, 360deg);
} */
</style>
