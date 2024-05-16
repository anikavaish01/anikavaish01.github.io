<template>
    <div class="quote-wrapper">
        <img class="quote-icon" :src="quotes" />
        <div class="quote">{{ content }}</div>
    </div>
</template>

<script setup lang="ts">
const quotes = new URL(`../assets/quotes.svg`, import.meta.url).toString()
const {content} = defineProps({
    content: String
})
    
</script>

<style scoped>

.quote-wrapper {
    display: flex;
    padding-left: 20px;
    padding-right: 100px;
    margin-top: 30px;
    margin-bottom: 30px;
}

.quote-icon {
    margin-right: 10px;
    align-self: start;
}

.quote {
  font-size: 20px;
  font-weight: 600;
  color: #999999;
}
</style>