<template>
  <div class="main_menu_wrapper">
    <div class="logo_wrapper">
      <img class="logo_img" :src="require('@/assets/images/logo.webp')" alt="Logo">
    </div>
    <router-link class="menu_link" to="/about"><div class="main_menu_button">about</div></router-link>
    <router-link class="menu_link" to="/experience"><div class="main_menu_button">experience</div></router-link>
    <router-link class="menu_link" to="/projects"><div class="main_menu_button">projects</div></router-link>
    <router-link class="menu_link" to="/contact"><div class="main_menu_button">contact</div></router-link>
  </div>
</template>

<script>
export default {
  name: "MainMenu",

}
</script>

<style scoped>
.main_menu_wrapper {
  display: flex;
  flex: 1;
  flex-flow: row;
  height: 60px;
  justify-content: center;
  align-items: center;
  background: rgba( 255, 255, 255, 0.25 );
  backdrop-filter: blur( 8px );
  -webkit-backdrop-filter: blur( 8px );
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 8px;
}
.logo_wrapper {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 55px;
  width: 20vw;
}
.logo_img {
  height: 44px;
}
.menu_link{
  color: inherit;
  text-decoration: inherit;
  cursor: inherit;
}
.main_menu_button {
  display: flex;
  flex: 1;
  color: rgba(25,25,25,0.8);
  letter-spacing: 1px;
  height: 55px;
  width: 20vw;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
}
.main_menu_button:hover {
  cursor: pointer;
  transition: 0.5s;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
}
</style>