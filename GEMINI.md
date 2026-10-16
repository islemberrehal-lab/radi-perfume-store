# Antigravity Design System & Themes Configuration

This document specifies the design system, color tokens, typography, and themes for the **L'ÉLIXIR** perfume store. Antigravity discovers and follows these tokens across all UI components, pages, and code generations.

---

## 🎨 Theme Matrix & Design Tokens

### 1. Radi Fragrance (Extracted from https://radi-fragrance.joumlia.com/ar)
A modern, warm, high-contrast luxury boutique look featuring rich velvet berry burgundy, camel accents, and soft blush-cream surfaces:
- **Identifier**: `radi-fragrance`
- **Names**:
  - AR: **عطور راضي (Radi Fragrance)**
  - FR: **Radi Fragrance**
  - EN: **Radi Fragrance**
- **Tokens**:
  - `--bg-primary`: `#FAF5F3` (Warm blush-tinted ivory cream)
  - `--bg-secondary`: `#F3ECE8`
  - `--bg-surface`: `#FFFFFF` (Crisp clean white cards)
  - `--bg-surface-elevated`: `#F8F1EE`
  - `--bg-header`: `#8E2A4C` (Radi Velvet Burgundy / Wine)
  - `--bg-topbar`: `#B98A5E` (Warm Camel Gold)
  - `--topbar-text`: `#FFFFFF`
  - `--header-text`: `#FFFFFF`
  - `--text-primary`: `#241318` (Deep dark berry espresso)
  - `--text-secondary`: `#6B5A5F` (Muted slate mauve plum)
  - `--text-muted`: `#8E7A80`
  - `--accent`: `#8E2A4C` (Burgundy primary action)
  - `--accent-hover`: `#631D35`
  - `--accent-secondary`: `#B98A5E` (Camel gold secondary)
  - `--accent-glow`: `rgba(142, 42, 76, 0.25)`
  - `--border-subtle`: `rgba(36, 19, 24, 0.1)`
  - `--border-hover`: `rgba(142, 42, 76, 0.5)`
  - `--btn-primary-bg`: `#8E2A4C`
  - `--btn-primary-text`: `#FFFFFF`
  - `--btn-outline-border`: `#8E2A4C`
  - `--btn-outline-text`: `#8E2A4C`
  - `--font-serif`: `"Cairo", sans-serif`
  - `--radius-card`: `18px`
  - `--radius-btn`: `10px`

### 2. Noir & Or (Default Luxury Theme)
- **Identifier**: `noir-gold`
- **Tokens**:
  - `--bg-primary`: `#0B0B0C` (Deepest Obsidian Black)
  - `--bg-surface`: `#131316`
  - `--bg-card`: `rgba(19, 19, 22, 0.7)`
  - `--accent`: `#C9A66B` (Warm Imperial Gold)
  - `--text-primary`: `#F5EFE6` (Ivory Cream)
  - `--text-secondary`: `#9CA3AF` (Muted Zinc Gray)
  - `--font-serif`: `"Cormorant Garamond", "Playfair Display", serif`

### 3. Émeraude & Oud (Royal Emerald Theme)
- **Identifier**: `emeraude-oud`
- `--bg-primary`: `#06120E`, `--accent`: `#10B981`, `--accent-secondary`: `#E5C384`, `--text-primary`: `#F2FAF6`

### 4. Saphir Nocturne (Midnight Sapphire Theme)
- **Identifier**: `saphir-nocturne`
- `--bg-primary`: `#080B14`, `--accent`: `#3B82F6`, `--accent-secondary`: `#C9A66B`, `--text-primary`: `#F0F4FF`

### 5. Rose Damascena (Velvet Rose Theme)
- **Identifier**: `rose-damascena`
- `--bg-primary`: `#12090C`, `--accent`: `#E11D48`, `--text-primary`: `#FFF5F7`

---

## 📐 Layout & Architecture Rules

1. **Token Driven Styling**: Do not hardcode raw hex values in JSX. Use semantic classes (`bg-background`, `bg-surface`, `text-ivory`, `text-gold`, `border-luxury-border`, `btn-gold`, `glass-card`).
2. **RTL & LTR Symmetry**: Always use logical properties (`start-`, `end-`, `rtl:`, `ms-`, `me-`).
3. **Mobile First**: Support both desktop headers and mobile bottom navigation bars.
4. **Persistence**: Store the active theme key in `localStorage` under key `luxe_theme`.
