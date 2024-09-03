<script setup lang="ts">
import { inject, computed, provide } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

provide('navColor', '#ffffff')
const navColor = computed(() => inject('navColor'))

</script>

<template>
  <header>
    <div class="wrapper">
      <div>{{ navColor }}</div>
      <nav class="nav">
        <RouterLink activeClass="nav-active" to="/">Work</RouterLink>
        <RouterLink activeClass="nav-active" to="/about">About</RouterLink>
        <RouterLink activeClass="nav-active" to="/resume">Resume</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.wrapper {
  height: 100px;
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
  font-size: 20px;
  font-weight: 500;
}

.nav-active {
  text-decoration: underline;
  text-underline-offset: 8px;
}
</style>
