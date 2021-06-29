<template>
  <Layout>
    <div class="project">
      <div class="container project-container">
        <div class="project-header">
          <h1 class="project-title">{{ $page.project.title }}</h1>
          <div class="project-meta">
            <div class="project-author">
              <span class="label">Categories</span>
              <span
                class="author-name"
                v-for="category in $page.project.categories"
                :key="category.title"
              >
                {{ category.title }}
              </span>
            </div>
            <div class="project-date">
              <span class="label">year</span>
              <div>{{ moment($page.project.created_at).format("YYYY") }}</div>
            </div>
          </div>
        </div>
        <div
          class="project-content"
          v-html="mdToHtml($page.project.content)"
        ></div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  project: strapiProject (id: $id) {
    id
    title
    created_at
    content
    categories {
        title
    }
  }
}
</page-query>

<script>
import moment from "moment";

export default {
  name: "projectTemplate",
  data() {
    return {
      moment,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}
.project-container {
  max-width: 840px;
}
.project-header {
  padding: 2rem 0 4rem;
}
.project-title {
  font-size: 4rem;
  margin: 0 0 4rem;
  padding: 0;
}
.project-meta {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.project-author {
  margin-right: 4rem;
}
.project-date {
  margin-right: 4rem;
}
.project-time {
  margin: 0;
}
.label {
  display: block;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
</style>