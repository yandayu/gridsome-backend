<template>
  <Layout>
    <div class="journal">
      <div class="container journal-container">
        <div class="journal-header">
          <h1 class="journal-title">{{ $page.journal.title }}</h1>
          <div class="journal-meta">
            <div class="journal-author">
              <span class="label">Author</span>
              <span class="author-name">Nichlas W. Andersen</span>
            </div>
            <div class="journal-date">
              <span class="label">Date</span>
              <div>{{ moment($page.journal.created_at).format("YYYY") }}</div>
            </div>
            <div class="journal-time">
              <span class="label">Time</span>
              <span>{{ $page.journal.updated_at }}</span>
            </div>
          </div>
        </div>
        <div
          class="journal-content"
          v-html="mdToHtml($page.journal.content)"
        ></div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  journal: strapiJournal (id: $id) {
    title
    content
    created_at
    updated_at
  }
}
</page-query>

<script>
import moment from "moment";

export default {
  name: "journalTempalte",
  data() {
    return {
      moment,
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}
.journal-container {
  max-width: 840px;
}
.journal-header {
  padding: 2rem 0 4rem;
}
.journal-title {
  font-size: 4rem;
  margin: 0 0 4rem;
  padding: 0;
}
.journal-meta {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.journal-author {
  margin-right: 4rem;
}
.journal-date {
  margin-right: 4rem;
}
.journal-time {
  margin: 0;
}
.label {
  display: block;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
</style>