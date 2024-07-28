<template>
  <v-card :title flat>
    <v-radio-group v-model="selectedGame" inline>
      <v-radio
        v-for="gameOption in gameOptions"
        :key="gameOption.id"
        :label="gameOption.name"
        :value="gameOption.id"
      ></v-radio>
    </v-radio-group>

    <ul v-for="gameOption in gameOptions" :key="`expansions_${gameOption.id}`">
      <li v-if="selectedGame == gameOption.id">
        <v-checkbox
          v-for="(expansion, j) in gameOption.expansions"
          :key="`${gameOption.id}_${j}`"
          :label="expansion.name"
        ></v-checkbox>
      </li>
    </ul>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import gameOptions from '@/data/gameOptions.json'

const title = 'Game Selector'

const selectedGame = ref('')
// const selectedExpansions = ref([])
</script>

<style lang="scss" scoped></style>
