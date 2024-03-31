<script setup lang="ts">
import PortfolioHeaderSocialMedia from "./PortfolioHeaderSocialMedia.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <div>
      <h1 class="fullname">Name Surname</h1>
      <h2 class="profession">Fullstack Software Engineer</h2>
      <p class="description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
      <nav class="side-navigation" role="navigation">
        <RouterLink :to="{ path: '/', hash: '#about' }">About</RouterLink>
        <RouterLink :to="{ path: '/', hash: '#experience' }"
          >Experience</RouterLink
        >
        <RouterLink :to="{ path: '/', hash: '#projects' }">Projects</RouterLink>
      </nav>
    </div>
    <div class="social-media-panel">
      <PortfolioHeaderSocialMedia />
      <PortfolioHeaderSocialMedia />
      <PortfolioHeaderSocialMedia />
      <PortfolioHeaderSocialMedia />
      <PortfolioHeaderSocialMedia />
    </div>
  </header>
</template>

<style scoped>
@media (min-width: 640px) {
  header .fullname {
    font-size: 3rem;
  }
}

@media (min-width: 1024px) {
  header {
    max-height: 100vh;
    padding-top: 6rem;
    padding-bottom: 6rem;
    position: sticky;
    top: 0;
  }

  header .side-navigation {
    display: flex;
    flex-direction: column;
  }
}

header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.fullname {
  font-weight: 700;
  letter-spacing: -0.025em;
  font-size: 2.25rem;
  margin-top: 0rem;
  margin-bottom: 1rem;
}

.profession {
  font-size: 1.15rem;
}

.side-navigation {
  display: none;
  padding-top: 5rem;
}

.side-navigation a {
  cursor: pointer;
  padding-top: 0.5rem;
  width: fit-content;

  font-size: 0.9rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgb(171, 171, 171);
}

.side-navigation a:hover {
  color: black;
}

.side-navigation .router-link-active:focus,
.side-navigation .router-link-exact-active:focus {
  color: black;
}

.social-media-panel {
  display: flex;
  padding-top: 1rem;
}
</style>
