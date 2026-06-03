# MALL Lab — Website Editing Guide

> Repository: [MALL-Lab/MALL-Lab.github.io](https://github.com/MALL-Lab/MALL-Lab.github.io)  
> Published site: [https://MALL-Lab.github.io](https://MALL-Lab.github.io)  
> Base template: [al-folio](https://github.com/alshedivat/al-folio) — refer to this repository for advanced template questions.

This tutorial explains how to modify each section of the lab website. No local installation is required for simple edits: you can edit files directly from GitHub. For more complex changes, see the local installation section at the end.

---

## Table of Contents

- [Workflow (how to make changes)](#workflow)
- [Home page (About)](#1-home-page-about)
- [News](#2-news)
- [Team](#3-team)
  - [Adding or modifying a main member](#adding-or-modifying-a-main-member)
  - [Jointly supervised researchers and alumni sections](#jointly-supervised-researchers-and-alumni-sections)
- [Publications](#4-publications)
- [Projects](#5-projects)
- [Awards](#6-awards)
- [General site configuration](#7-general-site-configuration)
- [Local installation for previewing changes](#local-installation)
- [Additional resources](#additional-resources)

---

## Workflow

Changes are made via **Pull Requests** (PRs). Never edit directly on `main`.

**Option A — Edit directly on GitHub (no installation required):**

1. Go to the file you want to edit on [github.com/MALL-Lab/MALL-Lab.github.io](https://github.com/MALL-Lab/MALL-Lab.github.io).
2. Click the pencil icon (✏️) in the top-right corner of the file.
3. Make your changes.
4. When saving, select **"Create a new branch for this commit and start a pull request"**.
5. Give the branch a descriptive name (e.g. `feat/add-news-article`) and open the PR.
6. Notify the repository maintainer to review and merge it.

**Option B — Clone and edit locally:**

```bash
git clone https://github.com/MALL-Lab/MALL-Lab.github.io.git
cd MALL-Lab.github.io
git checkout -b my-change-branch
# ... edit files ...
git add .
git commit -m "description of the change"
git push origin my-change-branch
# Open a PR from GitHub
```

Once a PR is merged into `main`, GitHub Actions automatically deploys the changes to the site within a few minutes.

---

## 1. Home page (About)

**File:** `_pages/about.md`

This is the content of the main page (`/`). The free text below the `---` frontmatter is written in Markdown.

```markdown
---
layout: about
title: About
permalink: /
subtitle: University of A Coruña - CITIC
selected_papers: true  # shows publications marked as selected
announcements:
  enabled: true         # shows the news block
  scrollable: true
  limit: 3             # number of news items visible without scrolling
---

Lab introduction text in Markdown...
```

**What you can change:**
- The introduction paragraph and research lines (standard Markdown).
- `limit` under `announcements` to show more or fewer news items.
- `selected_papers: false` to hide the featured publications block.

---

## 2. News

**Folder:** `_news/`

Each news item is an independent Markdown file. To **add a new news item**:

1. Create a new file in `_news/`, for example `_news/announcement_12.md`.
2. Use this structure:

```markdown
---
layout: post
date: 2026-06-01 10:00:00+0200
inline: true
related_posts: false
---

News text. You can include [links](https://example.com) and **bold text**.
```

- The `date` field determines the order (most recent first).
- `inline: true` displays the news item as a single line on the home page. Set it to `false` for longer news items that need their own page.

To **remove a news item**, delete the file or move the date far into the future.

---

## 3. Team

The team page (`/people/`) has two parts: the **main profiles** (with a large photo, bio, and social links) and the **jointly supervised researchers and alumni** sections.

### Adding or modifying a main member

**Step 1 — Create the bio file.**

Each member has their own bio in `_pages/about_NAME.md`. For example, `_pages/about_dfedreira.md` contains only the bio text (no frontmatter):

```markdown
Name Surname is a PhD student at the University of A Coruña...
```

**Step 2 — Add the photo.**

Upload the image to `assets/img/about/` (formats: `.jpg`, `.png`, `.webp`). Use a descriptive name like `name_surname_pic.jpg`.

**Step 3 — Register the member in the profiles file.**

Edit `_pages/profiles.md` and add a block to the `profiles:` list in the frontmatter:

```yaml
profiles:
  - align: left        # 'left' or 'right' to alternate photo position
    image: about/name_surname_pic.jpg
    content: about_name.md   # name of the bio file created in Step 1
    image_circular: false
    more_info: >
      <p>Office X.XX</p>
      <p>Building name</p>
      <p>15000 A Coruña, Spain</p>
    social:
      github: "https://github.com/username"
      orcid: "https://orcid.org/0000-0000-0000-0000"
      google_scholar: "https://scholar.google.com/citations?user=XXXXX"
      linkedin: "https://www.linkedin.com/in/username/"
```

The `more_info` and `social` fields are optional. Supported social icons include: `github`, `orcid`, `google_scholar`, `linkedin`, `researcherid`, `scopus`, `twitter`, `email`.

### Jointly supervised researchers and alumni sections

These sections are written directly in HTML at the bottom of `_pages/profiles.md`. To **add a jointly supervised researcher**, replicate the existing `<li class="user-item">` block and fill in the details:

```html
<li class="user-item" style="margin-bottom: 3rem; list-style-position: outside;">
  <div class="user-container" style="display: flex; align-items: flex-start; gap: 20px; flex-wrap: wrap;">
    <div class="user-info" style="flex: 1; min-width: 250px;">
      <h4 style="display: inline; margin: 0;">Name Surname</h4>
      <span class="user-subtext" style="color: #666; margin-left: 10px;">— PhD Student</span>
      <p class="user-affiliation" style="margin: 5px 0;">
        <em>Jointly supervised with <strong>Prof. Supervisor Name</strong></em>
      </p>
      <div class="user-bio" style="font-size: 0.95rem; margin-top: 8px; text-align: justify;">
        Researcher bio...
      </div>
    </div>
    <div class="user-photo" style="flex-shrink: 0;">
      <img src="/assets/img/about/photo.jpg" alt="Name Surname"
           style="width: 150px; height: 180px; object-fit: cover; border-radius: 4px; display: block;" />
    </div>
  </div>
</li>
```

To **add an alumnus**, add a simple `<li>` inside the alumni block:

```html
<li class="user-item">
  <div class="user-info" style="display: inline-block;">
    <h4 style="display: inline; margin: 0;">Name Surname, PhD</h4>
    <span class="user-subtext" style="color: #666; margin-left: 10px;">— Former PhD Student</span>
  </div>
</li>
```

---

## 4. Publications

**File:** `_bibliography/papers.bib`

Publications are managed with BibTeX. The `/publications/` page is generated automatically from this file.

To **add a publication**, add a standard BibTeX entry. The lab uses additional fields to enrich the presentation:

```bibtex
@article{unique_key_2026,
  title   = {Article title},
  author  = {Surname, Name and Surname2, Name2},
  journal = {Journal name},
  year    = {2026},
  doi     = {10.xxxx/xxxxx},
  url     = {https://doi.org/10.xxxx/xxxxx},

  % Optional lab-specific fields:
  preview    = {image_name.png},     % thumbnail in assets/img/ (or assets/img/projects/)
  selected   = {true},               % appears in the "Selected Publications" section on the home page
  note       = {Q1, 1/100 Area, IF}, % note with quartile and impact factor
  dimensions = {true},               % shows the Dimensions badge
  altmetric  = {true},               % shows the Altmetric badge
  abstract   = {Article abstract...},
  pdf        = {filename.pdf},       % place the PDF in assets/pdf/
  code       = {https://github.com/...},
}
```

**Important notes:**
- The BibTeX key (e.g. `unique_key_2026`) must be unique across the entire file.
- Publications are grouped and sorted by year automatically.

---

## 5. Projects

**Folder:** `_projects/`

Each project is a Markdown file. To **add a new project**:

1. Create `_projects/NAME_project.md` with this structure:

```markdown
---
layout: page
title: Project Name
description: Short description shown on the project card
img: assets/img/projects/project_image.png
importance: 1          # display order (1 = first)
category: national     # category: 'national', 'european', 'regional', etc.
---

Long project description in Markdown...

### Objectives

- **Objective 1:** ...

---

### Project Details

| | |
|:---|:---|
| **Funding** | 100,000 € |
| **Agency** | AEI |
| **Duration** | 01/01/2025 - 31/12/2027 |
```

2. Upload the project image to `assets/img/projects/`.

Categories group projects on the `/projects/` page. You can add new categories by editing `_pages/projects.md`.

---

## 6. Awards

**File:** `_pages/awards.md`

Awards are written in HTML inside this file. To **add an award**, find the corresponding year (or add a new `<h3>`) and insert a `<li>`:

```html
<h3>2026</h3>
<ul>
  <li>
    <span class="badge badge-pill badge-student mr-2">Student Award</span>
    <strong>Award name</strong>.
    Awarded to Name Surname, for the work <em>"Work title"</em>.
  </li>
</ul>
```

Available badge types:
- `badge-student` (blue) — student awards
- `badge-research` (green) — research awards
- `badge-fellowship` (orange) — fellowships and grants

---

## 7. General site configuration

**File:** `_config.yml`

This file controls global settings. Fields most likely to need updating:

```yaml
title: Machine Learning in Life Sciences Laboratory
subtitle: University of A Coruña - CITIC
keywords: computational biology, cancer, machine learning, ...
```

> **Warning:** Edit `_config.yml` carefully. A YAML syntax error can prevent the site from building. If in doubt, validate the YAML at [yamllint.com](https://www.yamllint.com/) before committing.

---

## Local installation

To preview changes before publishing you need Ruby and Jekyll. The easiest approach is Docker:

```bash
# With Docker (recommended)
docker compose up

# Access the site at: http://localhost:8080
```

See the `INSTALL.md` file in the repository for detailed installation instructions without Docker.

---

## Additional resources

- **Base template repository (al-folio):** [github.com/alshedivat/al-folio](https://github.com/alshedivat/al-folio) — for questions about advanced template features.
- **Jekyll documentation:** [jekyllrb.com/docs](https://jekyllrb.com/docs/)
- **Markdown syntax (GitHub Flavored):** [docs.github.com/en/get-started/writing-on-github](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- **YAML validator:** [yamllint.com](https://www.yamllint.com/)

For any questions about the repository setup, contact the site maintainer or open an issue in the repository.
