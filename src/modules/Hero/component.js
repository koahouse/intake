import React, { useEffect, useState } from 'react';

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

  const illustrationStep = getIllustrationStep(step);

  useEffect(() => {
    if (step !== 0) {
      window.requestAnimationFrame(() => setContentOpacity(0));
    }
    window.setTimeout(() => {
      window.requestAnimationFrame(() => {
        setContentOpacity(1);
        const nextContentStep = getContentStep(step);

        setContentStep(nextContentStep);
      });
    }, 600);
  }, [step]);

  return (
    <div className={styles.container}>
      <Sea step={illustrationStep} />
      <Boat step={illustrationStep} />
      <div className={styles.content} style={{ opacity: contentOpacity }}>
        {(!isMobile || contentStep === 0) && (
          <h1 className={styles.logo}>Oliva</h1>
        )}
        <h2 className={styles.heading}>
          {
            [
              'You’re on course to being back at your best',
              'Your future self feels great about this decision',
              '',
              'That’s the hard part over',
              '',
              'You’ve taken a strong first step. Now it’s our turn.',
            ][contentStep]
          }
        </h2>
        <Subheading>
          {
            [
              `One of the biggest challenges with therapy is taking that first step—so well done. We’ll make sure you start on the right foot.`,
              'To help you make the most of your intro meeting, we’ll start by getting to know you with a few questions. Answering personal questions isn’t always easy, so we really appreciate your openness.',
              '',
              'Now all you have to do is pick a time that suits you.',
              '',
              'That’s everything we need for now. We’ll be in touch to remind you about your intro meeting. You don’t need to bring or prepare anything, so sit back, relax, and know that you’re in good hands.',
            ][contentStep]
          }
        </Subheading>
        {contentStep === 0 && isMobile && (
          <Button onClick={() => setStep(1)}>Get started</Button>
        )}
        {contentStep === 1 && isMobile && (
          <Button onClick={() => setStep(2)}>Continue</Button>
        )}
        {contentStep === 3 && isMobile && (
          <Button onClick={() => setStep(4)}>Pick a time</Button>
        )}
        {contentStep === 5 && isMobile && (
          <React.Fragment>
            <Subheading isCentered={!isMobile}>
              You’ll receive an email with all the details.
            </Subheading>
            <div style={{ height: 100 }}></div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

Component.displayName = 'Hero';
