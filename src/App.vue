<template>
  <q-layout view="lHh Lpr lFf">

    <q-page-container>
      <NavBar/>
      <router-view></router-view>
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
  --primary-dustLightGreen: #E2FFC5;
  --primary-black: #000000;
}
body {
  background-color: var(--body-bg);
}
</style>
