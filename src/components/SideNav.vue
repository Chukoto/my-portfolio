<template>
  <v-sheet class="overflow-hidden">
    <v-navigation-drawer
      v-model="$store.state.drawer"
      absolute
      temporary
      right
      style="position: fixed; right:0; top:0; z-index:200;"
    >
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
