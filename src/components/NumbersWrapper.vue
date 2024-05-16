<template>
    <div class="numbers">{{ title }}</div>
</template>

<script lang="ts">
    export default {
        props: {
            title: String
        }
    }
</script>

<style scoped>
.numbers {
  font-size: 22px;
  font-weight: 900;
  color: #034FE4
}
</style>