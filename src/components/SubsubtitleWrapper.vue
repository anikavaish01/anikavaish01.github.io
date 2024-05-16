<template>
    <h2 class="subsubtitle">{{ title }}</h2>
</template>

<script lang="ts">
    export default {
        props: {
            title: String
        }
    }
</script>

<style scoped>
.subsubtitle {
  font-size: 20px;
  font-weight: 700;
  color: #034FE4;
  margin-bottom: 15px;
}
</style>