const springTransition = {
  type: 'spring',
  bounce: 0.4,
  duration: 1
};

export const bounceUp = (from, delay, bounce, duration) => ({
  offscreen: {
    y: from,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      delay: delay,
      bounce: bounce,
      duration: duration
    }
  }
});

export const slideIn = {
  offscreen: {
    x: '-100%',
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: springTransition
  }
};

export const zoomIn = (delay, duration) => {
  return {
    offscreen: {
      scale: 0,
      opacity: 0
    },
    onscreen: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay: delay,
        duration: duration,
        ease: 'easeOut'
      }
    }
  };
};

export const ease = (delay, duration) => {
  return {
    offscreen: {
      opacity: 0
    },
    onscreen: {
      opacity: 1,
      transition: {
        type: 'tween',
        delay: delay,
        duration: duration,
        ease: 'easeOut'
      }
    }
  };
};
