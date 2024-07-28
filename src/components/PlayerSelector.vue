<template>
  <v-container>
    <v-card :title flat>
      <table>
        <tr>
          <th>Name</th>
          <th>Color</th>
          <th>Active</th>
        </tr>

        <tr v-for="(playerOption, i) in playerOptions" :key="`playerName_${i}`">
          <td>{{ playerOption.name }}</td>
          <td>{{ playerOption.color }}</td>
          <td>{{ playerOption.active }}</td>
        </tr>
      </table>
      <ColorSelector />
    </v-card>
  </v-container>
</template>

<script setup>
import examplePlayers from '@/data/examples/players.json'
import ColorSelector from '@/components/ColorSelector.vue'

const title = 'Player Selector'
const playerOptions = examplePlayers
</script>

<style lang="scss" scoped></style>
