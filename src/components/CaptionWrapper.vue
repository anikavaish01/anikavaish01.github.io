<template>
    <div class="caption">{{ content }}</div>
</template>

<script lang="ts">
    export default {
        props: {
            content: String,
        }
    }
</script>

<style scoped>
caption {
  font-size: 14px;
  font-weight: 300;
  font-style: 'italic';
}
</style>