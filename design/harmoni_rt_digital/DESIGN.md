---
name: Harmoni RT Digital
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#3e4949'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#6e7979'
  outline-variant: '#bdc9c8'
  surface-tint: '#00696a'
  primary: '#006768'
  on-primary: '#ffffff'
  primary-container: '#008283'
  on-primary-container: '#f3fffe'
  inverse-primary: '#73d6d7'
  secondary: '#106966'
  on-secondary: '#ffffff'
  secondary-container: '#a1ede8'
  on-secondary-container: '#186e6a'
  tertiary: '#9b4008'
  on-tertiary: '#ffffff'
  tertiary-container: '#bb5822'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#90f3f3'
  primary-fixed-dim: '#73d6d7'
  on-primary-fixed: '#002020'
  on-primary-fixed-variant: '#004f50'
  secondary-fixed: '#a4f0eb'
  secondary-fixed-dim: '#88d4cf'
  on-secondary-fixed: '#00201e'
  on-secondary-fixed-variant: '#00504d'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb694'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7b2f00'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '800'
    lineHeight: 38px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  title-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system blends **Corporate / Modern clarity** with **warm civic humanism**, tailored explicitly for residential community management (*Rukun Tetangga / Rukun Warga*). The goal is to demystify administrative overhead, elevate community trust through total fiscal transparency, and empower residents across diverse age groups—from tech-savvy young professionals to senior elders—with an interface that feels friendly, trustworthy, and welcoming.

The brand persona balances municipal authority with domestic warmth. It rejects cold, clinical bureaucratic tables in favor of structured, card-based information chunks, friendly rounded geometry, soft ambient shadows, and an energetic yet balanced color palette. The UI evokes a sense of mutual cooperation (*gotong royong*), collective accountability, and accessible civic duty.

## Colors

The palette establishes an immediate sense of civil reliability, cleanliness, and neighborhood vitality:

- **Primary Teal (`#359FA0`)**: Represents civic integrity, balance, and quiet authority. Used for core interactive surfaces, active navigation anchors, primary buttons, and critical summary figures.
- **Secondary Aqua/Mint (`#8AD6D1`)**: Symbolizes revitalization, freshness, and neighborhood wellness. Serves as interactive hover accents, soft highlight containers, supportive chart rings, and secondary metric badges.
- **Tertiary Coral/Orange (`#FF8C52`)**: Introduces community warmth, social energy, and timely urgency. Deployed for pending tasks, alerts, community announcements, unpaid dues reminders, and high-impact calls to action.
- **Warm Cream / Light Surface Tint (`#FFF0C5`)**: Used selectively as a warm tinted substrate for urgent notices, broadcast banners (*pengumuman warga*), and festive community boards to soften harsh digital whites.
- **Modern Slate / White Neutrals**: 
  - Primary text and headings utilize `#0F172A` and `#1E293B` for uncompromised contrast and legibility.
  - Secondary metadata and helper text employ `#64748B`.
  - Borders and subtle dividing rules use `#E2E8F0`.
  - Global app canvas sits on `#F8FAFC`, allowing pure `#FFFFFF` cards to stand out with pristine crispness.

### Semantic Status Mappings
- **Lunas / Disetujui / Selesai (Success)**: Dark Emerald `#0D9488` text over `#CCFBF1` surface.
- **Belum Lunas / Tertunda (Warning / Action Required)**: Coral `#EA580C` text over `#FFEDD5` surface.
- **Dalam Proses (Info / Pending)**: Teal `#0284C7` text over `#E0F2FE` surface.
- **Kategori Warga (Tetap vs. Kontrak)**: Slate `#475569` on `#F1F5F9` for Permanent (*Warga Tetap*), and Deep Teal `#0F766E` on `#E6FFFA` for Contract (*Warga Kontrak*).

## Typography

**Plus Jakarta Sans** is selected as the unified typeface across headline, body, and label tiers. Its modern geometric structure, gentle curves, and generously open apertures deliver superior readability on mobile screens and small density displays, maintaining clarity even for low-dexterity users or bright outdoor lighting conditions.

### Usage Principles
- **Financial & Numerical Clarity**: Ledger tables, balance sheets, and dues breakdowns must render numbers with proportional figure alignments and tabular numbers (`font-variant-numeric: tabular-nums`) to ensure instant horizontal comparisons.
- **Headlines (`headline-xl` down to `headline-sm`)**: Used for page headers, ledger totals, and portal landing banners. Never use uppercase transformations for headlines to maintain an inviting, neighborly tone.
- **Body (`body-lg` to `body-sm`)**: Calibrated for high readability in dense documentation, official letters (*Surat Pengantar*), and activity logs.
- **Labels (`label-lg` to `label-sm`)**: Applied to status pills, field captions, card headers, and tab navigation, using medium-to-bold weights to guarantee rapid glanceability.

## Layout & Spacing

The layout model is constructed on a 12-column responsive fluid grid with strict mathematical cadence derived from an 8px base rhythm.

### Breakpoints & Canvas Bounds
- **Desktop (≥ 1280px)**: 12-column fluid grid, max-width bounded at `1440px`. Gutters sit at `1.5rem` (24px) with outer page margins at `2rem` (32px). Persistent 260px collapsible sidebar for administrative control.
- **Tablet (768px – 1279px)**: 8-column layout with `1rem` (16px) gutters and `1.5rem` (24px) outer margins. Collapsible floating navigation drawer.
- **Mobile (< 768px)**: 4-column layout with `0.75rem` (12px) gutters and `1rem` (16px) outer margins. App-like layout featuring a sticky top civic status bar and fixed bottom navigation for thumb-zone reachability.

