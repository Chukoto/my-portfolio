<template>
  <v-app>
    <Header />
    <SideNav />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/Header';
import SideNav from '@/components/SideNav';
export default {
  name: 'App',

  components: {
    Header,
    SideNav,
  },

  data: () => ({
    //
  }),
};
</script>
