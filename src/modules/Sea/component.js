import React, { useRef, useState, useEffect } from 'react';

import styles from './styles.module.css';
import sea from './waves@2x.jpg';

export const Component = ({ step }) => {
  const ref = useRef(null);
  const [imageWidth, setImageWidth] = useState(null);
  const [windowInnerWidth, setWindowInnerWidth] = useState(null);
  const [left, setLeft] = useState(-10);

  useEffect(() => setWindowInnerWidth(window.innerWidth), []);

  useEffect(() => {
    if (!ref.current) return;

    setImageWidth(ref.current.offsetWidth);
  }, [ref.current]);

  useEffect(() => {
    window.requestAnimationFrame(() =>
      setLeft(
        {
          0: -10,
          1: (windowInnerWidth - imageWidth) / 3,
          2: ((windowInnerWidth - imageWidth) * 2) / 3,
          3: windowInnerWidth - imageWidth,
        }[step]
      )
    );
  }, [step]);

  return (
    <img
      alt="sea"
      className={styles.sea}
      ref={ref}
      src={sea}
      style={{ left }}
    />
  );
};

Component.displayName = 'Sea';
