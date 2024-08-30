<template>
  <div class="case-study-main">
    <div class="title-image-wrapper" :style="`background-color: #${caseStudy.colors.boxes};`">
      <div class="title-text-wrapper">
        <div class="title-text">{{ caseStudy.header.title }}</div>
        <div class="title-description">{{ caseStudy.header.description }}</div>
      </div>
      <img class="title-image" :src="imageUrl" />
    </div>

    <div class="content">
      <SectionWrapper v-for="items in caseStudy.sections" :key="items.title"
        :color="items.colored ? caseStudy.colors['accent-light'] : undefined" :icon="items.icon">
        <SectionTitle :color="caseStudy.colors.accent" :content="items.title" />
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

.title-image-wrapper {
  display: flex;
  position: relative;
  width: 100%;
  height: 804px;
}

.title-image {
  position: absolute;
  height: 100%;
  width: 60%;
  object-fit: cover;
  right: 0;
}

.title-text-wrapper {
  /* position: absolute; */
  padding-top: 248px;
  padding-left: 88px;
  width: 60%
}

.title-text {
  font-size: 64px;
  font-weight: 900;
  color: white;

}

.title-description {
  font-size: 24px;
  font-weight: 900;
  width: 60%;
  color: white;
}

.section {}

.section-content {
  max-width: min(1000px, 100vw - 50px);
  margin-left: auto;
  margin-right: auto;
  /* margin-left: 15px; */
}
</style>
