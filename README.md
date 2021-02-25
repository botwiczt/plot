# Portfolio for developers

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/settings?s=https%3A%2F%2Fgithub.com%2Fsmakosh%2Fgatsby-portfolio-dev&c=1&env=GATSBY_PORTFOLIO_GITHUB_TOKEN%2CGATSBY_PORTFOLIO_FORMIK_ENDPOINT%2CGATSBY_PORTFOLIO_RECAPTCHA_KEY&envDescription=Required%20to%20fetch%20your%20repositories%20from%20GitHub&envLink=https://github.com/smakosh/gatsby-portfolio-dev&framework=nextjs)

[![Powered by Vercel](./powered-by-vercel.svg)](https://vercel.com?utm_source=smakosh)

## Theme

[Gatsby-theme-portfolio](https://github.com/smakosh/gatsby-theme-portfolio)

## Features

- Eslint/Prettier configured
- Scores 100% on a11y / Performance / PWA / SEO
- PWA (desktop & mobile)
- Easy to customize
- Nice project structure
- Amazing illustrations by [Undraw.co](https://undraw.co)
- Tablet & mobile friendly
- Continuous deployment with [Vercel](https://vercel.com/?utm_source=smakosh)
- Or with Netlify, check [Netlify branch](https://github.com/smakosh/gatsby-portfolio-dev/tree/netlify)
- Can be deployed with one click
- Functional components with ~~Recompose~~ React Hooks! ~~ready to migrate to React hooks!~~
- Fetches your Github pinned projects with most stars (You could customize this if you wish)
- One click deployment to Vercel

## Structure

```bash
.
├── data
│   └── config              # SEO related tags
├── src
│   └── assets              # Assets
│   │   │── icons             # icons
│   │   │── illustrations     # illustrations from (undraw.co)
│   │   └── thumbnail         # cover of your website when it's shared to social media
│   ├── components          # Components
│   │   │── common            # Common components
│   │   │── landing           # Components used on the landing page
│   │   └── theme             # Header & Footer
│   └── pages               # Pages
└── static                  # favicon & Netlify redirects
```

## Prerequisites

### Locally

1. Create an account at [Formik](https://formik.com/?utm_source=smakosh)
2. Install [Yarn](https://yarnpkg.com/en/)
4. Grab your Github token from GitHub
5. Run `cp .env.development.template .env.development`
6. Run `yarn && yarn start`

### Clean the cache

This removes the `.cache/` & `public/` folders

```bash
yarn reset
```
