<template>
    <div class="callout">{{ content }}</div>
</template>

<script lang="ts">
    export default {
        props: {
            content: String
        }
    }
</script>

<style scoped>
.callout {
  font-size: 18px;
}
</style>