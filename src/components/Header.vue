<template>
  <div>
    <v-toolbar
      dark
      color="light-blue accent-3;"
      style="position: fixed; left:0; top:0; width:100vw; z-index:199;"
    >
      <v-toolbar-title>My Portfolio</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon @click="toggleSideNav"></v-app-bar-nav-icon>
    </v-toolbar>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Header',
  methods: {
    ...mapActions(['toggleSideNav']),
  },
};
</script>

<style></style>
