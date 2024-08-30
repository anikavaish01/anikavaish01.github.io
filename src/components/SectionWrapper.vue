<template>
    <div class="section"
        :style="`background-color: ${color}; padding-top: ${color ? 85 : 0}px; padding-bottom: ${color ? 85 : 0}px`">
        <ImageWrapper class="section-image" v-if="icon" :image="icon" />
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import ImageWrapper from './ImageWrapper.vue';
</script>

<script lang="ts">
export default {
    props: {
        color: String,
        icon: String
    }
}
</script>

<style lang="scss">
.section {
    position: relative;
    margin-top: 90px;
}

.section-image {
    position: absolute;
    left: calc((100vw - min(1000px, 100vw - 100px)) / 2);
    transform: translateY(-50%) translateX(-50%);
    top: 0;
}
</style>

<style>
.section:first-child  {
  margin-top: 0px !important;
}
</style>