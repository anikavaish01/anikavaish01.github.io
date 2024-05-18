<template>
    <div class="imp-box" :style="`background-color: #${colors.boxes}`">
      <div class="imp-box-title">{{ title }}</div>
      <ImageWrapper :colors="colors" :image="(icon?.data as string)" />
      <DynamicComponent :colors="colors" :items="dataFiltered" />
    </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import DynamicComponent from './DynamicComponent.vue';
import ImageWrapper from './ImageWrapper.vue';
const { data, title, colors } = defineProps<{title?: string, data: Daum[], colors: CaseStudy['colors']}>()
const icon = computed(() => data.find(val => val.type === 'image'))

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

.imp-box > img, .imp-box > svg {
  position: absolute;
  top: 0;
  margin-top: -55px;
  left: calc(165px + 62px);
  width: initial !important;
}
</style>