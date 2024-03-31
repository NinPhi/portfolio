<script setup lang="ts">
import PortfolioHeader from "@/components/portfolio/PortfolioHeader.vue";
import PortfolioExperienceCard from "@/components/portfolio/PortfolioExperienceCard.vue";
import PortfolioProjectCard from "@/components/portfolio/PortfolioProjectCard.vue";
</script>

<template>
  <PortfolioHeader />
  <div class="main">
    <section id="about">
      <div class="about">
        <div class="sticky-subheader">
          <h2>About</h2>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga porro
          ducimus repellendus explicabo velit natus dolorem dignissimos sint!
          Odit adipisci accusamus culpa expedita voluptate!
        </p>
        <p>
          Vero assumenda qui est omnis quod! Illo consequatur beatae modi odit
          minima quo at reiciendis quis. Accusantium, odit vel. Cumque similique
          veniam id sit earum. Nihil omnis inventore iusto iste? Ad ullam iure
          doloremque. Facere, quasi. Architecto omnis est qui hic quasi, culpa
          suscipit deleniti soluta sunt consequatur perspiciatis quidem non
          labore magni enim eius odio iste magnam nobis nesciunt!
        </p>
        <p>
          A dolorem magni quod tempora autem! Laborum necessitatibus dignissimos
          facilis ut animi, obcaecati molestias esse officia commodi adipisci
          consequatur tenetur vel fuga nobis quis iure quasi at ad amet sed?
        </p>
      </div>
    </section>
    <section id="experience">
      <div class="experience">
        <div class="sticky-subheader">
          <h2>Experience</h2>
        </div>
        <div class="experience-list">
          <PortfolioExperienceCard />
          <PortfolioExperienceCard />
          <PortfolioExperienceCard />
        </div>
      </div>
    </section>
    <section id="projects">
      <div class="projects">
        <div class="sticky-subheader">
          <h2>Projects</h2>
        </div>
        <div class="project-list">
          <PortfolioProjectCard />
          <PortfolioProjectCard />
          <PortfolioProjectCard />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .main {
    margin-top: 6rem;
    margin-bottom: 6rem;
  }

  .main section {
    padding-bottom: 5rem;
  }

  section .sticky-subheader {
    opacity: 0;
    height: 0;
    margin: 0rem;
    padding: 0rem;
    overflow: hidden;
  }
}

section {
  padding-bottom: 3rem;
}

.sticky-subheader {
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;

  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.886);
}

.sticky-subheader h2 {
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
</style>
