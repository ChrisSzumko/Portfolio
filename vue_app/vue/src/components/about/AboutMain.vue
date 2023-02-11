<template>
  <div class="about_me_wrapper">
    <img class="component_bg" :src="require('@/assets/images/bg3.webp')">
    <!--  Main About Me Box  -->
    <div class="about_me_box box_bg">
      <div class="about_me_title">Krzysztof Szumko</div>
      <div class="about_me_subtitle">Python Lead Software Developer</div>
      <div class="about_me_desc">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
        est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
        modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </div>
      <div class="about_me_desc">
        Ut enim ad minima
        veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
        commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
        nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      </div>
      <div class="about_me_desc">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo.
      </div>
    </div>
    <div class="media_box box_bg">
      <img class="link_icon" :src="require('@/assets/icons/github.svg')" alt="Github link">
      <img class="link_icon" :src="require('@/assets/icons/linkedin.svg')" alt="Linkedin link">
      <img class="link_icon" :src="require('@/assets/icons/email.svg')" alt="Mail address">
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMain"
}
</script>

<style scoped>
.component_bg {
  display: flex;
  height: 100vh;
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
.box_bg {
  border-radius: 5px;
  background: rgba( 255, 255, 255, 0.8 );
  box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 8px;
  backdrop-filter: blur( 6px );
  -webkit-backdrop-filter: blur( 6px );
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}
.about_me_box {
  display: flex;
  flex-flow: column;
  width: 90vw;
  max-width: 800px;
  padding: 15px;
}
.about_me_wrapper {
  display: flex;
  flex: 1;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
}
.about_me_title, .about_me_subtitle {
  display: flex;
  flex: 1;
  justify-content: flex-start;
  padding-left: 15px;
  padding-bottom: 5px;
}
.about_me_title {
  font-size: 32px;
}
.about_me_subtitle {
  font-size: 18px;
}
.about_me_desc {
  display: flex;
  flex: 9;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1em;
  font-size: 15px;
}
.media_box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  width: 90vw;
  max-width: 380px;
}
.link_icon {
  display: flex;
  height: 35px;
  width: 35px;
  filter: invert(50%);
  cursor: pointer;
}
.link_icon:hover {
  transition: 1s;
  filter: invert(0%) drop-shadow(2px 2px 4px rgb(25 25 25 / 0.2));
}
</style>