# SwapLab: Framework7 Svelte Templates (Monorepo)

![SwapLab Certified](https://img.shields.io/badge/SwapLab-Certified-success)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Structure](https://img.shields.io/badge/Structure-Monorepo-orange)
![Framework](https://img.shields.io/badge/Framework-Framework7%20Svelte-red.svg)

This repository hosts a collection of **Framework7 (Svelte)** starter templates optimized for building high-performance hybrid mobile applications.

These templates are **Production Ready**. They come pre-configured with the necessary structure to be built instantly using **SwapLab Build Services**, supporting both **Android (APK/AAB)** and **iOS (Xcode Export)** workflows.


---

## 🎯 Supported Project Types

This engine is designed to be intelligent. It automatically detects your project structure and applies the correct build strategy.

| Project Source | Support Level | How it works |
| :--- | :--- | :--- |
| **Framework7 (CLI)** | ⭐️ **Native** | Detects `framework7.json` or F7 directory structure. builds UI assets, then compiles Native. |
| **Standard Cordova** | ✅ **Full Support** | Detects `config.xml` at the root. Builds exactly like the classic Cordova CLI. |
| **Construct 3 (Games)** | ✅ **Full Support** | Seamlessly builds C3 mobile exports. Just export your game as "Cordova" and upload. |
| **Pure Web Apps** | ⚡ **Auto-Wrap** | If you upload a plain HTML/JS/CSS project (Svelte/Vue/React) without Cordova config, the engine will **auto-initialize** a native wrapper for you. |


---

## ⚡ Quick Start: Try Without Signing In (Public)

Want to test if this works immediately? You don't need an account or a GitHub repository to start. Use our **Public Builder** for a secure, anonymous test drive.

### [🚀 Go to Public Builder (public.swaplab.net)](https://public.swaplab.net)

* **🛡️ No Sign-In Required:** We don't ask for your GitHub account or email.
* **🔒 Zero-Retention:** Upload your Zip, get your APK, and we delete your files instantly.
* **🤝 Transparent & Unlimited:** Builds are executed on our [Public Engine Runner](https://github.com/swaplab-engine/public-build-swaplab-engine/actions). It is fully audit-able and **does NOT consume** your personal GitHub Action minutes.

**How to test these templates in 30 seconds:**
1.  Click the green **<> Code** button above -> **Download ZIP**.
2.  Extract the file and open the folder of the template you want (e.g., `/framework7-svelte`).
3.  **Zip that specific folder** and upload it to [public.swaplab.net](https://public.swaplab.net).

---

## 🔐 Ready for Production? Unlock Full Power (Sign-In)

While the Public Builder is perfect for quick testing, the **Authenticated Dashboard** unlocks professional features required for app store publishing and advanced development.

**Why Sign In?**
* **✅ Release Builds (Signed APK/AAB):** Securely inject your Keystore to generate production-ready binaries signed and ready for the Google Play Store.
* **🛠️ Export Android Studio Project:** Download the fully generated native Android source code. Perfect if you want to inspect the code or compile locally.
* **🍎 Export Xcode Project:** Download the complete native iOS source code to compile on your Mac using Xcode (Essential for Apple App Store publishing).

### [👉 Go to Main Dashboard (swaplab.net)](https://swaplab.net)

---

## ⚠️ CRITICAL: Privacy & Billing Guide (Sign-In)

Before using these templates, please read these rules to ensure your code is safe and your billing is managed correctly.

### 🔒 1. Privacy Rule: Make Your Fork PRIVATE
When you fork this repository to your account, **you must change the visibility to PRIVATE** immediately to protect your source code.
* **Why?** To prevent leaking your App ID, API Keys, or proprietary app logic to the internet.
* **Compatibility:** You **do not** need a public repo to use SwapLab. Our public build images can be pulled into your **Private Repository** without any limits.

### 💰 2. Billing & Service Model
It is important to distinguish between **GitHub Costs** and **SwapLab Service Costs**.

**A. GitHub Actions Quota (Compute)**
The build process runs inside *your* GitHub account.
* **Free Accounts:** GitHub typically provides **2,000 free minutes/month**.
* **Capacity:** ~300-400 builds/month.
* **Upgrade:** If you exceed this, you pay GitHub directly via [GitHub Actions Billing](https://docs.github.com/en/billing/concepts/product-billing/github-actions).

**B. SwapLab Subscription (Orchestration)**
We offer a **Free Tier** (Unlimited Debug builds) and **Paid Tiers** (Release builds).
* **Philosophy:** Our fees are **not** for reselling GitHub minutes. They cover our physical resources (vCPU, RAM, NVMe, Storage) and security infrastructure.
* **How to Upgrade:** You can view plans and upgrade your account directly within the **SwapLab Dashboard** after signing in.
👉 **[View Pricing & Plans](https://pricing.swaplab.net)**

## 🚀 Build Support & Pricing

| Build Type | Availability |
| :--- | :--- |
| **Debug APK** | ✅ **Free Forever** (Unlimited, No Subscription) |
| **Release APK / AAB** | 🎁 **Free PROMO** (Ends Jan 1, 2026) |
| **Export Xcode (iOS)** | 🎁 **Free PROMO** (Ends Jan 1, 2026) |


> [!TIP]
> **🛡️ Security & Trial Options (Zero-Trust)**
>
> If you are hesitant about uploading your **Keystore/Signing Keys** to a cloud service, you have a safe alternative:
> * **Local Signing:** Choose **`Export Android Studio`** or **`Export Xcode`** as your build type. We will compile the native project structure for you, and you can sign the final app locally on your own machine.
> * **Plugin Devs & Testing:** Use **`Debug APK`** (Unlimited/Free). It requires no keys and is perfect for testing native functionality or evaluating the service without a subscription.

---

## 📂 Available Templates

Choose your preferred project type below. Each folder represents a complete, isolated application.

| Folder Name | Description | Framework |
| :--- | :--- | :--- |
| [`/framework7-svelte`](./framework7-svelte) | HackerNews7 Clone (Real-world App) | **F7 + Svelte** |

> **Note:** The `framework7-svelte` template is a fully functional Hacker News reader. It demonstrates advanced F7 concepts like Virtual Lists, API data fetching, and native-like navigation transitions.

> [!WARNING]
> **⛔️ CRITICAL: DO NOT DELETE THE `.github/workflows` DIRECTORY**
>
> This directory is the **digital bridge** connecting your repository to the SwapLab Service.
> * **How it works:** SwapLab acts as the **Trigger**, but the build runs on **YOUR GitHub Account** using your Action Minutes.
> * **Consequence:** Removing these files will **sever the connection**, and the Service will be **unable to trigger** the build process.


---

## 🌐 Service Compatibility

These templates are unique because they can be built on **ANY** of our platforms. Choose the engine that fits your needs:

| Builder Service | Engine Used | Best For |
| :--- | :--- | :--- |
| **[framework7.swaplab.net](https://framework7.swaplab.net)** | **Framework7 Engine** | Optimized specifically for F7 projects. Auto-detects Cordova config or injects it for pure web projects. |
| **[cordova.swaplab.net](https://cordova.swaplab.net)** | **Cordova Engine** | Standard builder. Requires a valid `config.xml` in the root. |
| **[repository.swaplab.net](https://repository.swaplab.net)** | **CI/CD Pipeline** | Automated builds triggered by git commits. |

---

## 🛡️ Security Philosophy: Freedom & Safety
At SwapLab, we believe developers should have the freedom to build without restrictions. **We do not rely on a manually managed "whitelist" of allowed plugins.** You are free to use *any* npm package or Cordova plugin required for your project.

To make this "Unlimited Ecosystem" safe, we employ a rigorous **Automated Security Gate** instead of manual reviews.

---

## ⚙️ Build Configuration Guide

SwapLab offers advanced build settings to customize your security and performance.

### 1. 🛠️ Build Provider
Select the CI/CD infrastructure to run your build process.
* **GitHub (Default):** Uses standard GitHub Actions runners.

### 2. 🛡️ Vulnerability Scan (NPM Audit)
**Status:** <span style="color:red">MANDATORY</span>
Checks your project's dependencies against the CVE database. Legacy dependencies are common sources of security leaks.

### 3. 🔍 Semgrep (SAST)
**Status:** <span style="color:red">MANDATORY</span>
Static Application Security Testing. Scans your Svelte/JS source code for insecure patterns (XSS, Injection, etc.).

### 4. 📦 Trivy (SCA)
**Status:** <span style="color:red">MANDATORY</span>
Scans third-party libraries for deep supply chain vulnerabilities.

### 5. 🔒 NPM Script Security
**Status:** Optional (Default: Off)
* **Enabled:** Adds `--ignore-scripts`.
* **Warning:** Many F7/Cordova plugins **REQUIRE** scripts to install properly. **We recommend keeping this OFF.**

### 6. 💊 Auto-Heal Vulnerabilities
**Status:** Optional (Default: Off)
* **Function:** Runs `npm audit fix` automatically.
* **Benefit:** Can fix minor dependency issues in `package.json` automatically.

### 7. 🔬 Final Artifact Scan
**Status:** Optional (Default: Off)
* **Enabled:** Runs `clamscan` (Anti-virus) on the final APK/AAB file.

---

## ⚡ How to Build

Choose the method that suits your workflow. Both options utilize **your GitHub Action minutes** for the build execution.

### Option A: Repository Builder (CI/CD Automation)
*Best for automated builds directly from your GitHub repository.*

> **Requirement:** Since this repository is a **Monorepo**, you **must** specify the project folder (e.g., `framework7-svelte`).

1.  **Create Repository:** Click **Use this template** (top right) > **Create a new repository** (Select **Private**).
2.  **Access Service:** Log in to **[repository.swaplab.net](https://repository.swaplab.net)**.
3.  **Start Build:**
    * Select your newly created repository.
    * Select **Framework7** as the Framework Type.
    * **Project Folder Name:** ✍️ **framework7-svelte** (or your custom folder name).
    * Click **Build from Repository**.

### Option B: Manual Builder (Zip Upload)
*Best for quick builds without setting up a git repo.*

1.  **Prepare:**
    * Open the `framework7-svelte` folder on your computer.
    * **Zip** the contents of that specific folder (e.g., `my-app.zip`).
2.  **Build:** Go to **[framework7.swaplab.net](https://framework7.swaplab.net)**.
3.  **Configure:**
    * Upload your project zip file.
    * Select **Framework7** as the Framework Type.
    * Click **Build**.

---

## 🔐 Signing Production Builds (Repository Builder Only)

> **Important:** This section applies **ONLY** to users using **Option A (Repository Builder)**.
> If you are using Option B (Manual Upload), you do not need to configure these secrets.

To generate signed **Release APKs** or **AAB (Android App Bundle)** automatically via GitHub Actions, you **MUST** configure the following Secrets in your GitHub Repository settings.

### 1. Add Secrets to GitHub
Go to **Settings** > **Secrets and variables** > **Actions** > **New repository secret**.

| Secret Name | Description |
| :--- | :--- |
| `KEYSTORE_BASE64` | Your `.jks` or `.keystore` file converted to a Base64 string. |
| `KEYSTORE_PASSWORD` | The password for your Keystore. |
| `KEY_ALIAS` | The alias name of your key. |
| `KEY_PASSWORD` | The password for your specific key alias. |

### 2. How to generate KEYSTORE_BASE64
You cannot upload the binary keystore file directly to GitHub Secrets. You must convert it to a text string first.

**Mac/Linux:**
```bash
base64 -i your-keystore.jks > base64-keystore.txt
# Open base64-keystore.txt, copy the content, and paste it into the Secret value.
```

**Windows (PowerShell):**
```bash
[Convert]::ToBase64String([IO.File]::ReadAllBytes("your-keystore.jks")) | Out-File base64-keystore.txt
```

### 3. 🔍 Transparency: How Secrets are Used (Secure & Ephemeral)
We prioritize security by using **Just-In-Time (JIT) Processing**.

Your signing keys and passwords are handled with strict isolation rules to ensure they cannot be leaked or retrieved:

1.  **Memory-Only:** Your secrets are processed entirely in **Volatile Memory (RAM)**.
2.  **No Disk IO:** We strictly **do not** write your passwords to any persistent configuration files or logs on the server.
3.  **Zero Trace:** The build environment is ephemeral. Once the build process finishes, the isolated container is immediately destroyed, wiping all data from memory.

```yaml
# From the .yml workflow (Inputs):
-e INPUT_KEYSTORE_BASE64=${{ secrets.KEYSTORE_BASE64 }} \
-e INPUT_KEYSTORE_PASSWORD=${{ secrets.KEYSTORE_PASSWORD }} \
-e INPUT_KEY_ALIAS=${{ secrets.KEY_ALIAS }} \
-e INPUT_KEY_PASSWORD=${{ secrets.KEY_PASSWORD }} \
```
* **Security Note (Silent Mode):** To guarantee zero leakage, the GitHub Actions log output is intentionally **restricted**.
    * **Where to watch:** A secure, sanitized log stream is transmitted exclusively to your **SwapLab Live Dashboard**.



---



## 🏗️ Infrastructure & Ecosystem

The build engine used to process these templates is part of the SwapLab Open Ecosystem. Our architecture prioritizes **Zero-Knowledge Storage** and **Just-In-Time (JIT) Security**.

![SwapLab Security Architecture](https://github.com/user-attachments/assets/fc878e6c-b39c-44d0-836f-328c05452163)

You can audit our infrastructure components here:

* **🐳 Framework7 Core:** [View Public Base Image](https://github.com/swaplab-engine/framework7-core)
* **🐳 Cordova Core:** [View Public Base Image](https://github.com/swaplab-engine/cordova-core)
* **📦 Build Packages:** [View Engine Images Registry](https://github.com/orgs/swaplab-engine/packages)
* **⚙️ Workflow Templates:** [View Integration .yml Files](https://github.com/swaplab-engine/workflow-templates)

---

<br>

<details>
<summary><strong>🔍 Transparency: GitHub Permissions & API Usage (Click to expand)</strong></summary>

<br>

<img width="431" height="741" alt="GitHub-Permissions" src="https://github.com/user-attachments/assets/cfdc1b35-517a-4b9e-9c29-300fd7b93aac" />

In this workflow, SwapLab acts as a **Digital Bridge (Trigger)**. It connects your SwapLab dashboard to your private GitHub Workspace, allowing you to trigger builds that run *inside* your own repository using standard GitHub Actions.

We believe in radical transparency. Here is the exact technical breakdown of why we request specific permissions and which GitHub APIs are triggered:

### 1. 🔑 Authentication
We use **Firebase Authentication (GitHub OAuth)** to verify your identity. We never see, store, or access your GitHub password.

### 2. ⚡ Workflows (Actions: Write)
**Why it's required:**
To act as a "Remote Control" for your build button. This allows the SwapLab Dashboard to start a build or cancel a hanging process.

**API Endpoints Used:**
* **Trigger Build:** `POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches`
* **Cancel Build:** `POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel`

### 3. 📂 Contents (Read & Write)
**Why it's required:** `repository.swaplab.net`

* **(Read) To Check Out Code:**
    This allows the GitHub Actions runner to securely `checkout` your source code into the temporary, isolated build environment so it can be compiled.
* **(Write) To Upload Build Artifacts:**
    This permission supports our **Artifact Storage** feature. If you select the *"GitHub Repository (Releases)"* option, we use this permission to automatically create a new GitHub Release and upload your finished build file (e.g., `.apk` or `.aab`) as an asset to that release.

> **⚠️ Note:** We only use this permission to **Create** releases. We **do not** automate the deletion of your files. Full control to delete old releases or assets remains manually in your hands via:
> `https://github.com/{owner}/{repo}/releases`

### 4. ℹ️ Metadata (Read-only)
**Why it's required:**
This is a default permission. We use it to read basic information about your repository (like its name and visibility) to display it correctly in your Dashboard list.

</details>

<br>

---

## 🔗 Legal & Support

By using this service, you agree to our policies regarding repository access and data handling.

* **Repository Access:** [Permissions Explained](https://swaplab.net/privacy-policy/repository-permissions.html)
* **Terms & Conditions:** [Read Terms](https://swaplab.net/privacy-policy/terms-and-conditions.html)
* **Privacy Policy:** [Read Policy](https://swaplab.net/privacy-policy/privacy-policy.html)

---

## 🙏 Credits & Acknowledgements

The templates in this repository are adapted from the official Framework7 examples and community contributions.

| Project | Original Source / Inspiration |
| :--- | :--- |
| **Framework7 Svelte (HackerNews)** | [GuillaumeBiton/hackernews7-svelte](https://github.com/GuillaumeBiton/hackernews7-svelte) |

---

## 👨‍💻 About the Creator

SwapLab is built and maintained by **EMI (EMI-INDO)**, a dedicated developer in the Hybrid Mobile App ecosystem.

This service was built to solve the real-world build problems I faced while developing plugins and games.

* **Cordova Plugins:** I maintain various open-source [Cordova Plugins on GitHub](https://github.com/EMI-INDO?tab=repositories).
* **Game Assets:** Verified seller of [Construct 3 Addons](https://www.construct.net/en/game-assets/users/emiindo-378213).
* **Community:** Active member of the [Construct Community Forums](https://www.construct.net/en/forum).

---
<p align="center">
  Maintained by <b>SwapLab Engineering Team</b>
</p>