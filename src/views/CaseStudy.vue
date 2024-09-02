<template>
  <div class="case-study-main">
    <div class="title-box" :style="`background-color: ${caseStudy.header.color}`" >
      <div class="title-content-wrapper">
        <div class="title-text-wrapper">
          <div class="title-text">{{ caseStudy.header.title }}</div>
          <div class="title-subtext">
            <div class="title-product-name">{{ caseStudy.header['product-name']}}</div> 
            <div class="title-description">{{ caseStudy.header.description }}</div>
          </div>
        </div>
        <img class="title-image" :src="imageUrl" />
      </div>
    </div>

    <div class="content">
      <SectionWrapper v-for="items in caseStudy.sections" :key="items.title"
        :color="items.colored ? '#' + caseStudy.colors['accent-light'] : items.color" :icon="items.icon">
        <SectionTitle v-if="items.title" :color="caseStudy.colors.accent" :content="items.title" />
        <div class="section-content">
          <DynamicComponent :items="items.data" :colors="caseStudy.colors" />
        </div>

      </SectionWrapper>
    </div>
  </div>
</template>

<script setup lang="ts">


import DynamicComponent from '@/components/DynamicComponent.vue'
import SectionTitle from '@/components/SectionTitle.vue';
import SectionWrapper from '@/components/SectionWrapper.vue'
import { computed } from 'vue';

const { caseStudy } = defineProps<{ caseStudy: CaseStudy }>()

const imageUrl = computed(() => {
  return new URL(`../assets/${caseStudy.header.image}`, import.meta.url).toString()
})

</script>

<style scoped lang="scss">
.case-study-main {
  width: 100%;
  height: 100%;
}

.title-box {
  width: 100%;
  height: 100%;
}

.title-content-wrapper{
  display: flex;
  position: relative;
  width: 1200px;
  height: 800px;
  margin: auto
}

.title-image {
  position: absolute;
  height: 100%;
  width: 50%;
  right: 0;
}

.title-text-wrapper {
  /* position: absolute; */
  padding-top: 300px;
}

.title-subtext{
  position: absolute;
  bottom: 100px;
  width: 600px;
}

.title-text {
  font-size: 40px;
  font-weight: 700;
}

.title-product-name{
  font-size: 18px;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-weight: 600;

}

.title-description {
  font-size: 16px;
  font-weight: 400;
  width: 60%;
}

.section-content {
  max-width: min(1000px, 100vw - 50px);
  margin-left: auto;
  margin-right: auto;
  /* margin-left: 15px; */
}
</style>