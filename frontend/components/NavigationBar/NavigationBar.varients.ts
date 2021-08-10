export const containerVarient = {
  initial: {
    opacity: 0,
  },
  animated: {
    opacity: 1,
    transition: {
      duration: 0.8,
      when: 'beforeChildren',
    },
  },
};

export const optionVarient = {
  initial: {
    height: 0,
  },
  animated: {
    height: '6rem',
  },
  exit: {
    height: 0,
  },
};
