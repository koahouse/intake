export const getContentStep = (step, isMobile) =>
  isMobile ? [0, 1, 2, 3, 4, 5, 5][step] : [0, 1, 1, 3, 3, 5, 5][step];
