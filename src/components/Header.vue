<template>
  <div>
    <v-app-bar
      absolute
      dark
      color="light-blue accent-3;"
      style="position: fixed; left:0; top:0; width:100vw; z-index:199;"
      short
    >
      <v-app-bar-title class="text-h5">My Portfolio</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="toggleSideNav"
      ></v-app-bar-nav-icon>
      <template v-slot:extension>
        <v-tabs class="hidden-sm-and-down" align-with-title>
          <v-tab>Home</v-tab>
          <v-tab>About</v-tab>
          <v-tab>Skill</v-tab>
          <v-tab>Portfolio</v-tab>
          <v-tab>Contact</v-tab>
        </v-tabs>
        <v-spacer></v-spacer>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Header',
  data() {
    return {};
  },
  methods: {
    ...mapActions(['toggleSideNav']),
  },
};
</script>

<style scoped>
v-toolbar {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 199;
}
</style>
