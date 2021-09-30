<template>
  <v-app>
    <Header />
    <SideNav />
    <v-main>
      <Home />
      <v-container>
        <About />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/Header';
import SideNav from '@/components/SideNav';
import Home from '@/components/Home';
import About from '@/components/About';
export default {
  name: 'App',

  components: {
    Header,
    SideNav,
    Home,
    About,
  },

  data: () => ({
    //
  }),
};
</script>
