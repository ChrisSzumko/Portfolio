<template>
  <div class="main_bg">
    <MainMenu />
    <div class="content_wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>
import MainMenu from "@/components/MainMenu.vue";

export default {
  name: 'App',
  props: {
    fromDjango: {
      type: String,
      default() {return "This is the default value - not provided by Django"}
    }
  },
  components: {
    MainMenu
  },
  mounted() {
    this.$router.push(this.fromDjango);
    // const component = this;
    // window.setTimeout(function (){
    //   console.log(component.$route.path);
    // }, 2 * 1000)
  }
}
</script>

<style>
/*  Just to overwrite default styling for body element  */
body {
  margin: 0;
  padding: 0;
}
* {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.main_bg {
  display: flex;
  flex-flow: column;
  height: 100vh;
  width: 100vw;
  /*background: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);*/
  /*background: linear-gradient(109.6deg, rgb(245, 239, 249) 30.1%, rgb(207, 211, 236) 100.2%);*/
}
.content_wrapper {
  display: flex;
  flex-flow: column;
  height: calc(100vh - 60px);
}
</style>
