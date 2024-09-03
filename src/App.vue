<script setup lang="ts">
import { inject, computed, provide } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="nav">
        <RouterLink to="/"><img class="nav-image" src="/favicon.svg" /></RouterLink>
        <div>
          <RouterLink activeClass="nav-active" to="/">Work</RouterLink>
          <RouterLink activeClass="nav-active" to="/about">About</RouterLink>
          <a href="/resume.pdf" target="_blank">Resume</a>
        </div>
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

.home-text{
  color: #6e8270;
  font-weight:900;
}
.nav {
  align-self: center;
  width: 1200px;
  margin:auto;
  display: flex;
  justify-content: space-between;
}
.nav-image{
  width: 50px;
  height: 50px;
  object-fit: contain;
}
.nav a {
  margin-right: 50px;
  font-size: 20px;
  font-weight: 500;
}

.home-text{
  color: #6e8270;
  font-size: 24px !important;
  font-weight:700!important;
}

.nav-active {
  text-decoration: underline;
  text-underline-offset: 8px;
}
</style>
