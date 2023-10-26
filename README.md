# Jekyllwind: a Jekyll + Tailwind CSS boilerplate

![Jekyll + Tailwind CSS](https://mzrn.sh/assets/uploads/jekyll-tailwindcss.png)

This boilerplate is based on the following [blog post](https://mzrn.sh/2022/04/09/starting-a-blank-jekyll-site-with-tailwind-css-in-2022/). If you run into any
issues during setup, try to follow the steps laid out in there, it may help.

## Installation

### 1. Download the boilerplate
Create a directory for your project and download the latest Jekyllwind in it.

A fancy way to do it is this:

```shell
mkdir YOUR_PROJECT && cd YOUR_PROJECT && git init
curl -L https://codeload.github.com/mzrnsh/jekyllwind/tar.gz/refs/tags/v1.0.0 | tar -xz --strip-components=1
```

This is tested and works on macOS Monterey. If it doesn't work as expected on your machine, you can take an alternative route and download the boilerplate manually from the GitHub UI:

- Option 1: get the [latest release](https://github.com/mzrnsh/jekyllwind/releases/latest) and unzip in your project directory
- Option 2: download the repository as zip, unzip somewhere, and copy the contents of the `dist/` folder into your project directory

### 2. Install Ruby gems and Node packages
In your terminal `cd` to the project directory and run the following commands:

```shell
bundle
yarn
```

**Note for npm users:** If you prefer installing packages via npm instead of yarn, open the `_config.yml` file in your editor and replace `yarn.lock` with `package-lock.json` on line 15.

That's it, you are ready 🎉

## Deployment tips

### 1. Netlify

You may need to alter the default build command to `JEKYLL_ENV=production bundle exec jekyll build`. More details available [here](https://mzrn.sh/2022/04/09/starting-a-blank-jekyll-site-with-tailwind-css-in-2022/#61-netlify).

### 2. GitHub Pages

Since this boilerplate uses PostCSS, it won't work on GitHub Pages out of box. Instead, you will need to use GitHub Actions. Step-by-step instructions available [here](https://mzrn.sh/2023/10/26/how-to-use-tailwind-css-with-jekyll-on-github-pages/).

## Contribution

Feel free to send PRs or beers 🙌

## License
MIT
