const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/alex/kurs/bookredactor/.docz/.cache/dev-404-page.js"))),
  "component---readme-md": hot(preferDefault(require("/home/alex/kurs/bookredactor/README.md"))),
  "component---src-components-chapter-list-chapter-list-mdx": hot(preferDefault(require("/home/alex/kurs/bookredactor/src/components/ChapterList/ChapterList.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/alex/kurs/bookredactor/.docz/src/pages/404.js")))
}

