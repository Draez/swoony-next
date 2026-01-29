# Swoony Brand & Website Styling Guide

> **Premium AI-Powered Matchmaking Platform**
> "Stop swiping, start dating" - Headhunter for Love

---

## Brand Positioning

Swoony is positioned as a **luxury, AI-first** dating solution that solves dating fatigue. The visual design reflects:
- **Premium & Sophisticated** - Dark themes with gold accents
- **Modern & Innovative** - Gradient effects, glassmorphism
- **Trustworthy & Safe** - Clean typography, professional layouts
- **Warm & Human** - Balanced with AI technology messaging

---

## Color Palette

### Primary Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Swoony Red** | `#F42C52` | Primary CTA, hearts, love elements, highlights |
| **Swoony Teal** | `#00E6D5` | Secondary accent, AI/tech elements, success states |
| **Swoony Gold** | `#D4AF37` | Premium features, VIP tier, luxury accents |
| **Swoony Black** | `#0a0a0a` | Primary background, dark mode base |

### Secondary Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Deep Blue** | `#1C2746` | Alternative dark backgrounds, trust elements |
| **Light Blue** | `#6677A8` | Subtle accents, secondary text |
| **Dark Red** | `#D81E3C` | Hover states, pressed buttons |
| **Yellow** | `#FFD700` | Badges, notifications, highlights |
| **Gray** | `#a1a1a1` | Body text, secondary information |
| **Light Gray** | `#f4f4f5` | Light mode backgrounds, cards |

### Gradient Combinations

```css
/* Primary Brand Gradient */
background: linear-gradient(135deg, #F42C52 0%, #00E6D5 100%);

/* Hero Gradient Text */
background: linear-gradient(135deg, #ffffff 0%, #F42C52 50%, #00E6D5 100%);

/* VIP/Premium Gradient */
background: linear-gradient(135deg, #D4AF37 0%, #F5E6C8 50%, #D4AF37 100%);
```

### CSS Variables

```css
:root {
  --swoony-blue: #1C2746;
  --swoony-blue-light: #6677A8;
  --swoony-red: #F42C52;
  --swoony-red-dark: #D81E3C;
  --swoony-yellow: #FFD700;
  --swoony-green: #00E6D5;
  --swoony-gray: #a1a1a1;
  --swoony-gray-light: #f4f4f5;
  --swoony-gold: #D4AF37;
  --swoony-black: #0a0a0a;
}
```

---

## Typography

### Font Stack

| Font | Variable | Usage |
|------|----------|-------|
| **Playfair Display** | `--font-playfair` | Headlines, hero text, section titles |
| **Quicksand** | `--font-quicksand` | UI elements, buttons, badges, labels |
| **Plus Jakarta Sans** | `--font-jakarta` | Body text, paragraphs, descriptions |

### Typography Hierarchy

```
H1 (Hero)      : Playfair Display, 56-72px, Bold (900)
H2 (Section)   : Playfair Display, 40-56px, Bold (700)
H3 (Subsection): Playfair Display, 28-36px, Semibold (600)
H4 (Card Title): Quicksand, 18-24px, Bold (700)
Body           : Plus Jakarta Sans, 16-18px, Regular (400)
Small/Label    : Quicksand, 12-14px, Semibold (600)
```

### Font Weights

- **Playfair Display**: 400, 500, 600, 700, 800, 900
- **Quicksand**: 400, 500, 600, 700
- **Plus Jakarta Sans**: 400, 600, 700

### Typography CSS Classes

```css
.font-playfair  /* Headlines */
.font-quicksand /* UI Elements */
.font-sans      /* Body Text */
```

---

## Visual Effects

### Glassmorphism Cards

The signature card style combining transparency, blur, and subtle borders.

```css
.glass-card {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-4px);
}
```

### Gradient Text Effect

```css
.gradient-text {
  background: linear-gradient(135deg, #F42C52 0%, #00E6D5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Gradient Orb Backgrounds

Soft, blurred gradient orbs for ambient lighting effects.

```css
.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
}

.gradient-orb-red {
  background: radial-gradient(circle, rgba(244, 44, 82, 0.4) 0%, transparent 70%);
}

