<template>
  <v-card class="mx-auto" max-width="400">
    <v-img class="align-end text-white" height="200" :src="welcomeBackgroundImg" cover>
      <v-card-title>Welcome</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">to the Terraforming Mars Calculator App</v-card-subtitle>

    <v-card-text>
      <p>
        This is an app to assist with calculating the final scores for players after a game of
        Terraforming Mars or Ares Expedition, with any number of their expansions.
      </p>

      <p>
        Based on your selections, the app will provide the right input so you can quickly figure out
        who terraformed Mars the best!
      </p>
    </v-card-text>

    <v-card-actions>
      <v-btn to="/about" color="blue" text="About"></v-btn>
      <v-btn
        href="http://github.com/androozka/terraforming-mars-calculator-vue"
        color="grey"
        text="GitHub"
      ></v-btn>
      <v-btn to="/calculator" color="green" text="Get Started"></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import welcomeBackgroundImg from '@/assets/imgs/welcome-background.jpg'
</script>

<style scoped></style>
