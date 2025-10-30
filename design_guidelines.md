# Design Guidelines: React Starter Application

## Design Approach
**System Selected:** Modern Developer Tool Aesthetic (inspired by Vite, Next.js, Linear)
**Rationale:** As a developer-focused starter template, this application prioritizes clarity, modern patterns, and clean architecture demonstration over marketing appeal. The design should feel professional, minimal, and immediately familiar to React developers.

## Core Design Principles
1. **Developer-First Interface**: Clean, readable, and functional
2. **Component Showcase**: Demonstrate React best practices through visual examples
3. **Minimal Aesthetics**: Let the code and structure shine
4. **Modern Typography**: Sharp, technical feel with excellent readability

---

## Typography System

**Font Families:**
- Primary: 'Inter' (Google Fonts) - All UI text, headings, body
- Code: 'JetBrains Mono' (Google Fonts) - Code snippets, technical details

**Type Scale:**
- Hero/Display: text-5xl (48px) - font-bold
- Page Headings: text-3xl (30px) - font-bold
- Section Headings: text-2xl (24px) - font-semibold
- Subheadings: text-xl (20px) - font-medium
- Body: text-base (16px) - font-normal
- Small/Meta: text-sm (14px) - font-normal
- Code: text-sm (14px) - font-mono

**Line Heights:**
- Headings: leading-tight (1.25)
- Body: leading-relaxed (1.625)
- Code: leading-relaxed (1.625)

---

## Layout System

**Spacing Primitives:** 
Use Tailwind units of 2, 4, 8, 12, 16, 24 for consistent rhythm
- Micro spacing: p-2, gap-2 (buttons, tight elements)
- Standard spacing: p-4, gap-4, m-4 (cards, general padding)
- Section spacing: p-8, py-12 (component separation)
- Large spacing: p-16, py-24 (major sections)

**Container System:**
- Max width: max-w-7xl (1280px)
- Content sections: max-w-4xl for text-heavy areas
- Full bleed when showing component examples

**Grid System:**
- Component showcase: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Feature comparison: grid-cols-1 md:grid-cols-2
- Mobile: Always single column

---

## Application Structure & Pages

### 1. Home/Welcome Page
**Layout:** Single-page scroll with distinct sections

**Hero Section (No Image - Code-First):**
- Centered content in max-w-4xl container
- Large heading: "React Starter Template" (text-5xl)
- Subheading explaining purpose (text-xl)
- Two prominent CTAs: "View Components" (primary) and "Documentation" (secondary)
- Subtle code snippet preview showing basic React component
- Height: min-h-screen flex items-center

**Quick Start Section:**
- Numbered steps (1-4) in grid layout (md:grid-cols-2)
- Each step in a card with terminal-style code block
- Commands like `npm install`, `npm start`
- Icon representing each step (terminal, rocket, code, check)

**Features Grid:**
- 6 feature cards in grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Each card: Icon + Title + Brief description
- Features: "React Router", "Tailwind CSS", "Hot Reload", "Component Library", "Best Practices", "TypeScript Ready"
- Cards with subtle border, padding p-8, rounded-lg

**Tech Stack Section:**
- Horizontal auto-scroll/grid showing technology logos/names
- React, Tailwind, Router, Vite/similar
- Clean, icon-based presentation

### 2. Components Showcase Page
**Layout:** Sidebar navigation + main content area

**Sidebar (Fixed):**
- Component categories: Buttons, Forms, Cards, Navigation, Modals, Tables
- Active state highlighting
- Width: w-64 on desktop, collapsible on mobile

**Main Content:**
- Each component section with:
  - Component name (text-2xl)
  - Live rendered example
  - Code snippet toggle (collapsed by default)
  - Variants demonstration
- Generous spacing between sections (mb-16)

