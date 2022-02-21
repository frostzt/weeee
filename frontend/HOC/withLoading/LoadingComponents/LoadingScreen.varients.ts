export const ContainerVarient = {
  initial: {
    y: '-100%',
    transition: {
      staggerChildren: 0.3,
    },
  },
  animated: {
    y: 0,
    transition: {
      duration: 0.8,
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
  exit: {
    y: '100%',
    transition: {
      duration: 1,
    },
  },
};

export const DotVarient = {
  initial: {
    y: 0,
  },
  animated: {
    y: -20,
    transition: {
      ease: 'easeInOut',
      // repeat: Infinity,
      yoyo: Infinity,
    },
  },
};
