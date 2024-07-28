<template>
  <v-card title="Points Entry" flat>
    <table>
      <tr>
        <th>&nbsp;</th>
        <th v-for="(player, i) in players" :key="`player_${i}`">
          {{ player.name }}
        </th>
      </tr>

      <tr v-for="(player, j) in players" :key="`points_${j}`">
        <td>{{ pointsCategories[j].name }}</td>
        <td>{{ player.points.terraformRating }}</td>
        <td>{{ player.points.forestGreeneries }}</td>
        <td>{{ player.points.citiesAndGreeneries }}</td>
        <td>{{ player.points.milestones }}</td>
        <td>{{ player.points.awards }}</td>
        <td>{{ player.points.cards }}</td>
      </tr>
    </table>
  </v-card>
</template>

<script setup>
import examplePlayers from '@/data/examples/players.json'
import pointsCategories from '@/data/pointsCategories.json'

const players = examplePlayers
// const pointCategories = examplePointsCategories
</script>

<style lang="scss" scoped></style>
