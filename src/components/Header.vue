<template>
  <v-app-bar
    absolute
    color="#6A76AB"
    dark
    shrink-on-scroll
    prominent
    src="https://picsum.photos/1920/1080?random"
    fade-img-on-scroll
    scroll-target="#scrolling-techniques-3"
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
      >
      </v-img>
    </template>

    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-app-bar-title>My Portfolio</v-app-bar-title>

    <v-spacer></v-spacer>

    <template v-slot:extension>
      <v-tabs align-with-title>
        <v-tab>Portfolio 1</v-tab>
        <v-tab>Portfolio 2</v-tab>
        <v-tab>Portfolio 3</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style></style>
