# DPSMap Public Frontend Static Mirror

This repository is a **static frontend mirror** of the publicly accessible pages and assets discovered under `dpsmap.com` and its public subdomains. It was generated for archival and frontend inspection purposes using a controlled crawl that respected `robots.txt` and excluded session-mutating or transactional URL patterns such as cart, checkout, login, account, admin, and `add-to-cart` links.

> This mirror is not an official DPSMap distribution. It is a static snapshot of publicly reachable frontend resources and does not include private data, server-side source code, databases, credentials, administrative routes, or dynamic backend behavior.

## Mirror Summary

The scrape captured **1,720 frontend files** with a total local mirror size of approximately **436 MB**. The crawl was stopped after the file count plateaued and the remaining queue consisted mostly of repeated unreachable, missing, or server-error asset URLs. The captured pages and assets remain organized by host under the `mirror/` directory.

| Host | Files Captured | Notes |
|---|---:|---|
| `dpsmap.com` | 1,286 | Main public website, map pages, Leaflet assets, image assets, downloadable public files, and static frontend resources. |
| `shop.dpsmap.com` | 341 | Public WooCommerce-style storefront pages and public assets, excluding cart, checkout, account, login, and `add-to-cart` actions. |
| `myanmar.dpsmap.com` | 60 | Public subdomain pages and resources discovered through sitemap/front-end links. |
| `address.dpsmap.com` | 27 | Public address-related frontend pages and assets. |
| `eshop.dpsmap.com` | 6 | Public entry pages/assets discovered during the crawl. |

## Repository Structure

| Path | Purpose |
|---|---|
| `mirror/` | The static mirrored website files, grouped by original host. |
| `docs/files_manifest.txt` | Complete list of captured files. |
| `docs/hosts_mirrored.txt` | Hostnames included in the mirror. |
| `docs/wget_controlled.log` | Detailed controlled crawl log. |
| `docs/reject_regex.txt` | Exclusion rules used to avoid transactional/session-mutating URLs. |
| `docs/stats.md` | Generated file statistics by host and extension. |
| `docs/crawl_stop_note.txt` | Note explaining why the long crawl was stopped. |

## How to Preview Locally

Because the mirror contains converted links and multiple host-root folders, the simplest local preview is to serve the repository root with a static file server and open a captured entry page manually.

```bash
cd dpsmap_frontend_repo
python3 -m http.server 8080
```

Then open one of the following paths in a browser:

```text
http://localhost:8080/mirror/dpsmap.com/index.html
http://localhost:8080/mirror/myanmar.dpsmap.com/index.html
http://localhost:8080/mirror/shop.dpsmap.com/index.html
http://localhost:8080/mirror/address.dpsmap.com/index.html
```

Some absolute links may still point to live public domains because the source sites contain externally hosted links, dynamic application routes, or missing assets. This repository should therefore be treated as a **frontend snapshot**, not as a fully functional backend clone.

## Crawl Method

The controlled crawl used GNU Wget mirroring options, including page requisites and link conversion, while restricting the domain scope to `dpsmap.com` subdomains and excluding URLs likely to alter sessions or shopping-cart state. GNU Wget’s `--mirror`, `--page-requisites`, and `--convert-links` options are intended for recursive mirroring, saving resources needed to display downloaded pages, and rewriting local links for offline viewing respectively.[1]

The final mirror intentionally excluded patterns such as:

```text
add-to-cart=
/cart/
/checkout/
/my-account/
/wp-login.php
/wp-admin/
/wp-json/
/feed/
?replytocom=
?orderby=
?filter_
?min_price=
?max_price=
```

## GitHub Publishing Notes

The largest captured file is approximately **57.87 MB**, which is below GitHub’s hard file-size limit of 100 MB but above GitHub’s recommended 50 MB warning threshold.[2] Therefore, pushing this repository may trigger a large-file warning, but it should not be blocked solely by file size unless future captured files exceed 100 MB. If you want a cleaner public repository, consider enabling Git LFS for media-heavy files such as `.mp4`, `.pdf`, and large map images.[3]

## Legal and Operational Notes

This repository is a technical mirror of publicly reachable frontend resources. Before publishing publicly, verify that you have the necessary rights or permission to redistribute the copied pages, images, PDFs, videos, brand assets, and map files. If the goal is internal backup, development reference, or migration support, keep the repository private unless explicit redistribution permission is available.

## References

[1]: https://www.gnu.org/software/wget/manual/wget.html "GNU Wget Manual"
[2]: https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github "GitHub Docs: About large files on GitHub"
[3]: https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-git-large-file-storage "GitHub Docs: About Git Large File Storage"
