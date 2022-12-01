<template>
  <q-layout view="lHh Lpr lFf">

    <q-page-container>
      <NavBar/>
      <div id="main">
        <router-view></router-view>
      </div>
    </q-page-container>
  </q-layout>
  
</template>

<script>
  import NavBar from "./components/navbar/NavBar.vue";

  export default {
    name: "App",
    components: {
      NavBar 
    }  
  } 
</script>

<style>
:root {
  --body-bg: #F8F8F8;
  --primary-white: #ffffff;
  --primary-red: #85223F;
  --primary-orange: #F27121;
  --primary-grey: #373737;
  --primary-lightGrey: #F8F8F8;
  --primary-dustLightGreen: #E2FFC5;
  --primary-green: #40DB7A;
  --primary-black: #000000;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.h1, h1 {
    font-size: calc(1.375rem + 1.5vw) !important;
}

.h2, h2 {
    font-size: calc(1.325rem + .9vw) !important;
}

.h3, h3 {
    font-size: calc(1.3rem + .6vw) !important;
}

.h4, h4 {
    font-size: calc(1.275rem + .3vw) !important;
}

.h5, h5 {
    font-size: 1.25rem !important;
}

.h6, h6 {
    font-size: 1rem !important;
}

.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    margin-top: 0 !important;
    margin-bottom: 0.5rem !important;
    font-weight: 500 !important;
    line-height: 1.2 !important;
}

body {
  background-color: var(--body-bg);
}

#main {
  display: flex;
  justify-content: center;
}

#content {
  max-width: 1080px;
  width: 100%;
  display: flex;
}

.mt-10 {
  margin-top: 10px;
}

.mb-10 {
  margin-bottom: 10px;
}

.mb-20 {
  margin-bottom: 20px;
}
</style>