.gradient-orb-cyan {
  background: radial-gradient(circle, rgba(0, 230, 213, 0.3) 0%, transparent 70%);
}

.gradient-orb-gold {
  background: radial-gradient(circle, rgba(212, 165, 116, 0.3) 0%, transparent 70%);
}
```

### Text Selection

```css
::selection {
  background: #F42C52;
  color: white;
}
```

---

## Animations

### Float Animation
Gentle hovering effect for decorative elements.

```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
.float { animation: float 3s ease-in-out infinite; }
```

### Pulse Glow
Attention-grabbing glow for CTAs.

```css
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(244, 44, 82, 0.3); }
  50% { box-shadow: 0 0 40px rgba(244, 44, 82, 0.6); }
}
.pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
```

### Breathe Animation
Subtle scaling for hero elements.

```css
@keyframes breathe {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
}
.animate-breathe { animation: breathe 4s ease-in-out infinite; }
```

### Shimmer Effect
Premium shimmer for buttons.

```css
@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
.btn-shimmer {
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%);
  background-size: 200% 100%;
  animation: shimmer 3s ease-in-out infinite;
}
```

### Slide Up (Scroll Reveal)

```css
@keyframes slideUp {
  from { opacity: 0; transform: translateY(60px); }
  to { opacity: 1; transform: translateY(0); }
}
.slide-up { animation: slideUp 0.8s ease-out forwards; }
```

### Border Glow

```css
@keyframes borderGlow {
  0%, 100% { box-shadow: 0 0 20px rgba(244, 44, 82, 0.2), 0 0 40px rgba(244, 44, 82, 0.1); }
  50% { box-shadow: 0 0 30px rgba(244, 44, 82, 0.4), 0 0 60px rgba(244, 44, 82, 0.2); }
}
.border-glow { animation: borderGlow 3s ease-in-out infinite; }
```

### Marquee (Infinite Scroll)

```css
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.333%); }
}
.animate-marquee { animation: marquee 25s linear infinite; }
.animate-marquee:hover { animation-play-state: paused; }
```

### Stagger Delays

```css
.stagger-1 { animation-delay: 0.1s; }
.stagger-2 { animation-delay: 0.2s; }
.stagger-3 { animation-delay: 0.3s; }
.stagger-4 { animation-delay: 0.4s; }
.stagger-5 { animation-delay: 0.5s; }
.stagger-6 { animation-delay: 0.6s; }
```

---

## Component Patterns

### Primary Button (CTA)

```jsx
<button className="
  bg-gradient-to-r from-[#F42C52] to-[#D81E3C]
  text-white font-quicksand font-semibold
  px-8 py-4 rounded-full
  hover:scale-105 hover:shadow-lg hover:shadow-[#F42C52]/25
  transition-all duration-300
">
  Download Now
</button>
```

### Secondary Button (Outline)

```jsx
<button className="
  border border-white/20 bg-white/5 backdrop-blur-sm
  text-white font-quicksand font-medium
  px-6 py-3 rounded-full
  hover:bg-white/10 hover:border-white/30
  transition-all duration-300
">
  Learn More
</button>
```

### Feature Card

```jsx
<div className="
  glass-card rounded-3xl p-8
  border border-white/10
  hover:border-[#F42C52]/30
  transition-all duration-300
">
  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F42C52] to-[#00E6D5]
                  flex items-center justify-center mb-6">
    <Icon className="w-8 h-8 text-white" />
  </div>
  <h3 className="font-playfair text-2xl font-bold text-white mb-4">
    Feature Title
  </h3>
  <p className="text-white/60 leading-relaxed">
    Feature description text...
  </p>
</div>
```

### Pricing Card (Highlighted)

```jsx
<div className="
  pricing-highlight
  glass-card rounded-3xl p-8
  relative overflow-hidden
">
  {/* Gradient border via ::before pseudo-element */}
  <span className="
    absolute top-0 right-0
    bg-gradient-to-r from-[#F42C52] to-[#00E6D5]
    text-white text-xs font-quicksand font-bold
    px-4 py-2 rounded-bl-2xl
  ">
    POPULAR
  </span>
  {/* Card content */}
</div>
```

### Section Header

```jsx
<div className="text-center mb-16">
  <p className="
    font-quicksand text-xs font-semibold
    text-[#D4AF37] uppercase tracking-[0.3em] mb-4
  ">
    Section Label
  </p>
  <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold">
    <span className="text-white">Primary </span>
    <span className="text-[#F42C52]">Highlight</span>
  </h2>
</div>
```

### Badge/Tag

```jsx
<span className="
  font-quicksand text-xs font-bold uppercase tracking-wider
  bg-[#F42C52]/10 text-[#F42C52]
  px-3 py-1 rounded-full
">
  New Feature
</span>
```

### Stat/Metric Display

```jsx
<div className="text-center">
  <div className="font-playfair text-5xl font-bold text-[#00E6D5]">
    98%
  </div>
  <div className="font-quicksand text-sm text-white/50 mt-2">
    Match Accuracy
  </div>
</div>
```

---

## Layout Patterns

### Full-Width Section

```jsx
<section className="py-24 px-6 bg-[#0a0a0a]">
  <div className="max-w-7xl mx-auto">
    {/* Content */}
  </div>
</section>
```

### Grid Layouts

```css
/* 2-column hero */
.grid md:grid-cols-2 gap-12 lg:gap-20 items-center

/* 3-column features */
.grid md:grid-cols-2 lg:grid-cols-3 gap-8

/* 4-column footer */
.grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8
```

### Container Widths

- **Max content**: `max-w-7xl` (1280px)
- **Narrow content**: `max-w-3xl` (768px)
- **Text content**: `max-w-2xl` (672px)

---

## Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Large desktop |
| `2xl` | 1536px | Extra large |

---

## Icon System

Using **Lucide React** icons with consistent sizing:

| Context | Size | Class |
|---------|------|-------|
| Small (inline) | 16px | `w-4 h-4` |
| Medium (cards) | 24px | `w-6 h-6` |
| Large (features) | 32px | `w-8 h-8` |
| XL (hero) | 48px | `w-12 h-12` |

---

## Brand Assets

### Logo

The Swoony logo is a stylized heart with gradient fill:
- **Primary**: Gradient from `#F42C52` to `#00E6D5`
- **Monochrome**: White for dark backgrounds

### App Store Badges

- Apple App Store: `/applestore.svg`
- Google Play Store: `/google-play.svg`

### App Mockups

- Transparent mockup: `/mock_trans.svg`
- Standard mockup: `/mock.svg`

---

## Dark Mode (Default)

The website uses a dark-first approach:

```css
/* Base dark background */
background: #0a0a0a;

/* Text hierarchy */
--text-primary: white;
--text-secondary: rgba(255, 255, 255, 0.7);
--text-muted: rgba(255, 255, 255, 0.5);
--text-subtle: rgba(255, 255, 255, 0.3);

/* Borders */
--border-subtle: rgba(255, 255, 255, 0.05);
--border-light: rgba(255, 255, 255, 0.1);
--border-visible: rgba(255, 255, 255, 0.2);
```

---

## Key Design Principles

1. **Luxury Feel**: Dark backgrounds, gold accents, premium typography
2. **AI-Forward**: Teal accents represent technology, gradients suggest intelligence
3. **Warmth Balance**: Red hearts and warm gold prevent cold tech feeling
4. **Clarity First**: Clean layouts, generous whitespace, readable typography
5. **Motion Subtlety**: Animations enhance, never distract
6. **Mobile Excellence**: Touch-friendly targets, responsive scaling

---

## Quick Reference

### Most Used Classes

```css
/* Fonts */
font-playfair, font-quicksand, font-sans

/* Colors */
text-white, text-white/50, text-[#F42C52], text-[#00E6D5], text-[#D4AF37]
bg-[#0a0a0a], bg-white/5, bg-gradient-to-r

/* Layout */
max-w-7xl, mx-auto, px-6, py-24

/* Cards */
glass-card, rounded-3xl, border-white/10

/* Buttons */
rounded-full, px-8, py-4, hover:scale-105

/* Animation */
transition-all, duration-300, animate-pulse
```

---

*Last Updated: January 2026*
*Version: 2.0 - AI-First Redesign*
