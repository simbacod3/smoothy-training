<template>
  <div>
    <header>
      <input type="text">
    </header>
    <hr>
    <Card
      :title="'yooo'"
      :description="'Une petite description'"
    />
  </div>
</template>

<script setup lang="ts">
import Card from './components/Card.vue'
import { samples, type Card as CardType } from '@/fake-data'


/**
 * 1. Afficher la liste des cartes de samples
 * 2. Appliquer un filtre a la liste lorsqu'on tape dans l'input
 */

const sayHi = () => {
  console.log('Hi everyone')
}

const sayGoodbye = () => {
  console.log('Bye bye')
}
</script>
