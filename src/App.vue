<template>
  <div>
    <header>
      <input type="text" v-model="cardName" />
    </header>
    <hr />
    <div v-for="card in cardList" :key="card.title">
      <Card
        :title="card.title"
        :description="card.description"
        :image="card.img"
        @goToDetails="sayHi()"
        @buyItem="sayGoodbye()"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import Card from './components/Card.vue'
import { samples, type Card as CardType } from '@/fake-data'

/**
 * 1. Afficher la liste des cartes de samples
 * 2. Appliquer un filtre a la liste lorsqu'on tape dans l'input
 */

const cardList = ref(samples)
const cardName = ref('')

watch(cardName, (enteredName) => {
  console.log(enteredName)
})

const sayHi = () => {
  console.log('Hi everyone')
}

const sayGoodbye = () => {
  console.log('Bye bye')
}
</script>
