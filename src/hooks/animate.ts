import { useState, useEffect } from "react";

const useAnimate = () => {
  const [animate, setAnimate] = useState<boolean>(true);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const callAfterAnimateFn = (callback: () => void) => () => {
    setAnimate(false);
    setTimeout(() => {
      callback();
    }, 300);
  };

  const callAfterAnimate = (callback: () => void) => {
    setAnimate(false);
    setTimeout(() => {
      callback();
    }, 300);
  };

  return { animate, callAfterAnimate, callAfterAnimateFn, setAnimate };
};

export default useAnimate;
