<template>
  <div>
    <div class="card-wrapper">
      <div class="card-header">Image</div>
      <div class="card-body">
        <h2 class="card-title">{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
      <div class="card-footer">
        <div><button>Details</button></div>
        <div><button>Buy now</button></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string
  description: string
  image: string
}

withDefaults(defineProps<Props>(), {
  title: 'Here is the title',
  description: 'Here is the description'
})
</script>

<style lang="css" scoped>
.card-wrapper {
  padding: 1rem;
  border: 1px solid gray;
  border-radius: 5%;
  height: 300px;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
