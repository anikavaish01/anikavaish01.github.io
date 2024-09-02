<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="nav">
        <RouterLink to="/">Work</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/resume">Resume</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.wrapper {
  height: 120px;
  background-color: #F6FAF6;
  display: flex;
}

.nav {
  align-self: center;
  width: 100%;
  display: flex;
  justify-content: end;
}

.nav a {
  margin-right: 50px;
  font-size: 24px;
  font-weight: 500;
}
</style>
