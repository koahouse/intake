import React, { useRef, useState, useEffect } from 'react';

import styles from './styles.module.css';
import sea from './waves@2x.jpg';

export const Component = ({ containerWidth, step }) => {
  const ref = useRef(null);
  const [imageWidth, setImageWidth] = useState(null);
  const [left, setLeft] = useState(-10);

  const handleLoad = () => {
    setImageWidth(ref.current.offsetWidth);
  };

  useEffect(() => {
    if (!ref.current) return;

    ref.current.complete && handleLoad();
  }, [ref.current]);

  useEffect(() => {
    if (containerWidth === null) return;

    window.requestAnimationFrame(() =>
      setLeft(
        [
          -10,
          (containerWidth - imageWidth) / 3,
          ((containerWidth - imageWidth) * 2) / 3,
          containerWidth - imageWidth,
        ][step]
      )
    );
  }, [step, containerWidth, imageWidth]);

  return (
    <img
      alt="sea"
      className={styles.sea}
      onLoad={handleLoad}
      ref={ref}
      src={sea}
      style={{ left }}
    />
  );
};

Component.displayName = 'Sea';
