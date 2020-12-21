const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Bookredactor',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/home/alex/kurs/bookredactor/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Bookredactor',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/home/alex/kurs/bookredactor',
          templates:
            '/home/alex/kurs/bookredactor/node_modules/docz-core/dist/templates',
          docz: '/home/alex/kurs/bookredactor/.docz',
          cache: '/home/alex/kurs/bookredactor/.docz/.cache',
          app: '/home/alex/kurs/bookredactor/.docz/app',
          appPackageJson: '/home/alex/kurs/bookredactor/package.json',
          appTsConfig: '/home/alex/kurs/bookredactor/tsconfig.json',
          gatsbyConfig: '/home/alex/kurs/bookredactor/gatsby-config.js',
          gatsbyBrowser: '/home/alex/kurs/bookredactor/gatsby-browser.js',
          gatsbyNode: '/home/alex/kurs/bookredactor/gatsby-node.js',
          gatsbySSR: '/home/alex/kurs/bookredactor/gatsby-ssr.js',
          importsJs: '/home/alex/kurs/bookredactor/.docz/app/imports.js',
          rootJs: '/home/alex/kurs/bookredactor/.docz/app/root.jsx',
          indexJs: '/home/alex/kurs/bookredactor/.docz/app/index.jsx',
          indexHtml: '/home/alex/kurs/bookredactor/.docz/app/index.html',
          db: '/home/alex/kurs/bookredactor/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
