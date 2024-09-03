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
                <img class="header-image" src="../assets/images/HandShakeVector.svg" />
            </div>
        </div>
    </div>

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
    background-color: #f6faf6;
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
    padding-top: 80px;
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

.case-study-link {
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    width: 1200px;
    justify-content: space-between;
    height: 600px;
    background-color: #fafafa;
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
</style>
