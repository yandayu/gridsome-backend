// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['project', 'journal', 'categories'],
        singleTypes: ['basic-info']
      },
    },
  ],
  templates: {
    StrapiProject: [
      {
        path: '/project/:id',
        component: './src/templates/Project.vue'
      }
    ],
    StrapiJournal: [
      {
        path: '/journal/:id',
        component: './src/templates/Journal.vue'
      }
    ]
  }
};
