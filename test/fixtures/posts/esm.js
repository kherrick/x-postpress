export default [
  {
    id: 1,
    date: '2017-05-23T06:25:50',
    date_gmt: '2017-05-23T06:25:50',
    guid: {
      rendered: 'http://demo.wp-api.org/?p=1'
    },
    modified: '2017-05-23T06:25:50',
    modified_gmt: '2017-05-23T06:25:50',
    slug: 'hello-world',
    status: 'publish',
    type: 'post',
    link: 'https://demo.wp-api.org/2017/05/23/hello-world/',
    title: {
      rendered: 'Hello world!'
    },
    content: {
      rendered:
        '<p>Welcome to <a href="http://wp-api.org/">WP API Demo Sites</a>. This is your first post. Edit or delete it, then start blogging!</p>\n',
      protected: false
    },
    excerpt: {
      rendered:
        '<p>Welcome to WP API Demo Sites. This is your first post. Edit or delete it, then start blogging!</p>\n',
      protected: false
    },
    author: 1,
    featured_media: 0,
    comment_status: 'open',
    ping_status: 'open',
    sticky: false,
    template: '',
    format: 'standard',
    meta: [],
    categories: [1],
    tags: [],
    _links: {
      self: [
        {
          href: 'https://demo.wp-api.org/wp-json/wp/v2/posts/1'
        }
      ],
      collection: [
        {
          href: 'https://demo.wp-api.org/wp-json/wp/v2/posts'
        }
      ],
      about: [
        {
          href: 'https://demo.wp-api.org/wp-json/wp/v2/types/post'
        }
      ],
      author: [
        {
          embeddable: true,
          href: 'https://demo.wp-api.org/wp-json/wp/v2/users/1'
        }
      ],
      replies: [
        {
          embeddable: true,
          href: 'https://demo.wp-api.org/wp-json/wp/v2/comments?post=1'
        }
      ],
      'version-history': [
        {
          count: 0,
          href: 'https://demo.wp-api.org/wp-json/wp/v2/posts/1/revisions'
        }
      ],
      'wp:attachment': [
        {
          href: 'https://demo.wp-api.org/wp-json/wp/v2/media?parent=1'
        }
      ],
      'wp:term': [
        {
          taxonomy: 'category',
          embeddable: true,
          href: 'https://demo.wp-api.org/wp-json/wp/v2/categories?post=1'
        },
        {
          taxonomy: 'post_tag',
          embeddable: true,
          href: 'https://demo.wp-api.org/wp-json/wp/v2/tags?post=1'
        }
      ],
      curies: [
        {
          name: 'wp',
          href: 'https://api.w.org/{rel}',
          templated: true
        }
      ]
    }
  }
]
