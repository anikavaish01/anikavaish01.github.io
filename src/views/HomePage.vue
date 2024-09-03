<template>
    <div class="header-container">
        <div class="header-box">
            <div class="header-title">
                HELLO! I'M ANIKA! A MIXED-METHODS UX RESEARCHER
            </div>
            <div class="header-subtitle">
                Connecting people together, one story at a time.
            </div>
            <div class="header-image-wrapper">
                <img class="header-image" src="../assets/images/Homepage connection.svg" />
            </div>
        </div>
    </div>

    <div class="items">
        <router-link v-for="link in links" :key="link.url" class="case-study-link" :to="`cases/${link.url}`">
            <div class="left-wrapper">
                <div>
                    <img class="left-image" :src="link.image" />
                </div>
                <div class="text" :style="`color: #${link.colors.accent}`">{{ link.title }}.</div>
                <div class="sub-description">{{ link.subDescription }}</div>
                <div class="description">{{ link.description }}</div>
            </div>
            <div class="right-wrapper">
                <img class="title-image" :src="link.rightImage" />
            </div>
        </router-link>
    </div>
    <div class="footer-container">
      <div class="footer">
        <div class="footer-title">Let's create together!</div>
        <div class="links">
          <div class="social-links">
          <a class="footer-social-link" href="https://www.linkedin.com/in/anikavaishampayan/" target="_blank">LinkedIn↗</a>
          <a class="footer-social-link" href="https://medium.com/mhci-x-princeton-capstone-2024">Medium↗</a>
          <a class="footer-social-link" href="mailto:anika.vaishampayan@gmail.com">Email↗</a>
        </div>
        <div class="internal-links">
          <div><a class="footer-internal-link" href="/about">About</a></div>
          <div><a class="footer-internal-link" href="cases/SLZ">Smart Loading Zones (Vishal)</a></div>
          <div><a class="footer-internal-link" href="cases/PNC">RetireReady (Maria & Romana)</a></div>
          <div><a class="footer-internal-link" href="cases/Princeton">TigerData (Catelyn)</a></div>
        </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const { pages } = defineProps<{
    pages: Record<string, { default: CaseStudy }>;
}>();
const links = computed(() => {
    return Object.values(pages).map((v) => ({
        title: v.default.header.title,
        url: v.default.url,
        description: v.default.header.description,
        subDescription: v.default.header["product-name"],
        image: new URL(
            `../assets/${v.default.header.image}`,
            import.meta.url
        ).toString(),
        rightImage: new URL(
            `../assets/${v.default.header["prototype-image"]}`,
            import.meta.url
        ).toString(),
        colors: v.default.colors
    }));
});
</script>

<style>
.header-image-wrapper {
    display: flex;
}

.header-container {
    background-color: #e1eae2;
}

.header {
    margin-bottom: 50px;
}

.header-box {
    width: 1200px;
    height: 800px;
    margin: auto;
    padding-top: 200px;
}

.header-title {
    color: #6e8270;
    font-size: 16px;
}

.header-image {
    margin: auto;
}

.header-subtitle {
    font-size: 50px;
    font-weight: 900;
    width: 70%;
}

.sub-description {
    font-weight: 600;
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 15px;
}

.description {
    font-size: 16px;
}

.items{
    margin-top:100px;
}

.case-study-link {
    margin-top:50px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    width: 1200px;
    justify-content: space-between;
    height: 600px;
    background-color: #f9f9f9;
    padding-left: 100px;
    border-radius: 10px;
}

.left-wrapper {
    align-content: center;
    width: 40%;
}

.right-wrapper {
    align-content: end;
}

.text {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 20px;
}

.title-image {
    width: 100%;
}

.left-image {
    width: 150px;
}

a {
    color: inherit;
    text-decoration: none;
}

.footer-container{
  margin-top: 100px;
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #697e65;
  color: #ffffff
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
  color: rgb(225, 225, 225)
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

</style>
