<script setup lang="ts">
import PortfolioHeader from "@/components/portfolio/PortfolioHeader.vue";
import PortfolioAbout from "@/components/portfolio/PortfolioAbout.vue";
import PortfolioExperienceCard from "@/components/portfolio/PortfolioExperienceCard.vue";
import PortfolioProjectCard from "@/components/portfolio/PortfolioProjectCard.vue";

import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

const activeSection = ref<string | undefined>();

const about = ref();
const experience = ref();
const projects = ref();

useIntersectionObserver(
  [about, experience, projects],
  (entries) => {
    entries
      .filter(({ isIntersecting }) => isIntersecting)
      .forEach(({ target }) => {
        activeSection.value = target.getAttribute("section")?.valueOf();
      });
  },
  { rootMargin: "-15% 0px -50% 0px" }
);
</script>

<template>
  <div class="layout">
    <PortfolioHeader :active-section="activeSection" />
    <div class="content">
      <section id="about">
        <div ref="about" section="about"></div>
        <div class="section-subhead">
          <h2>About</h2>
        </div>
        <div class="section-content">
          <PortfolioAbout />
        </div>
      </section>
      <section id="experience">
        <div ref="experience" section="experience"></div>
        <div class="section-subhead">
          <h2>Experience</h2>
        </div>
        <div class="section-content">
          <PortfolioExperienceCard />
          <PortfolioExperienceCard />
          <PortfolioExperienceCard />
        </div>
      </section>
      <section id="projects">
        <div ref="projects" section="projects"></div>
        <div class="section-subhead">
          <h2>Projects</h2>
        </div>
        <div class="section-content">
          <PortfolioProjectCard />
          <PortfolioProjectCard />
          <PortfolioProjectCard />
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 3rem;

  padding-top: var(--wide-mode-vertical-space);
  padding-bottom: var(--wide-mode-vertical-space);
}

.section-content > :first-child {
  padding-top: 0;
  margin-top: 0;
}

.section-subhead {
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;

  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.886);
}

.section-subhead h2 {
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

@media (min-width: 1024px) {
  .layout {
    gap: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .content {
    width: 50%;
    gap: 6.5rem;
  }

  .section-subhead {
    display: none;
  }
}
</style>
