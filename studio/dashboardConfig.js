export default {
  widgets: [
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
                  buildHookId: '5f2ebe4ebf54e916f4719b5b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-59t1khsd',
                  apiId: 'a92d0a87-871f-4c8e-908c-816fa253e398'
                },
                {
                  buildHookId: '5f2ebe4f652dff62aef04a30',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-dskiw8eu',
                  apiId: '690c1e77-82e0-4eb9-93d3-4e03f08dedab'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jkarteaga/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-dskiw8eu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
