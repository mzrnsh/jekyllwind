# Jekyllwind: a Jekyll + Tailwind CSS boilerplate

![Jekyll + Tailwind CSS](https://mzrn.sh/assets/uploads/jekyll-tailwindcss.png)

This boilerplate is based on the following [blog post](https://mzrn.sh/2022/04/09/starting-a-blank-jekyll-site-with-tailwind-css-in-2022/). If you run into any
issues during setup, try to follow the steps laid out in there, it may help.

## Installation

### 1. Download the boilerplate
Create a directory for your project and download latest Jekyllwind in it:

```shell
mkdir YOUR_PROJECT && cd YOUR_PROJECT
curl -L https://codeload.github.com/mzrnsh/jekyllwind/tar.gz/refs/tags/v1.0.0 | tar -xz --strip-components=1
```

Alternatively, you can get the boilerplate from the GitHub UI:

- Option 1: download the [latest release](https://github.com/mzrnsh/jekyllwind/releases/latest) and unzip in your project directory
- Option 2: download the repository as zip, unzip somewhere, and copy the contents of the `dist/` folder to your project directory

### 2. Install Ruby gems and Node packages
Open your terminal, `cd` to your project root, and run the following commands:

```shell
bundle
yarn
```

**Note for npm users:** If you prefer installing packages via npm instead of yarn, replace `yarn.lock` with `package-lock.json` on line 15 in `_config.yml` file.

That's it, you are ready 🎉


## Contribution

Feel free to send PRs or beers 🙌

## License
MIT
