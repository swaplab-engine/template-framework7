# SwapLab: Framework7 Svelte Templates (Monorepo)

SwapLab acts strictly as a Digital Bridge (Trigger).

![SwapLab Certified](https://img.shields.io/badge/SwapLab-Certified-success)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Structure](https://img.shields.io/badge/Structure-Monorepo-orange)
![Framework](https://img.shields.io/badge/Framework-Framework7%20Svelte-red.svg)

This repository hosts a collection of **Framework7 (Svelte)** starter templates optimized for building high-performance hybrid mobile applications.

We have modernized, sanitized, and pre-configured these popular community templates to ensure they work seamlessly with the [SwapLab Build Service](https://swaplab.net).

## 📂 Repository Structure

This repository is structured as a monorepo containing multiple framework options and the required GitHub Actions workflows:

    framework7-svelte-main/
    ├── .github/workflows/
    │   ├── swaplab-workflow-cache.yml
    │   └── swaplab-workflow-no-cache.yml
    ├── framework7-svelte/
    ├── .gitignore
    └── README.md

## 🚀 How to Test in 30 Seconds (Upload Method)

You can test any of these templates instantly without connecting your GitHub account:

1. **Download:** Click the green **`<> Code`** button at the top of this repository and select **Download ZIP**.
2. **Extract:** Unzip the downloaded file to your computer.
3. **Select Framework:** Open the extracted folder and locate the specific template you want to use (e.g., `framework7-svelte`).
4. **Compress (Crucial Step):** Zip that specific project folder. 
   > **⚠️ IMPORTANT:** You must zip the **folder itself** (e.g., `framework7-svelte.zip`). Do not go inside the folder and zip the internal files. The root of your `.zip` archive must be the project directory.
5. **Upload:** Go to [public.swaplab.net](https://public.swaplab.net) or [private.swaplab.net](https://private.swaplab.net), upload your `.zip` file, and trigger the build.

## 📖 Documentation

For advanced usage, repository connection instructions, and workflow configurations, please refer to our official documentation:
**[https://swaplab-private-docs.pages.dev](https://swaplab-private-docs.pages.dev)**