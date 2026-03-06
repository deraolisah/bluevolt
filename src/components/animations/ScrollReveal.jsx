import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  delay = 0,
  duration = 0.6,
  distance = 50,
  className = '',
  once = false, // Changed to false by default
  threshold = 0.2,
  ...props 
}) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once, amount: threshold });

  // Define direction-based animations
  const getVariants = () => {
    const directions = {
      up: { y: distance, x: 0 },
      down: { y: -distance, x: 0 },
      left: { x: distance, y: 0 },
      right: { x: -distance, y: 0 },
      fade: { y: 0, x: 0, opacity: 0 },
    };

    const initial = directions[direction] || directions.up;

    return {
      hidden: { 
        ...initial, 
        opacity: 0,
      },
      visible: { 
        y: 0, 
        x: 0, 
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1],
        }
      }
    };
  };

  // Control animations based on view state
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      variants={getVariants()}
      initial="hidden"
      animate={controls}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Staggered children container
export const StaggerContainer = ({ 
  children, 
  delay = 0.2,
  staggerDelay = 0.1,
  className = '',
  once = false, // Changed to false by default
  threshold = 0.2,
  ...props 
}) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once, amount: threshold });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: delay,
            staggerChildren: staggerDelay,
          }
        }
      }}
      initial="hidden"
      animate={controls}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Staggered item
export const StaggerItem = ({ 
  children, 
  direction = 'up',
  distance = 50,
  className = '',
  ...props 
}) => {
  const getVariants = () => {
    const directions = {
      up: { y: distance },
      down: { y: -distance },
      left: { x: distance },
      right: { x: -distance },
    };

    const initial = directions[direction] || directions.up;

    return {
      hidden: { 
        ...initial, 
        opacity: 0,
      },
      visible: { 
        y: 0, 
        x: 0, 
        opacity: 1,
        transition: {
          type: "spring",
          damping: 15,
          stiffness: 100,
        }
      }
    };
  };

  return (
    <motion.div
      variants={getVariants()}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;