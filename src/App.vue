<template>
  <v-app>
    <v-responsive>
      <v-app-bar>
        <template v-slot:prepend>
          <v-avatar icon="$vuetify" :image="appImage"></v-avatar>
        </template>

        <v-app-bar-title>{{ appTitle }}</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn
          v-for="menuItem in menuItems"
          :key="`menuItem_${menuItem.title.toLowerCase()}`"
          :to="menuItem.link"
        >
          <v-icon :icon="menuItem.icon" />
          &nbsp;
          {{ menuItem.title }}
        </v-btn>
      </v-app-bar>

      <v-main>
        <RouterView />
      </v-main>
    </v-responsive>
  </v-app>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import appImage from '@/assets/imgs/app-icon.png'

const appTitle = 'Terraforming Mars Calculator'

const menuItems = [
  { title: 'Home', link: '/', icon: 'mdi-home' },
  { title: 'Calculator', link: '/calculator', icon: 'mdi-calculator' },
  { title: 'About', link: '/about', icon: 'mdi-help-circle' }
]
</script>

<style scoped></style>
