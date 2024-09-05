<template>
  <div class="case-study-main">
    <div class="title-box" :style="`background-color: ${caseStudy.header.color}`" >
      <div class="title-content-wrapper">
        <div class="title-text-wrapper">
          <div class="title-text-wrapper-wrapper">
            <span class="title-text">This is&nbsp;</span>
            <span class="title-text" :style="`color: #${caseStudy.colors.accent}`">{{ caseStudy.header.title }}'s&nbsp;</span>
            <span class="title-text">story.</span>
          </div>
          <div class="title-subtext">
            <div class="title-product-name">{{ caseStudy.header['product-name']}}</div> 
            <div class="title-description">{{ caseStudy.header.description }}</div>
          </div>
        </div>
        <img class="title-image" :src="imageUrl" />
      </div>
    </div>

    <div class="content">
      <SectionWrapper v-for="items in sections" :key="JSON.stringify(items)"
        :color="items.colored ? '#' + caseStudy.colors['accent-light'] : items.color" :icon="items.icon">
        <SectionTitle v-if="items.title" :color="items['text-color'] ?? `#${caseStudy.colors.accent}`" :content="items.title" />
        <div class="section-content">
          <DynamicComponent :items="items.data" :colors="caseStudy.colors" />
        </div>

      </SectionWrapper>
    </div>

    <div class="footer-container">
      <div class="footer">
        <div class="footer-title">Let's write together!</div>
        <div class="links">
          <div class="social-links">
          <a class="footer-social-link" href="https://www.linkedin.com/in/anikavaishampayan/" target="_blank">LinkedIn↗</a>
          <a class="footer-social-link" href="https://medium.com/mhci-x-princeton-capstone-2024" target="_blank">Medium↗</a>
          <a class="footer-social-link" href="mailto:anika.vaishampayan@gmail.com">Email↗</a>
        </div>
        <div class="internal-links">
          <div><RouterLink class="footer-internal-link" to="/about">About</RouterLink></div>
          <div><RouterLink class="footer-internal-link" to="/cases/SLZ">Smart Loading Zones (Vishal)</RouterLink></div>
          <div><RouterLink class="footer-internal-link" to="/cases/PNC">RetireReady (Maria & Romana)</RouterLink></div>
          <div><RouterLink class="footer-internal-link" to="/cases/Princeton">TigerData (Catelyn)</RouterLink></div>
        </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bottom-text-container">
    <div class="bottom-text">
        Crafted with countless code commits + endless calls with the incredibly talented
        <a class="sahil-link" href="https://www.linkedin.com/in/sahil-sachin-gupte/" target="_blank">Sahil Gupte</a> 🙌🏼
    </div>
  </div>
</template>

<script setup lang="ts">


import DynamicComponent from '@/components/DynamicComponent.vue'
import SectionTitle from '@/components/SectionTitle.vue';
import SectionWrapper from '@/components/SectionWrapper.vue'
import { computed } from 'vue';
import { RouterLink } from 'vue-router'

const props = defineProps<{ caseStudy: CaseStudy }>()

const caseStudy = computed(() => props.caseStudy) 
const sections = computed(() => props.caseStudy.sections)

const imageUrl = computed(() => {
  return new URL(`../assets/${props.caseStudy.header.image}`, import.meta.url).toString()
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

.title-text-wrapper-wrapper {
  display: flex;
}

.footer-container{
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #f9f9f9;
  color: #000000;
}

.footer{
  width: 1000px;
  margin: auto
}

.footer-title{
  font-size: 34px;
  font-weight: 600;
  margin-bottom: 30px;
}

.footer-social-link{
  text-decoration: underline;
  text-underline-offset: 8px;
  font-weight: 500;
  margin-right: 40px;
}

.footer-internal-link{
  color: rgb(160, 159, 159)
}

.links{
  display: flex;
  justify-content: space-between;
}
.social-links{
  width:50%;
}
.internal-links{
  width:50%;
  margin:auto;
}

.bottom-text-container{
    padding-bottom: 5px;
    background-color: #f9f9f9;
}

.bottom-text{
    width: 1200px;
    text-align: center;
    color: #474747;
    font-size: 10px;
}

.sahil-link{
    text-decoration: underline;
    text-underline-offset: 3px;
    color:#697e65;
}

</style>