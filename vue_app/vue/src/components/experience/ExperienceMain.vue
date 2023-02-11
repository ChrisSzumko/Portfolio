<template>
  <div>
    <img class="component_bg" :src="require('@/assets/images/bg1.webp')">
    Exp
  </div>
</template>

<script>
export default {
  name: "ExperienceMain"
}
</script>

<style scoped>
.component_bg {
  display: flex;
  height: 100vh;
  /*width: 100vw;*/
  position: fixed;
  top:0;
  left: 0;
  z-index: -1;
  opacity: 75%;
	-webkit-animation: fade-in 1.2s ease-in 0.5s both;
  animation: fade-in 1.2s ease-in 0.5s both;
}
@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>