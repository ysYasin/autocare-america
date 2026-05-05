# On-Page SEO Checklist

Canonical on-page SEO reference for this project. Every blog post, service page, and static page must satisfy every applicable item below.

**Every page-generation skill (`write-blog-post.md`, `write-service-page.md`, etc.) must read this file first. Every page shipped must pass every applicable item.**

---

## 1. 🔵 HEAD & METADATA — What Google indexes first

- [ ] **Title tag** — 50–60 chars, primary keyword near the start
- [ ] **Meta description** — 150–160 chars, keyword + benefit + soft CTA
- [ ] **Canonical URL** set to prevent duplicates
- [ ] **Open Graph** — `og:title`, `og:description`, `og:image` (1200×630), `og:url`, `og:type`
- [ ] **Twitter Card** — `twitter:card=summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image`
- [ ] **Language attribute** on `<html>` (e.g. `lang="en"`)
- [ ] **Viewport meta tag** for responsive rendering
- [ ] **Favicon** + `apple-touch-icon`
- [ ] **Charset meta** — `<meta charset="utf-8">`

---

## 2. 🟣 URL STRUCTURE — Clean, readable, keyword-forward

- [ ] **Short slug** — under 60 chars
- [ ] **Primary keyword** in the slug
- [ ] **Hyphens only** — never underscores
- [ ] **Lowercase only**
- [ ] **No stop words** ("the", "a", "of") unless necessary for clarity
- [ ] **Logical hierarchy** — `/services/[service-name]`, `/blog/[post-slug]`

---

## 3. 🔴 HEADINGS — Structure for skimmers & bots

- [ ] **Exactly one H1** per page, contains primary keyword
- [ ] **Logical H2 → H3** hierarchy — never skip levels
- [ ] **H2s** use supporting keywords + questions from the cluster
- [ ] **No keyword stuffing** — write naturally

---

## 4. 🟡 COPY & BODY — Answer the query, fast

- [ ] **Primary keyword** in the first 100 words
- [ ] **Direct answer** to the query in the first paragraph
- [ ] **Length** matches SERP average (within 20% of top-3 word count)
- [ ] **Short paragraphs** (1–4 sentences)
- [ ] **Readability** — 8th–10th grade level
- [ ] **Active voice** preferred
- [ ] **Bold key phrases** — sparingly
- [ ] **Bullets and numbered lists** where appropriate

---

## 5. 🟢 FAQ SECTION — Every blog post

- [ ] **4–8 questions** from SEMRush Questions tab + "People Also Ask"
- [ ] **Direct, clear answers** — 2–4 sentences each
- [ ] **FAQ schema** (JSON-LD) applied

---

## 6. 🔵 IMAGES — Every image is a ranking signal

- [ ] **Alt text** describes the image + keyword where natural
- [ ] **Descriptive filenames** with hyphens (e.g. `emergency-plumber-toronto.webp`)
- [ ] **WebP format**, compressed under 200 KB
- [ ] **Width/height attributes** specified — prevents CLS
- [ ] **Lazy loading** (`loading="lazy"`) for below-fold images
- [ ] **Responsive srcset** where needed
- [ ] **Featured/hero image** for social sharing

---

## 7. 🟣 INTERNAL LINKS — Pass authority across the site

- [ ] **3–5 internal links** per post
- [ ] Link to **related blog posts** and **relevant service pages**
- [ ] **Descriptive anchor text** — never "click here" or "read more"
- [ ] **Contextually placed** in body copy
- [ ] **Breadcrumb navigation** on every page

---

## 8. 🟡 EXTERNAL LINKS — Cite authority, don't hoard it

- [ ] **2–3 external links** to authoritative sources (.gov, .edu, major industry sites)
- [ ] **Relevant** to the topic
- [ ] Open in **new tab** with `rel="noopener"`
- [ ] `rel="nofollow"` for sponsored links

---

## 9. 🔴 SCHEMA MARKUP — JSON-LD in `<head>`

- [ ] **Article** schema on blog posts
- [ ] **LocalBusiness** schema on homepage, about, contact — use most specific subtype (`Plumber`, `Dentist`, etc.)
- [ ] **Service** schema on service pages
- [ ] **FAQ** schema wherever an FAQ section exists
- [ ] **BreadcrumbList** schema on every page
- [ ] **Organization** schema site-wide
- [ ] **Author/Person** schema for author bylines

---

## 10. 🟢 E-E-A-T SIGNALS — Experience · Expertise · Authority · Trust

- [ ] **Author byline** with name on every blog post
- [ ] **Author bio** with credentials (years experience, qualifications)
- [ ] Link to **author's dedicated page**
- [ ] **Published date** displayed on page
- [ ] **"Last updated" date** when content is refreshed
- [ ] **Real stories, real numbers, real opinions** (from the business voice file)
- [ ] **Cite authoritative sources**
- [ ] **About page** with full company credentials
- [ ] **Contact page** with real address, phone, business hours

---

## 11. 🔵 ACCESSIBILITY — A11y signals = SEO signals

- [ ] **Semantic HTML5** tags: `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`
- [ ] **ARIA labels** on interactive elements where needed
- [ ] **Color contrast** meets WCAG AA (4.5:1 for body text)
- [ ] **Focus indicators** visible on all interactive elements
- [ ] **Alt text** on ALL images (empty `alt=""` for decorative only)
- [ ] **Descriptive link text**
- [ ] **Skip-to-content** link for keyboard users

---

## 12. 🟣 MOBILE & RESPONSIVE — Mobile-first indexing

- [ ] **Responsive layout** (Tailwind handles this)
- [ ] **Touch targets** minimum 48×48 px
- [ ] **Body font size** minimum 16 px
- [ ] **No horizontal scroll** at any viewport
- [ ] **No intrusive interstitials**

---

## 13. 🟡 SOCIAL PREVIEW — Shareable card

- [ ] **Open Graph image** optimized — 1200×630, under 1 MB
- [ ] **Twitter Card image** — 1200×600
- [ ] **Compelling `og:description`** — different from meta if valuable

---

## 14. 🔴 CONVERSION ELEMENTS — Capture the lead *(service pages only)*

- [ ] **Primary CTA** above the fold
- [ ] **Phone number** with click-to-call (`tel:` links)
- [ ] **Multiple CTA placements** throughout the page
- [ ] **Trust signals** — reviews, ratings, licenses, years in business
- [ ] **Testimonials** with names (and photos where possible)
- [ ] **Service-area coverage** listed
- [ ] **Business hours** displayed
- [ ] **Physical address** with embedded map (for local businesses)

---

## 15. 🟢 LONG-FORM CONTENT — 1500+ word posts *(1500+ words)*

- [ ] **Table of contents** with anchor links at the top
- [ ] **Jump links** for each H2 section
- [ ] **Back-to-top** button

---

**Total: 80+ items across 15 categories**

---

## How to use this file

1. Every page-generation skill reads this file before generating any page.
2. Every page must satisfy every applicable item — no exceptions.
3. **Conversion Elements** apply to service pages only.
4. **Long-Form Content** items apply to any post 1500+ words.
5. Run `scripts/verify-seo.ts` against any built page to check compliance — it should fail the build if any required item is missing.
