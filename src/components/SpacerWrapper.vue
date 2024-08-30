<template>
    <div class="spacer" :style="`height: ${height}`"></div>
</template>

<script lang="ts">
export default {
    props: {
        height: {
            type: String,
            default: "20px"
        },
    }
}
</script>

<style scoped>
.spacer {
    width: 100%;
    height: 20px;
}
</style>