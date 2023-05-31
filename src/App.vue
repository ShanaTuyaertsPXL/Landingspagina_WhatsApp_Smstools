<template>
<!--  <NavbarComponent />-->
    <HomePageView />
</template>

<script>
import NavbarComponent from "./components/0.header/NavbarComponent.vue";
import HomePageView from "./components/HomePageView.vue";

export default {
  components: {
    NavbarComponent,
    HomePageView
  },
  mounted() {
    AOS.init();
  }
}
</script>

<style lang="scss">
@import "src/scss/base";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-family: 'Open Sans', sans-serif;
}

body {
  position: relative;
}

h1, h2 {
  //color: #494C5A;
  color: $colorTitle;
  font-weight: 700;
  font-size: $fontSizeH2;
}

h3 {
  font-size: $fontSizeH3;
  font-weight: bold;
}

p {
  font-size: $fontSizeParagraph;
  color: $colorParagraph;
}



//SCROLL INDICATOR
//! * The progress container
.progress-container {
  width: 100%;
  height: 4px;
  background: $colorTertiary;
  position: absolute;
  top: 100%;
}

//!* The progress bar (scroll indicator)  *!
.progress-bar {
  height: 4px;
  border-radius: 0 40px 40px 0;
  background: $colorSecondary;
  width: 0;
  transition: none;
}


//SCROLLBAR

//!* width *!
::-webkit-scrollbar {
  width: 8px;
}

//!* Track *!
::-webkit-scrollbar-track {
  background: $colorTertiary;
}

//!* Handle *!
::-webkit-scrollbar-thumb {
  background: $colorSecondary;
  border-radius: 10px;
}

//!* Handle on hover *!
::-webkit-scrollbar-thumb:hover {
  background: $colorSecondary;
}



//-----------------------------------

//@import "css/main";
//@import "css/main";

</style>
