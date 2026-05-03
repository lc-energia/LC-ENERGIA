# Animation System

This project uses `framer-motion` to handle all animations.
We have a centralized and reusable animation system to ensure consistency and maintainability.

## Variants

We use variants to define reusable animation sequences.
The main variant is `fadeIn`, which can be found in `src/variants.ts`.

### `fadeIn(direction, delay)`

This variant creates a fade-in animation from a specified direction.

**Parameters:**

- `direction` (string): The direction from which the element should fade in. Can be `'up'`, `'down'`, `'left'`, or `'right'`.
- `delay` (number): The delay in seconds before the animation starts.

**Example:**

```jsx
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

const MyComponent = () => {
  return (
    <motion.div
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
    >
      Hello, world!
    </motion.div>
  );
};
```

## Counter Component

We have a `Counter` component that animates a number from a starting value to an end value.

**Props:**

- `from` (number): The starting number.
- `to` (number): The ending number.
- `suffix` (string): A suffix to be displayed after the number.

**Example:**

```jsx
import Counter from '@/components/Counter';

const MyComponent = () => {
  return <Counter from={0} to={100} suffix="+" />;
};
```

## Adding New Animations

When adding new animations, please consider the following:

- **Reusability:** If the animation is likely to be used in multiple places, create a new variant in `src/variants.ts`.
- **Consistency:** Ensure that the new animations are consistent with the existing ones in terms of duration, easing, and overall feel.
- **Performance:** Avoid animations that are too complex or that could impact the performance of the website.
