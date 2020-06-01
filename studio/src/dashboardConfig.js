export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ed49a2402b14910bab5890b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-r2th4r6w',
                  apiId: '8fad71af-e7ac-4c14-b7bf-b1fb5b09f9ab'
                },
                {
                  buildHookId: '5ed49a2477d227913d3794e6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-fmhqpdbh',
                  apiId: '1fc04165-e161-4faf-b1b8-846bdffe6e46'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BanuPrashanth/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-fmhqpdbh.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
