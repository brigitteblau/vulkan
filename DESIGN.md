# VULKAN — WEB DESIGN SYSTEM

## Brand feeling

Sensual.
Warm.
Playful.
Editorial.
Chocolate-first.
Slightly imperfect.

Never corporate.
Never SaaS.
Never "AI generated".

## Typography

### Display / Brand — Adelline

Use for:
- VULKAN (logo/wordmark)
- Hero headlines
- Editorial statements ("rompelo.")
- Large numbers

Never use for:
- UI
- Long paragraphs
- Buttons
- Navigation

Font file: `public/fonts/Adelline.ttf` → exposed as `font-display` / CSS var `--font-adelline`.

> ⚠️ **License blocker:** the current `Adelline.ttf` is a "personal use
> only" demo build from fontkong.com — its `.` (period) glyph is replaced
> with a "PERSONAL USE ONLY! fontkong.com" watermark badge at any size.
> Confirmed by isolated glyph test. **Do not ship this file.** Buy the
> commercial license (or source an alternative) before launch. Until then,
> avoid periods in any Adelline-set copy (see `Rompelo.tsx`, was "rompelo.",
> now "rompelo").

### UI / Body — clean grotesk sans-serif

System stack for now (e.g. Geist Sans already bundled). Used for nav, body copy,
small labels, buttons. Exposed as `font-sans` / `--font-sans`.

## Colors

| Name        | Hex       | Usage                                  |
|-------------|-----------|-----------------------------------------|
| Chocolate   | `#5B260E` | Primary background, dominant sections   |
| Vulkan Pink | `#F39AA0` | Accent, illustrations, links, highlights|
| Warm White  | `#F5F3F1` | Light background, chocolate-on-white    |
| Black       | `#050505` | Dark background, high-contrast sections |

The site alternates full-bleed background per section between
chocolate / black / warm white — never a single flat background for the
whole page. Pink is an accent, never a background for large areas.

## Layout

- Large typography.
- Few elements per viewport.
- Asymmetric compositions.
- Editorial spacing (generous, uneven margins — not centered-grid symmetry).
- Images can break the grid / bleed off-screen.

Avoid:
- Card grids
- Pill-shaped everything
- Excessive rounded containers
- Generic gradients
- Centered title + subtitle + CTA layouts
- Excessive icons

## Structure — 6 screens, not a long scroll

1. **Hero** — `VULKAN` in Adelline over chocolate texture. Tagline: "no es un
   postre. es el momento antes de romperlo." CTA: "pedí el tuyo ↗".
2. **Rompelo** — giant editorial statement ("rompelo.") revealed on scroll;
   volcano visually opens, liquid chocolate appears.
3. **Sabores** — flavor lineup, asymmetric, product-forward.
4. **Ritual Vulkan** — the moment/ritual of eating it, macro photography.
5. **Producto / Packaging** — the bag, tactile detail shots.
6. **Pedir** — minimal closing CTA + Instagram.

No SaaS navbar. Top bar only: `vulkan` (wordmark) — `sabores` — `pedir` —
optionally Instagram icon.

## Motion

Motion should feel: **slow / melted / heavy**.
Not: bouncy / techy / flashy.

Rules:
- Maximum 1 dominant interaction per section.
- Hero: soft reveal on load; chocolate texture drifts subtly with mouse
  parallax; hero grows on scroll.
- Rompelo: scroll-driven volcano-opening reveal (Framer Motion scroll
  transforms, or GSAP ScrollTrigger if finer scrubbing control is needed).
- Pink illustrations (spoon, heart, volcano, bag) float with very subtle
  parallax as recurring visual signature across the page.
- Easing: long durations (600–1200ms), custom eased curves — never spring/
  bounce presets. Prefer `ease: [0.16, 1, 0.3, 1]`-style decelerations.

## Image treatment

- Macro photography.
- Chocolate texture, extreme crops.
- Hands and product imperfections allowed — tactile, not sterile.
- No generic food stock photography.

## Assets

- `public/fonts/Adelline.ttf` — display font (in place).
- `public/illustrations/` — pink line illustrations (spoon, heart, volcano,
  bag) — SVG/PNG, transparent bg. **Pending.**
- `public/photos/chocolate.png` — macro chocolate swirl, in place. Used as
  Hero/Ritual/Pedir background and as the Hero video's poster/fallback.
- `public/photos/` — still need a packaging/bag shot for **Producto**.
  **Pending.**
- `public/videos/hero.mp4` — looping macro chocolate footage for the Hero
  background (see Motion). **Pending.** Spec: muted, seamless loop, H.264 MP4,
  ~10–20s, no audio needed (video is always rendered `muted`), landscape
  covering full-bleed (`object-cover`), keep the file light (~5–10MB) since
  it autoplays on load. Drop it in as `hero.mp4` and it wires in automatically
  — `TextureBlock` falls back to `chocolate.png` if the file is missing or
  fails to load.
- `public/logo/` — clean logo mark. **Pending.**

Until real assets land, sections use color-block/texture placeholders in the
brand palette so layout and motion can be built and reviewed independently
of final photography.