### Content Arrangement
Information density must remain modular. Heavy data sets—such as monthly financial records (*Kas RT*) or roster lists (*Buku Induk Warga*)—collapse into scannable stacked cards on mobile views, while expanding into structured data grids on desktop screens.

## Elevation & Depth

Visual hierarchy relies on **crisp structural boundaries combined with soft, tinted ambient depth**. The interface rejects deep, heavy drop shadows in favor of a clean, breathable layering system that keeps official data accessible.

### Elevation Levels
- **Level 0 (Flat / Canvas)**: Background `#F8FAFC`. Zero elevation.
- **Level 1 (Base Cards & Modules)**: Pure white `#FFFFFF` surface bordered with a hairline stroke `1px solid #E2E8F0`. Soft ambient shadow: `box-shadow: 0 1px 3px 0 rgba(30, 41, 59, 0.05), 0 1px 2px -1px rgba(30, 41, 59, 0.03)`.
- **Level 2 (Interactive Cards / Hover / Dropdowns)**: Elevated to `box-shadow: 0 10px 15px -3px rgba(53, 159, 160, 0.08), 0 4px 6px -4px rgba(30, 41, 59, 0.04)`. A gentle tint of Teal `#359FA0` provides visual warmth upon interaction.
- **Level 3 (Modals / Floating Bottom Sheets)**: Centered action panels use `box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.08)`. Accompanied by a 30% slate backdrop overlay with a subtle 4px blur (`backdrop-filter: blur(4px)`).

## Shapes

The design system incorporates **Roundedness Level 2 (Rounded)**, creating an approachable and human touch across all components.

- **Base Radius (`0.5rem` / 8px)**: Standard form inputs, segmented tabs, dropdown menus, button groups, and table action trigger chips.
- **Card & Container Radius (`1rem` / 16px)**: Information cards, financial stat summaries, resident detail cards, and modal sheets.
- **Hero & Announcement Radius (`1.5rem` / 24px)**: Highlight banners (*Warta Warga*), emergency alert panels, and warm cream notification strips.
- **Pill Radius (`9999px`)**: Reserved strictly for status badges (*Lunas*, *Diproses*, *Warga Tetap*), micro action counters, and resident avatar placeholders.

## Components

### Buttons
- **Primary**: Solid Primary Teal `#359FA0` background with pure white text, 8px border-radius, font-weight 600. Subtle hover transition to deep teal `#2B8283`.
- **Secondary**: Mint tint `#E6FFFA` background with Primary Teal `#359FA0` text and an optional `#8AD6D1` border.
- **Accent / Alert**: Coral Orange `#FF8C52` background with white text, deployed for time-critical community actions (e.g., *Bayar Iuran Sekarang*, *Lapor Keamanan*).
- **Heights**: 44px on mobile for touch comfort; 40px standard on desktop.

### Chips & Status Badges
- Pill-shaped (`rounded-full`), `px-3 py-1`, utilizing `label-sm` (11px, bold uppercase tracking).
- **Lunas / Disetujui**: Green-teal tint (`#CCFBF1`) background, `#0D9488` text. Accompanied by a solid checkmark dot.
- **Belum Lunas / Tertunda**: Warm Coral tint (`#FFEDD5`) background, `#EA580C` text. Accompanied by an alert dot.
- **Diproses**: Sky Blue tint (`#E0F2FE`) background, `#0284C7` text.
- **Warga Tetap / Warga Kontrak**: Subtle slate tint (`#F1F5F9`) with `#475569` text for *Tetap*, and Mint tint (`#E6FFFA`) with `#0F766E` text for *Kontrak*.

### Information Cards
- Built on `#FFFFFF` surfaces with `1px solid #E2E8F0` and `1rem` (16px) corner radius.
- Cards feature a defined 3-part anatomy:
  1. *Header bar*: Title, sub-label, and top-right semantic status badge.
  2. *Content body*: Data labels with tabular numbers or key-value pairs.
  3. *Action footer*: Low-contrast divider border followed by utility actions (*Lihat Rincian*, *Unduh Kuitansi*).

### Input Fields & Controls
- **Inputs**: 42px height, 8px radius, border `1px solid #CBD5E1`. On focus, transitions to a 2px outer ring in Aqua `#8AD6D1` and border color `#359FA0`.
- **Checkboxes & Radios**: 20px size with Teal `#359FA0` fill when checked. Checkboxes have a 4px soft radius; radio buttons are fully circular.

### Transparent Financial Dashboard Widgets
- **Total Saldo Kas Card**: Deep Teal `#359FA0` hero container featuring tabular currency metrics in white, accompanied by secondary indicator pills (Total Pemasukan / Total Pengeluaran).
- **Income/Expense Sparklines**: Uses Mint `#8AD6D1` for credits/surplus and Coral `#FF8C52` for debits/expenditures.

### Notice Board Banner (*Warta Warga*)
- Implements the Warm Cream `#FFF0C5` tint as a soft surface with `#FF8C52` edge accenting and dark slate text, rendering community broadcasts and schedule notices with warmth and clear visibility.