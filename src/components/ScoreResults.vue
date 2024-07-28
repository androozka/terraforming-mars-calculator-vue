<template>
  <v-card title="Score Results" flat>
    <h1>Score Results</h1>

    <h3>Podiums (1st, 2nd, 3rd places)</h3>
    <img :src="examplePodium" alt="examplePodium" />
    <ol>
      <li v-for="(player, i) in winners" :key="`winner_${i}`">
        {{ i + 1 }} - {{ player.name }} ({{ `${100 - i}` }})
      </li>
    </ol>

    <h3>Score Table</h3>
    <table>
      <tr>
        <th>Player</th>
        <th v-for="pointsCategory in pointsCategories" :key="pointsCategory.id">
          {{ pointsCategory.name }}
        </th>
        <th>Total</th>
      </tr>

      <tr v-for="(player, i) in players" :key="`player_${i}`">
        <td>{{ player.name }}</td>
        <td>{{ player.points.terraformRating }}</td>
        <td>{{ player.points.terraformRating }}</td>
        <td>{{ player.points.terraformRating }}</td>
        <td>{{ player.points.terraformRating }}</td>
        <td>{{ player.points.terraformRating }}</td>
        <td>{{ player.points.terraformRating }}</td>
        <td>{{ 100 - i }}</td>
      </tr>
    </table>
  </v-card>
</template>

<script setup>
import pointsCategories from '@/data/pointsCategories.json'
import examplePlayers from '@/data/examples/players.json'
import examplePodium from '@/assets/imgs/podium-example.png'

// const pointsCategories = examplePointsCategories
const players = examplePlayers
const winners = [players[0], players[1], players[2]]
</script>

<style lang="scss" scoped></style>
