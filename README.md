# vDesign embed templates

Starter projects for the vDesign embed, each opened in StackBlitz from
https://getv.design/docs/embed/examples/.

| Folder | What it is |
| ------ | ---------- |
| `cdn`  | Plain HTML. No build step: one page and a module that imports the embed from jsDelivr. |
| `vite` | A Vite app that installs the package from npm and loads the editor on demand. |

These folders are generated from `docs-site/templates/` in the vDesign repository by
`npm run templates --prefix docs-site -- <dir>`. Change them there, not here.
