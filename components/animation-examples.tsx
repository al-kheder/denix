// Example usage of scroll animations for future sections

import AnimatedSection from "./animated-section";
import AnimatedElement from "./animated-element";

// Example 1: Animated Section with slide-up animation
export function ExampleSection() {
  return (
    <AnimatedSection
      className="py-16 bg-gray-50 dark:bg-gray-800"
      animationType="slide-up"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Section Title</h2>
        <p className="text-center text-gray-600 dark:text-gray-300">
          This entire section will animate on scroll
        </p>
      </div>
    </AnimatedSection>
  );
}

// Example 2: Individual elements with staggered animations
export function ExampleStaggeredSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <AnimatedElement
          as="h2"
          className="text-3xl font-bold text-center mb-12"
          animationType="slide-up"
        >
          Features
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedElement
            className="text-center p-6"
            animationType="slide-up"
            delay={1}
          >
            <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
            <p>Description of feature 1</p>
          </AnimatedElement>

          <AnimatedElement
            className="text-center p-6"
            animationType="slide-up"
            delay={2}
          >
            <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
            <p>Description of feature 2</p>
          </AnimatedElement>

          <AnimatedElement
            className="text-center p-6"
            animationType="slide-up"
            delay={3}
          >
            <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
            <p>Description of feature 3</p>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}

// Example 3: Mixed animations
export function ExampleMixedAnimations() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedElement className="space-y-6" animationType="slide-left">
            <h2 className="text-3xl font-bold">About Us</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Content slides in from the left
            </p>
          </AnimatedElement>

          <AnimatedElement
            className="flex justify-center"
            animationType="scale"
          >
            <div className="w-64 h-64 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">Scales In</span>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
