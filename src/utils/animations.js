export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

export const staggerContainer = {
  hidden: {},
  visible: { 
    transition: { staggerChildren: 0.1 } 
  }
};

export const slideInRight = {
  hidden: { x: "100%" },
  visible: { 
    x: 0, 
    transition: { type: "tween", duration: 0.4, ease: "easeOut" } 
  },
  exit: { 
    x: "100%", 
    transition: { type: "tween", duration: 0.3, ease: "easeIn" } 
  }
};
