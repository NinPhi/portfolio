<script setup lang="ts">
import { computed } from "vue";
import PortfolioHeaderSocialMedia from "./PortfolioHeaderSocialMedia.vue";
import { RouterLink } from "vue-router";

const props = defineProps<{ activeSection: string | undefined }>();

const aboutActive = computed(
  () => props.activeSection?.toLowerCase() === "about"
);

const experienceActive = computed(
  () => props.activeSection?.toLowerCase() === "experience"
);

const projectsActive = computed(
  () => props.activeSection?.toLowerCase() === "projects"
);
</script>

<template>
  <header>
    <div>
      <h1 class="fullname">Name Surname</h1>
      <h2 class="profession">Fullstack Software Engineer</h2>
      <p class="description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
      <nav class="side-nav" role="navigation">
        <RouterLink
          :to="{ name: 'portfolio', hash: '#about' }"
          :class="{ active: aboutActive }"
          class="side-nav-link"
        >
          <strong class="side-nav-indicator transition"></strong>
          <strong class="side-nav-text">About</strong>
        </RouterLink>
        <RouterLink
          :to="{ name: 'portfolio', hash: '#experience' }"
          :class="{
            active: experienceActive,
          }"
          class="side-nav-link"
        >
          <strong class="side-nav-indicator transition"></strong>
          <strong class="side-nav-text">Experience</strong>
        </RouterLink>
        <RouterLink
          :to="{ name: 'portfolio', hash: '#projects' }"
          :class="{ active: projectsActive }"
          class="side-nav-link"
        >
          <strong class="side-nav-indicator transition"></strong>
          <strong class="side-nav-text">Projects</strong>
        </RouterLink>
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
header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-top: var(--wide-mode-vertical-space);
  padding-bottom: var(--wide-mode-vertical-space);
}

.fullname {
  font-weight: 700;
  letter-spacing: -0.025em;
  font-size: 2.25rem;
  line-height: 2.25rem;
  margin-top: 0rem;
  margin-bottom: 1rem;
}

.profession {
  margin-top: 0.2rem;
  font-size: 1.15rem;
}

.description {
  line-height: 1.5;
  max-width: 20rem;
}

.side-nav {
  display: none;
  padding-top: 3rem;
}

.side-nav-link {
  display: flex;
  align-items: center;

  cursor: pointer;
  width: fit-content;
  padding: 0.5rem;
  color: black;
  opacity: 0.5;
}

.side-nav-text {
  font-size: 0.8rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.side-nav-indicator {
  height: 2px;
  width: 2rem;
  margin-right: 1rem;
  background-color: black;
}

.active,
.side-nav-link:hover {
  opacity: 1;
}

.active .side-nav-indicator,
.side-nav-link:hover .side-nav-indicator {
  width: 4rem;
}

.transition {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
}

.social-media-panel {
  display: flex;
  padding-top: 3rem;
}

@media (min-width: 640px) {
  header .fullname {
    font-size: 3rem;
  }
}

@media (min-width: 1024px) {
  header {
    width: 50%;
    max-height: 100vh;
    position: sticky;
    top: 0;
  }

  .side-nav {
    display: flex;
    flex-direction: column;
  }
}
</style>
