import { Variants } from "framer-motion";

// Define the direction type
type Direction = 'up' | 'down' | 'left' | 'right';


// Define the interface for the return type of fadeIn
interface FadeInOptions extends Variants {
  hidden: {
    y: number;
    x: number;
    opacity: number;
  };
  show: {
    y: number;
    x: number;
    opacity: number;
    transition: {
      type: string;
      duration: number;
      delay: number;
      ease: number[];
    };
  };
}

// Define the fadeIn function
export const fadeIn = (direction: Direction, delay: number): FadeInOptions => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
