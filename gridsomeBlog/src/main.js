// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt();

export default function (Vue, { router, head, isClient }) {
  Vue.mixin({
    data() {
      return {
        GRIDSOME_API_URL: process.env.GRIDSOME_API_URL
      }
    },
    methods: {
      mdToHtml(markdown) {
        return md.render(markdown);
      },
    },
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
