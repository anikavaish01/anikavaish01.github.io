<template>
    <div class="header-container">
    <div class="header">
            <div class="header-title">HELLO! I'M ANIKA! A MIXED-METHODS UX RESEARCHER</div>
            <div class="header-subtitle">Connecting people together, one story at a time.</div>
            <div class="header-image-wrapper">
                <img class="header-image" src="../assets/images/HandShakeVector.svg" />
            </div>
    </div>
</div>

    <router-link v-for="link in links" :key="link.url" class="case-study-link" :to="`cases/${link.url}`">
        <div class="left-wrapper">
            <div>
                <img class="left-image" :src="link.image" />
            </div>
            <div class="text">{{ link.title }}.</div>
            <div class="sub-description">{{ link.subDescription }}</div>
            <div class="description">{{ link.description }}</div>
        </div>
        <div class="right-wrapper">
            <img class="title-image" :src="link.rightImage" />
        </div>
    </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const { pages } = defineProps<{ pages: Record<string, {default: CaseStudy}> }>()
const links = computed(() => {
    return Object.values(pages).map(v => ({title: v.default.header.title, url: v.default.url, description: v.default.header.description, subDescription: v.default.header["product-name"], image: new URL(`../assets/${v.default.header.image}`, import.meta.url).toString(), rightImage: new URL(`../assets/${v.default.header["prototype-image"]}`, import.meta.url).toString()}))
})

</script>

<style>

.header-image-wrapper {
    display: flex;
}

.header-container {
    background-color: #F6FAF6;
    width: 100%;
    padding-bottom: 100px;
    margin-bottom: 100px;
}

.header {
    padding-top: 100px;
    width: 60%;
    margin-left: 100px;
}

.header-title {
    color: #6E8270;
    font-size: 16px;
}

.header-image {
    margin-left: auto;
}

.header-subtitle {
    font-size: 50px;
    font-weight: 900;
}

.sub-description {
    font-weight: 600;
    font-size: 20px;
}

.description {
    font-size: 20px;
}

.case-study-link {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    width: 95%;
    justify-content: space-between;
    height: 600px;
    margin-bottom: 75px;
    background-color: #FAFAFA;
    padding-left: 100px;
    border-radius: 10px;
}

.left-wrapper {
    align-content: center;
}

.right-wrapper {
    align-content: end;
}

.text {
    font-size: 50px;
    font-weight: 900;
    flex: 0 0 60%;
}

.title-image {
    width: 100%
}

.left-image {
    width: 150px;
}

a {
    color: inherit;
    text-decoration: none;
}
</style>