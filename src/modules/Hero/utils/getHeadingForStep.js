export const getHeadingForStep = (
  {
    YOUR_JOURNEY_STARTS_HERE,
    YOURE_MAKING_THE_RIGHT_CHOICE,
    TIME_FOR_YOU,
    TAKE_A_BREATH,
  },
  step
) =>
  ({
    0: YOUR_JOURNEY_STARTS_HERE,
    1: YOURE_MAKING_THE_RIGHT_CHOICE,
    2: TIME_FOR_YOU,
    3: TAKE_A_BREATH,
  }[step]);
