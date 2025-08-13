# Scroll Animations System

This project includes a comprehensive scroll animation system that triggers animations when elements come into view. All new sections should use these animations for a consistent user experience.

## Available Components

### 1. `useScrollAnimation` Hook

A custom hook that handles intersection observer logic.

```tsx
const { elementRef, isVisible } = useScrollAnimation<HTMLDivElement>({
  threshold: 0.1, // Trigger when 10% of element is visible
  rootMargin: "0px 0px -100px 0px", // Margin around viewport
  triggerOnce: false, // Animate every time element comes into view (default)
});
```

### 2. `AnimatedSection` Component

Wraps entire sections with scroll animations.

```tsx
<AnimatedSection
  className="py-16 bg-gray-50"
  animationType="slide-up"
  delay={1}
>
  <div className="container mx-auto">{/* Section content */}</div>
</AnimatedSection>
```

### 3. `AnimatedElement` Component

Animates individual elements within sections.

```tsx
<AnimatedElement
  as="h2"
  className="text-3xl font-bold"
  animationType="slide-left"
  delay={2}
>
  Animated Title
</AnimatedElement>
```

## Animation Types

- `slide-up`: Slides in from bottom
- `slide-left`: Slides in from left
- `slide-right`: Slides in from right
- `scale`: Scales up from 90% to 100%
- `fade`: Simple fade in

## Delay Options

Use `delay` prop (1-5) to create staggered animations:

- `delay={1}`: 0.1s delay
- `delay={2}`: 0.2s delay
- `delay={3}`: 0.3s delay
- `delay={4}`: 0.4s delay
- `delay={5}`: 0.5s delay

## CSS Classes

If you prefer using CSS classes directly:

```tsx
<div className="scroll-animate scroll-slide-up scroll-stagger-1">
  Content that will animate
</div>
```

Add `is-visible` class when element should be visible:

```tsx
<div
  className={`scroll-animate scroll-slide-up ${isVisible ? "is-visible" : ""}`}
>
  Content
</div>
```

## Best Practices

1. **Use `AnimatedSection` for entire sections** - Wrap complete sections for consistency
2. **Use `AnimatedElement` for individual items** - Great for cards, lists, or specific elements
3. **Apply staggered delays** - Create flowing animations with incremental delays
4. **Keep threshold consistent** - Use 0.1 (10%) for most cases
5. **Animations repeat on scroll** - Elements animate every time they come into view

## Examples

See `components/animation-examples.tsx` for complete examples of how to implement scroll animations in different scenarios.

## Current Implementation

The recognition section in the hero component demonstrates the scroll animation system:

- Title slides up from bottom
- Content slides in from left
- Award card slides in from right with scale effect

All future sections should follow this pattern for consistent user experience.
