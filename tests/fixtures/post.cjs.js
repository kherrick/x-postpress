module.exports = [
  {
    id: 1,
    date: '1970-01-01T00:00:00',
    date_gmt: '1970-01-01T00:00:00',
    guid: {
      rendered: 'http://content.example.com/?p=1'
    },
    modified: '1970-01-01T00:00:00',
    modified_gmt: '1970-01-01T00:00:00',
    slug: 'example',
    status: 'publish',
    type: 'post',
    link: 'https://content.example.com/1970/01/01/example/',
    title: {
      rendered: 'Example!'
    },
    content: {
      rendered:
        '<p>Welcome to <a href="http://example.com/">Example</a>. This is your first post. Edit or delete it, then start blogging!</p>\n',
      protected: false
    },
    excerpt: {
      rendered: '<p>Welcome to Example. This is your first post. Edit or delete it, then start blogging!</p>\n',
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
          href: 'https://content.example.com/wp-json/wp/v2/posts/1'
        }
      ],
      collection: [
        {
          href: 'https://content.example.com/wp-json/wp/v2/posts'
        }
      ],
      about: [
        {
          href: 'https://content.example.com/wp-json/wp/v2/types/post'
        }
      ],
      author: [
        {
          embeddable: true,
          href: 'https://content.example.com/wp-json/wp/v2/users/1'
        }
      ],
      replies: [
        {
          embeddable: true,
          href: 'https://content.example.com/wp-json/wp/v2/comments?post=1'
        }
      ],
      'version-history': [
        {
          count: 0,
          href: 'https://content.example.com/wp-json/wp/v2/posts/1/revisions'
        }
      ],
      'wp:attachment': [
        {
          href: 'https://content.example.com/wp-json/wp/v2/media?parent=1'
        }
      ],
      'wp:term': [
        {
          taxonomy: 'category',
          embeddable: true,
          href: 'https://content.example.com/wp-json/wp/v2/categories?post=1'
        },
        {
          taxonomy: 'post_tag',
          embeddable: true,
          href: 'https://content.example.com/wp-json/wp/v2/tags?post=1'
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
