<template>
  <v-app>
    <v-main>
      <Header />
      <v-card class="overflow-hidden">
        <v-sheet
          id="scrolling-techniques-3"
          class="overflow-y-auto"
          max-height="600"
        >
          <v-container style="height: 2000px">
            <router-view />
          </v-container>
        </v-sheet>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/Header';
export default {
  name: 'App',

  components: {
    Header,
  },

  data: () => ({
    //
  }),
};
</script>
