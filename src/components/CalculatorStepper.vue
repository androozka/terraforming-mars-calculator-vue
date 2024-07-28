<template>
  <v-stepper alt-labels :items="labels">
    <template v-slot:item.1>
      <GameSelector />
    </template>

    <template v-slot:item.2>
      <PlayerSelector />
    </template>

    <template v-slot:item.3>
      <PointsEntry />
    </template>

    <template v-slot:item.4>
      <ScoreResults />
    </template>
  </v-stepper>
</template>

<script setup>
import GameSelector from '@/components/GameSelector.vue'
import PlayerSelector from '@/components/PlayerSelector.vue'
import PointsEntry from '@/components/PointsEntry.vue'
import ScoreResults from '@/components/ScoreResults.vue'

const labels = ['Game', 'Players', 'Points', 'Scores']
</script>

<style scoped></style>
