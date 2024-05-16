<template>
  <div class="case-study-main">
    <div class="title-image-wrapper">
      <img class="title-image"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.alphacoders.com%2F203%2F203381.jpg&f=1&nofb=1&ipt=911574653290e9b80b7ece13640c57efc9acba5f696686b31d995a0a0f039d7a&ipo=images" />
    </div>

    <div class="content">
      <SectionWrapper v-for="items in caseStudy.sections" :key="items.title">
        <TitleWrapper :title="items.title" />
        <div class="section-content">
          <DynamicComponent :items="items.data" />
        </div>

      </SectionWrapper>
    </div>
  </div>
</template>

<script setup lang="ts">


import DynamicComponent from '@/components/DynamicComponent.vue'
import SectionWrapper from '@/components/SectionWrapper.vue'
import TitleWrapper from '@/components/TitleWrapper.vue';

const { caseStudy } = defineProps<{caseStudy: CaseStudy}>()

</script>

<style scoped>
.case-study-main {
  width: 100%;
  height: 100%;
}

.title-image-wrapper {
  width: 100%;
  height: 80vh;
}

.title-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.content {
  margin: 87px 165px;
}

.section-content {
  margin-left: 15px;
}
</style>
