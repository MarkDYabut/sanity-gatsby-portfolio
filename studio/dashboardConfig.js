export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f33278a84171af8dfc0b07f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-f8t4ro9p',
                  apiId: 'e9daf7d8-d3e5-4e00-bc10-b3ee8322a250'
                },
                {
                  buildHookId: '5f33278a09ff2b3efae30f43',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-8ts1m3q5',
                  apiId: 'b1997596-2730-4d8b-a27c-ec585b7cc81e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MarkDYabut/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-8ts1m3q5.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
