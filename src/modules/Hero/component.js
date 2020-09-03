import React, { useEffect, useState, useRef, useCallback } from 'react';
import debounce from 'lodash.debounce';

import { useIsMobile } from '../../utils';
import { Button, Subheading } from '../ui';
import { Boat } from '../Boat';
import { Sea } from '../Sea';

import { getIllustrationStep } from './utils/getIllustrationStep';
import { getContentStep } from './utils/getContentStep';
import styles from './styles.module.css';

export const Component = ({ setStep, step }) => {
  const isMobile = useIsMobile();
  const [contentOpacity, setContentOpacity] = useState(1);
  const [contentStep, setContentStep] = useState(0);
  const [containerWidth, setContainerWidth] = useState(null);
  const ref = useRef(null);

  const illustrationStep = getIllustrationStep(step);

  const handleResize = useCallback(
    debounce(() => {
      setContainerWidth(ref.current.offsetWidth);
    }, 100)
  );

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    setContainerWidth(ref.current.offsetWidth);
  }, [ref.current]);

  useEffect(() => {}, [ref.current]);

  useEffect(() => {
    if (step !== 0) {
      window.requestAnimationFrame(() => setContentOpacity(0));
    }
    window.setTimeout(() => {
      window.requestAnimationFrame(() => {
        setContentOpacity(1);
        const nextContentStep = getContentStep(step, isMobile);

        setContentStep(nextContentStep);
      });
    }, 600);
  }, [step]);

  return (
    <div className={styles.container} ref={ref}>
      <Sea containerWidth={containerWidth} step={illustrationStep} />
      <Boat step={illustrationStep} />
      <div className={styles.mask} />
      {!isMobile && <h1 className={styles.logo}>Oliva</h1>}
      <div className={styles.content} style={{ opacity: contentOpacity }}>
        {isMobile && contentStep === 0 && (
          <h1 className={styles.logo}>Oliva</h1>
        )}
        <h2 className={styles.heading}>
          {
            [
              'You’re on course to being back at your best',
              'Understanding starts with a few questions',
              '',
              'That’s the hard part over',
              '',
              'You’ve taken your first step. Now it’s our turn.',
            ][contentStep]
          }
        </h2>
        <Subheading>
          {
            [
              `One of the biggest challenges with therapy is taking that first step—so well done. We’ll make sure you start on the right foot.`,
              'Talking about personal stuff isn’t always easy, so we really appreciate your openness.',
              '',
              'Now all you have to do is pick a time for your intro meeting, where one of our certified therapy experts will get to know you better.',
              '',
              'That’s everything we need for now.',
            ][contentStep]
          }
        </Subheading>
        {contentStep === 0 && isMobile && (
          <Button onClick={() => setStep(1)}>Get started</Button>
        )}
        {contentStep === 1 && isMobile && (
          <Button onClick={() => setStep(2)}>OK</Button>
        )}
        {contentStep === 3 && isMobile && (
          <Button onClick={() => setStep(4)}>Pick a time</Button>
        )}
        {contentStep === 5 && (
          <React.Fragment>
            <Subheading>
              We’ll be in touch to remind you about your intro meeting. You
              don’t need to prepare anything, so relax and know that you’re in
              good hands.
            </Subheading>
            <Subheading>
              In the meantime, you can{' '}
              <a href="https://www.instagram.com/radically_normal/">
                read therapy stories from people like you
              </a>
              .
            </Subheading>
            <div style={{ height: 100 }}></div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

Component.displayName = 'Hero';
