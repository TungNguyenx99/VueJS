<template>
  <v-app>
    <v-app-bar app flat>
      <the-nav></the-nav>
    </v-app-bar>
    
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import TheNav from "./components/TheNav.vue";
export default {
  name: "App",
  components: {
    TheNav,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
</style>
