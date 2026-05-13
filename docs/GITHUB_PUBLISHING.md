# GitHub Publishing Instructions

The local repository has already been initialized and committed. Because GitHub integration is not enabled in this environment, the repository was prepared as a local Git repository and can be pushed from any machine with GitHub access.

## Option 1: Push to a New GitHub Repository

Create an empty repository on GitHub, then run the following commands from the extracted repository folder:

```bash
git remote add origin https://github.com/YOUR_USERNAME/dpsmap-frontend-mirror.git
git branch -M main
git push -u origin main
```

If you prefer SSH, use this remote format instead:

```bash
git remote add origin git@github.com:YOUR_USERNAME/dpsmap-frontend-mirror.git
git branch -M main
git push -u origin main
```

## Option 2: Use GitHub CLI

If the GitHub CLI is authenticated on your machine, run:

```bash
gh repo create dpsmap-frontend-mirror --private --source=. --remote=origin --push
```

Change `--private` to `--public` only if you have permission to redistribute the mirrored public assets.

## Large File Note

The repository contains media-heavy map files and one `.mp4` file around 57.87 MB. GitHub may warn about files above 50 MB, but files under 100 MB are not blocked. If you want a cleaner long-term repository, enable Git LFS for large assets before pushing.

```bash
git lfs install
git lfs track "*.mp4" "*.pdf" "*.jpg" "*.png"
git add .gitattributes
git commit -m "Track large media assets with Git LFS"
git push -u origin main
```
