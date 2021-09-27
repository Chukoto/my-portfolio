<template>
  <v-sheet height="400" class="overflow-hidden">
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-btn color="pink" dark @click.stop="drawer = !drawer">
          Toggle
        </v-btn>
      </v-row>
    </v-container>

    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: 'Home', icon: 'mdi-home' },
        { title: 'About', icon: 'mdi-emoticon' },
        { title: 'Skill', icon: 'mdi-brain' },
        { title: 'Portfolio', icon: 'mdi-note-multiple' },
        { title: 'Contact', icon: 'mdi-email' },
      ],
    };
  },
};
</script>

<style></style>
