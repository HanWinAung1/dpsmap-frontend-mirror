# Vercel Deployment Guide

Your DPSMap frontend mirror repository has been pushed to GitHub and is ready for deployment on Vercel.

## Quick Start: Deploy to Vercel

### Option 1: One-Click Deploy (Recommended)

1. Visit [Vercel's Import Project page](https://vercel.com/import/project)
2. Select **GitHub** as your source
3. Search for and select the `dpsmap-frontend-mirror` repository
4. Click **Import**
5. Vercel will automatically detect the `vercel.json` configuration and deploy your mirror

Your site will be live at a URL like: `https://dpsmap-frontend-mirror.vercel.app`

### Option 2: Deploy via Vercel CLI

If you have the Vercel CLI installed locally:

```bash
git clone https://github.com/HanWinAung1/dpsmap-frontend-mirror.git
cd dpsmap-frontend-mirror
vercel
```

Follow the prompts to link your Vercel account and deploy.

## Configuration Details

The repository includes a `vercel.json` file that configures:

- **Build Command**: No build step needed (static files only)
- **Output Directory**: Root directory (all files served as-is)
- **Caching**: 1-hour cache for all static assets
- **Rewrites**: Proper routing for multi-host mirror structure

## Accessing the Mirror on Vercel

Once deployed, you can access the mirrored sites at:

```text
https://your-vercel-domain.vercel.app/index.html              (Navigation hub)
https://your-vercel-domain.vercel.app/mirror/dpsmap.com/      (Main domain)
https://your-vercel-domain.vercel.app/mirror/myanmar.dpsmap.com/
https://your-vercel-domain.vercel.app/mirror/shop.dpsmap.com/
https://your-vercel-domain.vercel.app/mirror/address.dpsmap.com/
https://your-vercel-domain.vercel.app/mirror/eshop.dpsmap.com/
```

## Important Notes

1. **Large Files**: The repository contains one 57.87 MB video file. Vercel supports files up to 100 MB, so this should deploy without issues. However, consider using a CDN or Git LFS for future optimizations.

2. **Custom Domain**: To use a custom domain (e.g., `dpsmap-mirror.yourdomain.com`), configure it in your Vercel project settings.

3. **Environment**: This is a static mirror and does not require environment variables or backend services.

4. **Automatic Deployments**: Any push to the `master` branch will automatically trigger a new Vercel deployment.

## Troubleshooting

- **Deployment fails**: Check the Vercel build logs in the dashboard. Most issues are related to large file sizes or Git LFS requirements.
- **Links not working**: Ensure you're accessing the correct path structure (e.g., `/mirror/dpsmap.com/` not just `/dpsmap.com/`).
- **Slow performance**: Consider enabling Vercel's Edge Caching or upgrading to a paid plan for better performance.

## Next Steps

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **Import Project** → **GitHub**
3. Select `dpsmap-frontend-mirror`
4. Deploy and share your live mirror!
