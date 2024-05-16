<template>
    <div class="imp-box">
      <div class="imp-box-title">{{ title }}</div>
      <img class="imp-box-icon" :src="iconUrl" />
      <DynamicComponent :items="dataFiltered" />
    </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import DynamicComponent from './DynamicComponent.vue';
const { data, title } = defineProps<{title?: string, data: Daum[]}>()
const icon = computed(() => data.find(val => val.type === 'image'))
const iconUrl = computed(() => {
    return new URL(`../assets/${icon.value?.data}`, import.meta.url).toString()
})

const dataFiltered = computed(() => {
  let foundImage = false
  return data.filter((val) => {
    if (val.type === 'image' && !foundImage) {
      foundImage = true
      return false
    }
    return true
  })
})
</script>

<style scoped>
.imp-box {
  position: relative;
  margin-left: calc(-165px - 15px);
  margin-right: -165px;
  background-color: #002368;
  color: white !important;
  padding-left: calc(165px + 172px );
  padding-right: calc(165px + 172px );
  padding-top: 71px;
  padding-bottom: 71px;
}

.imp-box-icon {
  position: absolute;
  top: 0;
  margin-top: -55px;
  left: calc(165px + 62px);
}

.imp-box-title {
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 40px;
}

.imp-box-text {
  font-size: 18px;
  font-weight: 600;
}
</style>

<style>
.imp-box * {
  color: white !important;
}
</style>