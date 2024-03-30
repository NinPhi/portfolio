<script setup lang="ts">
import SocialMedia from "../components/SocialMedia.vue";
</script>

<template>
  <div class="container">
    <div class="general">
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
    </div>
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
          <div class="experience-card">
            <p>Mar 2023 - Present</p>
            <span>Position - Company</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              tempore repudiandae veritatis doloremque! Tempore quas iusto
              perferendis eius minima praesentium eos provident, voluptatem
              fugiat ea officia odio accusantium blanditiis doloremque.
            </p>
          </div>
          <div class="experience-card">
            <p>Mar 2023 - Present</p>
            <span>Position - Company</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              tempore repudiandae veritatis doloremque! Tempore quas iusto
              perferendis eius minima praesentium eos provident, voluptatem
              fugiat ea officia odio accusantium blanditiis doloremque.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="projects">
      <div class="projects">
        <h2>Projects</h2>
        <div class="projects-list">
          <div class="project-card">
            <div class="thumbnail"></div>
            <span>Project Title</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus est ab cupiditate explicabo deleniti blanditiis
              corporis! Aliquam dolore aspernatur dolores quam, voluptatem atque
              repudiandae adipisci fugiat, iure dolor iste harum.
            </p>
          </div>
          <div class="project-card">
            <div class="thumbnail"></div>
            <span>Project Title</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus est ab cupiditate explicabo deleniti blanditiis
              corporis! Aliquam dolore aspernatur dolores quam, voluptatem atque
              repudiandae adipisci fugiat, iure dolor iste harum.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.socials {
  display: flex;
}

.thumbnail {
  width: 200px;
  height: 120px;
  background-color: black;
}
</style>
