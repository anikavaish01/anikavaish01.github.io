<template>
    <h1 class="title">{{ title }}</h1>
</template>

<script lang="ts">
    export default {
        props: {
            title: String
        }
    }
</script>

<style scoped>
.title {
  padding-left: 13px;
  font-size: 36px;
  font-weight: 900;
  border-left: 9px solid #6295FA;
  margin-bottom: 58px;
}
</style>