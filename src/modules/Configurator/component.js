import React, { useState, useEffect } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { Subheading } from '../ui';
import { useLanguageCode, useSetLanguageCode, useStrings } from '../I18n';
import { useIsIndividual, useSetIsIndividual } from '../Pricing';

import styles from './styles.module.css';

const LANGUAGE_OPTIONS = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Castellano' },
];

export const Component = () => {
  const languageCode = useLanguageCode();
  const setLanguageCode = useSetLanguageCode();
  const isIndividual = useIsIndividual();
  const setIsIndividual = useSetIsIndividual();
  const strings = useStrings();
  const [languageValue, setLanguageValue] = useState(
    LANGUAGE_OPTIONS.find(({ value }) => value === languageCode)
  );

  const coupleOptions = [
    { value: 'individual', label: strings.ME },
    { value: 'couple', label: strings.MY_PARTNER_AND_ME },
  ];

  const [coupleValue, setCoupleValue] = useState(
    coupleOptions[isIndividual ? 0 : 1]
  );

  useEffect(() => setLanguageCode(languageValue.value), [languageValue]);

  useEffect(() => setIsIndividual(coupleValue.value === 'individual'), [
    coupleValue,
  ]);

  useEffect(
    () =>
      setCoupleValue(
        coupleOptions.find(({ value }) => coupleValue.value === value)
      ),
    [languageCode]
  );

  return (
    <div className={styles.container}>
      <Subheading>{strings.I_WANT_THERAPY_IN} </Subheading>
      <Subheading>
        <Dropdown
          arrowClassName={styles.dropdownArrow}
          className={styles.dropdownRoot}
          controlClassName={styles.dropdownControl}
          menuClassName={styles.dropdownMenu}
          onChange={setLanguageValue}
          options={LANGUAGE_OPTIONS}
          value={languageValue}
        />
      </Subheading>
      <Subheading> {strings.FOR} </Subheading>
      <Subheading>
        <Dropdown
          arrowClassName={styles.dropdownArrow}
          className={styles.dropdownRoot}
          controlClassName={styles.dropdownControl}
          menuClassName={styles.dropdownMenu}
          onChange={setCoupleValue}
          options={coupleOptions}
          value={coupleValue}
        />
      </Subheading>
    </div>
  );
};

Component.displayName = 'Configurator';
