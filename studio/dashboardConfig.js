export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '6050f02d5f3c350e6c20b181',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-yco8uke5',
                  apiId: '48a2030e-c4ea-4e75-a1c4-48779b6dc5bf'
                },
                {
                  buildHookId: '6050f02d5f3c350dc320b2be',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ayo5h7o5',
                  apiId: '4052e35b-d80e-4f81-9ac5-52da181594b4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mikebcbc/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ayo5h7o5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
