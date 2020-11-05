import React, { Fragment } from 'react';

import { getInterpolatedString } from '../../I18n';

const DELINEATOR = '|||';

export const getChargeStatement = (strings, Price, pack) => {
  const [before, after] = getInterpolatedString(
    strings.YOU_WILL_BE_CHARGED,
    DELINEATOR,
    pack
  ).split(DELINEATOR);

  return (
    <Fragment>
      {before}
      <Price />
      {after}
    </Fragment>
  );
};
