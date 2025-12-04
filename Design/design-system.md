# Luminious Printing — Design System

This design system defines the visual and functional identity for the Luminious Printing website.  
Cursor will use this file as a reference when building components and styling.

---

# 1. Brand Identity

**Brand Name:** Luminious Printing  
**Voice:** Clear, professional, helpful  
**Tone Style:**  
- Short, sharp paragraphs  
- Benefits-first language  
- Plain-language explanation of print concepts  
- No unnecessary jargon  

---

# 2. Color System

| Token | Hex |
|-------|------|
| Primary | #0A0A0A |
| Accent | #2563EB |
| Neutral 900 | #0F172A |
| Neutral 700 | #334155 |
| Neutral 500 | #64748B |
| Neutral 300 | #CBD5E1 |
| Neutral 100 | #F1F5F9 |
| Background | #FFFFFF |
| Success | #16A34A |
| Warning | #D97706 |
| Error | #DC2626 |

Usage Guidelines:  
- Headings: Primary  
- Buttons: Accent (white text)  
- Background sections: Neutral 100 or White  
- Borders: Neutral 300  
- Footer: Neutral 900 with white text  

---

# 3. Typography

**Font Family:** Inter  
**Headings Weight:** 600–700  
**Body Weight:** 400–500  

| Text Style | Size | Weight |
|------------|------|--------|
| h1 | 36–44 px | 700 |
| h2 | 28–32 px | 600 |
| h3 | 22–24 px | 600 |
| Body | 16–18 px | 400–500 |
| Small | 14 px | 400 |

- Max line length: 60–75 characters  
- Headings should be confident and minimal  
- Avoid long centered paragraphs  

---

# 4. Spacing System

Use an 8-based spacing scale:

4, 8, 12, 16, 20, 24, 32, 40, 48, 64  

Section spacing:  
- Desktop: 88–120 px  
- Mobile: 56–80 px  

---

# 5. Grid & Layout

- Max container width: **1200 px**  
- Gutter widths:  
  - Desktop: 24 px  
  - Tablet: 16 px  
  - Mobile: 12 px  
- Responsive breakpoints:  
  - 640  
  - 768  
  - 1024  
  - 1280  

---

# 6. Radius & Shadows

- Component radius: **16 px**  
- Card shadow: subtle, low elevation  
- Avoid harsh shadows  

---

# 7. Imagery Guidelines

### Category Images
- Size: **1600 × 900 px**
- Style: clean, isolated product or environment shot
- Avoid placing text on images

### Product Images
- Size: **1200 × 1200 px**
- Neutral background  
- 2–6 supporting detail shots  

### Do:
- Use consistent lighting  
- Keep backgrounds clean  
- Showcase details  

### Don’t:
- Add watermarks or text over images  

---

# 8. Iconography

- Library: **lucide-react**  
- Sizes:  
  - Inline icons: 20–24 px  
  - Feature icons: 32 px  
- Style: outline, minimal  

---

# 9. Components

## Header
- Left-aligned logo  
- Right-aligned nav links  
- Sticky at the top  
- Mobile menu slides in from the left  

## Footer
- 2–3 columns  
- Legal links at bottom  

## Buttons
- **Primary:** Accent background, white text  
- **Secondary:** Neutral border, neutral hover  

## Cards
- Radius: 16 px  
- Shadow: subtle  
- Padding: 24 px  

## Tabs (PDP)
- Use **shadcn/ui Tabs**  
- Tabs:  
  - Details  
  - File Prep  
  - FAQs  

## Spec Table
Two-column table:  
- Column 1: Spec Name  
- Column 2: Value  
- Use alternating Neutral 100 background rows  

## Forms
- Labels above fields  
- Required fields with asterisk  
- Error messages in red  
- Success state routes to `/thank-you`  

---

# 10. Content Patterns

### Category Card Structure
- Image  
- Title  
- Short description  
- CTA: “View products”  

### PDP Structure
**Above the Fold**  
- Title  
- 3–5 bullets  
- Hero image  
- CTA scroll to inquiry form  

**Tabs Section**  
- Details  
- File Prep (bleed, trim, mask layers, resolution)  
- FAQs  

---

# 11. Do & Don’t Rules

### Do
- Keep text minimal  
- Use consistent spacing  
- Write clear, helpful descriptions  
- Keep category titles and slugs matching  

### Don’t
- Introduce new colors  
- Overuse bold text  
- Add decorative borders or gradients  
- Center long text blocks  

---

# 12. Accessibility

- Minimum contrast ratio: **4.5:1**  
- Keyboard focus rings must be visible  
- All images require alt text  
- Link hover: underline + color shift  

---

# End of Design System
