<template>
    <div class="bullets">
        <ul>
            <li v-for="bullet in data" :key="bullet.toString()">{{ bullet }}</li>
        </ul>
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            data: Array<String>
        }
    }
</script>

<style scoped>
.bullets {
    padding-left: 70px; 
    font-size: 18px;
}

.bullets * {
    line-height: 40px;
}
</style>