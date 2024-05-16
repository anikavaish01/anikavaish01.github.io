<template>
    <div class="emphasis">{{ content }}</div>
</template>

<script lang="ts">
    export default {
        props: {
            content: String
        }
    }
</script>

<style scoped>
.emphasis {
  font-size: 18px;
  font-weight: 600;
}
</style>