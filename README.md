# backlot-city
Source code for Backlot City's docs. 

## Docusaurus
This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Development
`npm install`/`npm start` -- see the [Installation Page](https://docusaurus.io/docs/installation) for more help. Pull requests welcomed.

### Deployment
Locally, `npm run build` & `npm run serve`. Repo auto deploys using [GitHub Workflows](.github/workflows/deploy.yml) to [backlot.city](https://backlot.city/).

#### Redirects
This website builds with the [client-redirects](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-client-redirects) plugin. Our redriects:
- `/discord` @ [b038abe](https://github.com/kchaney1508/backlot.city/commit/b038abedb1888b61329be2891bcef6ab1073f262)

### [License](./LICENSE)
    MIT License
    
    Copyright (c) 2024 KC1508
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
