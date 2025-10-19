# 🎨 Chatbot UI Design Specifications

## Component Overview

### Floating Chat Button
```
┌─────────────────────────────────────┐
│                                     │
│         YOUR PORTFOLIO              │
│                                     │
│                                     │
│                                     │
│                                     │
│                              ┌────┐ │
│                              │ 💬 │ │ ← Gradient button
│                              └────┘ │    (Blue → Purple)
└─────────────────────────────────────┘
```

**Button Specifications:**
- Size: 64px × 64px
- Border-radius: 50% (perfect circle)
- Gradient: Linear from #3B82F6 (blue) to #8B5CF6 (purple)
- Shadow: 2xl (0 25px 50px -12px rgba(0,0,0,0.25))
- Hover: Scale 1.1x
- Active: Scale 0.95x
- Icon: Message bubble (open) / X (close)

---

## Chat Window Layout

```
┌──────────────────────────────────────┐
│ 👤 Karan's Assistant          ━ □ ✕ │ ← Header (Gradient)
├──────────────────────────────────────┤
│                                      │
│  ┌──────────────────────────────┐   │
│  │ Hi! I'm Karan's assistant... │   │ ← Bot Message
│  └──────────────────────────────┘   │   (Blue gradient)
│                                      │
│  ┌──────────────────────────────┐   │
│  │ What would you like to know? │   │
│  │                              │   │
│  │ ┌─────────┬─────────┐       │   │
│  │ │📝 Summary│💼 Skills│       │   │ ← Quick Options
│  │ ├─────────┼─────────┤       │   │   (Grid 2×3)
│  │ │🏢 Exp   │🎓 Edu   │       │   │
│  │ ├─────────┼─────────┤       │   │
│  │ │🚀 Projects│📧 Contact│     │   │
│  │ └─────────┴─────────┘       │   │
│  └──────────────────────────────┘   │
│                                      │
│         ┌──────────────────────┐    │
│         │ Tell me about skills │    │ ← User Message
│         └──────────────────────┘    │   (Purple gradient)
│                                      │
│  ┌──────────────────────────────┐   │
│  │ Karan is proficient in...   │   │ ← Bot Response
│  └──────────────────────────────┘   │
│                                      │
├──────────────────────────────────────┤
│ [Type your message...]  │   Send   │ │ ← Input Area
└──────────────────────────────────────┘
```

**Chat Window Specifications:**
- Width: 380px
- Height: 550px
- Border-radius: 16px
- Border: 2px solid (gray-200 light / gray-700 dark)
- Shadow: 2xl
- Background: White (light) / #111827 (dark)

---

## Color Palette

### Light Mode
```
Primary Blue:   #3B82F6 ███████
Purple:         #8B5CF6 ███████
Background:     #FFFFFF ███████
Input BG:       #F9FAFB ███████
Border:         #E5E7EB ███████
Text:           #1F2937 ███████
User Message:   #8B5CF6 ███████
Bot Message:    #3B82F6 ███████
```

### Dark Mode
```
Primary Blue:   #1E40AF ███████
Purple:         #7C3AED ███████
Background:     #111827 ███████
Input BG:       #1F2937 ███████
Border:         #374151 ███████
Text:           #F9FAFB ███████
User Message:   #7C3AED ███████
Bot Message:    #374151 ███████
```

---

## Quick Option Buttons

### Button Grid (2 columns)
```
┌───────────────┬───────────────┐
│  📝 Summarize │  💼 Skills    │
├───────────────┼───────────────┤
│  🏢 Experience│  🎓 Education │
├───────────────┼───────────────┤
│  🚀 Projects  │  📧 Contact   │
└───────────────┴───────────────┘
```

**Button Specifications:**
- Padding: 8px 12px
- Border-radius: 8px
- Font-size: 12px
- Font-weight: 500 (medium)
- Gap: 8px between buttons
- Gradient: Gray (dark mode) / Blue-Purple (light mode)
- Hover: Scale 1.05x + shadow increase
- Active: Scale 0.95x

---

## Message Types

### Bot Message
```
┌─────────────────────────────────┐
│ 👤 [Avatar]                     │
│    ┌────────────────────────┐  │
│    │ Message content here...│  │
│    └────────────────────────┘  │
└─────────────────────────────────┘
```
- Avatar: 40px circle with gradient background
- Border-radius: 12px
- Padding: 10px 14px
- Gradient: #3B82F6 → #8B5CF6
- Animation: Slide in from left (0.3s)

### User Message
```
┌─────────────────────────────────┐
│                  ┌─────────────┐│
│                  │User message ││
│                  └─────────────┘│
└─────────────────────────────────┘
```
- Align: Right
- Border-radius: 12px
- Padding: 10px 14px
- Gradient: #8B5CF6 → #7C3AED
- Animation: Slide in from right (0.3s)

---

## Social Media Buttons

### LinkedIn Button
```
┌────────────────────────────────────┐
│  in  Visit LinkedIn Profile   →   │
└────────────────────────────────────┘
```
- Color: #0A66C2 (LinkedIn blue)
- Icon: LinkedIn logo (16px)
- Border-radius: 8px
- Padding: 8px 16px
- Shadow: 0 2px 6px rgba(0,0,0,0.15)
- Hover: Darken + Scale 1.05x

### GitHub Button
```
┌────────────────────────────────────┐
│  🐙  Check out GitHub    →        │
└────────────────────────────────────┘
```
- Color: #24292e (GitHub dark)
- Icon: GitHub logo (16px)
- Same styling as LinkedIn button

---

## Animations

### Message Animations
```css
Bot Message:
  0%: opacity: 0, translateX(-20px)
  100%: opacity: 1, translateX(0)

User Message:
  0%: opacity: 0, translateX(20px)
  100%: opacity: 1, translateX(0)

Duration: 0.3s
Easing: ease
```

### Button Animations
```css
Hover: scale(1.05)
Active: scale(0.95)
Duration: 0.2s
Easing: ease
```

### Chat Toggle
```css
Open: scale(1.1) → 1.0
Close: scale(1.0) → 0.95 → 1.0
Duration: 0.3s
```

---

## Responsive Behavior

### Desktop (≥1024px)
- Fixed position: bottom-right (24px, 24px)
- Full size: 380px × 550px
- All features visible

### Tablet (768px - 1023px)
- Fixed position: bottom-right (20px, 20px)
- Full size maintained
- Overlays content

### Mobile (<768px)
- Full width with 16px margins
- Height: 500px
- Fixed position: bottom-center

---

## Accessibility Features

✓ ARIA labels on buttons
✓ Keyboard navigation support
✓ Focus indicators
✓ High contrast mode compatible
✓ Screen reader friendly
✓ Touch-friendly (44px minimum touch targets)

---

## Performance Optimizations

- Lazy loaded (not in initial bundle)
- CSS animations (GPU accelerated)
- Minimal re-renders
- No external API calls
- Static data (fast responses)
- Optimized SVG icons

---

## Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | 90+     | ✅ Full |
| Firefox | 88+     | ✅ Full |
| Safari  | 14+     | ✅ Full |
| Edge    | 90+     | ✅ Full |
| Mobile  | Latest  | ✅ Full |

---

This design creates a modern, professional chatbot that matches your portfolio's aesthetic while providing an excellent user experience!
