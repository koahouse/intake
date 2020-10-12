export const getContentStep = (step, isMobile) =>
  isMobile ? [0, 1, 2, 3, 4, 5, 5, 6][step] : [0, 1, 1, 3, 3, 3, 3, 6][step];