**Component Examples to Include:**
- **Buttons**: Primary, Secondary, Outline, Disabled states, Icon buttons
- **Forms**: Text inputs, Textareas, Checkboxes, Radio buttons, Select dropdowns
- **Cards**: Basic card, Image card, Stat card, Product card
- **Navigation**: Header navbar, Tabs, Breadcrumbs
- **Feedback**: Alerts, Toasts (simulated), Loading spinners
- **Data Display**: Simple table, Badge, Avatar

### 3. About/Documentation Page
**Layout:** Documentation-style with table of contents

**Content Structure:**
- Left sidebar: Table of contents (sticky)
- Main content: Installation guide, folder structure, routing explanation, customization tips
- Right sidebar: Quick links, version info

---

## Component Library Specifications

### Navigation Header
- Fixed at top, w-full
- Height: h-16
- Logo/title on left, navigation links center, GitHub icon right
- Subtle border-b
- Responsive: Hamburger menu on mobile

### Footer
- Simple, centered layout
- Links to docs, GitHub, license info
- Built with React + Tailwind credit
- Padding: py-12

### Buttons
- Height: h-10 (default), h-12 (large)
- Padding: px-6
- Rounded: rounded-md
- Font: font-medium
- Transition: transition-all duration-200
- Primary: Solid background with subtle shadow
- Secondary: Border with transparent background
- Icon buttons: Square, w-10 h-10

### Cards
- Padding: p-6
- Border: border with subtle treatment
- Rounded: rounded-lg
- Shadow: shadow-sm on hover
- Background: Solid, clean background

### Form Inputs
- Height: h-10
- Padding: px-4
- Border: border with focus ring
- Rounded: rounded-md
- Font size: text-base
- Consistent focus states across all inputs

### Code Blocks
- Background: Distinct from page background
- Padding: p-4
- Rounded: rounded-lg
- Font: font-mono, text-sm
- Copy button in top-right corner
- Line numbers optional

---

## Responsive Behavior

**Breakpoints:**
- Mobile: Base (< 768px)
- Tablet: md (768px+)
- Desktop: lg (1024px+)
- Wide: xl (1280px+)

**Mobile Adaptations:**
- Stack all grid columns to single column
- Sidebar navigation becomes drawer/modal
- Reduce heading sizes by 1-2 steps
- Adjust spacing: py-24 → py-12, p-8 → p-4
- Full-width cards with minimal margin

---

## Icons
**Library:** Heroicons (via CDN)
- Use outline style for navigation, secondary actions
- Use solid style for primary actions, status indicators
- Size: w-5 h-5 (standard), w-6 h-6 (large)

---

## Visual Hierarchy & Emphasis

**Primary Actions:**
- Larger button size (h-12)
- Medium font weight
- Prominent placement
- Subtle shadow

**Secondary Information:**
- Reduced opacity or muted treatment
- Smaller text (text-sm)
- Less spacing

**Code Examples:**
- Clearly separated from prose content
- Distinct background
- Monospace font
- Optional syntax highlighting

---

## Animations & Interactions
**Use Sparingly:**
- Button hover: Subtle scale or shadow change (duration-200)
- Card hover: Lift effect with shadow
- Page transitions: Fade in (duration-300)
- Link hover: Underline slide-in
- NO complex scroll animations or parallax effects

---

## Images
**No Hero Image Required** - This is a code-first developer tool

**Optional Supporting Images:**
- Diagram showing folder structure (in documentation page)
- Screenshot of component examples (in features section)
- Technology logos for tech stack section

All images should be crisp, simple, and purposeful - not decorative.

---

## Accessibility
- All interactive elements keyboard accessible
- Focus states clearly visible with ring
- Semantic HTML throughout
- ARIA labels where needed
- Color contrast meeting WCAG AA standards
- Form labels properly associated

---

## Summary
This React starter template should feel like a professional developer tool - clean, functional, and modern. The design prioritizes clarity and usability while showcasing React best practices through well-crafted component examples. Every element serves a purpose, demonstrating both visual design and code organization that developers can learn from and build upon.