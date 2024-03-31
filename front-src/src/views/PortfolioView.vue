<script setup lang="ts">
import SocialMedia from "../components/SocialMedia.vue";
import ExperienceCard from "../components/ExperienceCard.vue";
import ProjectCard from "../components/ProjectCard.vue";
</script>

<template>
  <header>
    <h1>Name Surname</h1>
    <h2>Fullstack Software Engineer</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    <div class="socials">
      <SocialMedia />
      <SocialMedia />
      <SocialMedia />
      <SocialMedia />
      <SocialMedia />
    </div>
  </header>
  <div class="main">
    <section id="about">
      <div class="about">
        <h2>About</h2>
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
        <h2>Experience</h2>
        <div class="experience-list">
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
      </div>
    </section>
    <section id="projects">
      <div class="projects">
        <h2>Projects</h2>
        <div class="project-list">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
header > h1 {
  font-weight: 700;
  letter-spacing: -0.025em;
  font-size: 2.25rem;
  line-height: 2.5rem;
}

header > h2 {
  font-size: 1.15rem;
  line-height: 2rem;
}

.socials {
  display: flex;
}

section h2 {
  font-size: 0.9rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  margin-top: 5rem;
  margin-bottom: 2rem;
}
</style>
