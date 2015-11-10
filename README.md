# rackt.org

It's Racktastic!

This repo houses the main rackt.org site along with the documentation for any
Rackt projects. Those projects should keep their documentation in a top-level
`docs` path within their respective repos. Any documentation should be in
Markdown format and have a table of contents in their `docs/README.md` file.

## Development

We build the site using [Gatsby](https://github.com/gatsbyjs/gatsby), which
provides a [webpack](https://webpack.github.io/) server with hot reloading of
content. To develop locally with the docs, clone this repo and run these
commands:

```sh
npm install
npm start
```
Then open up [localhost:8080](http://localhost:8080/) in your browser and start
working. Any changes you make should be reflected in your browser immediately.
