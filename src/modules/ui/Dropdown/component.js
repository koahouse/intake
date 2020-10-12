import React, { Fragment, useState, useEffect, useRef } from 'react';
import ReactDropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import styles from './styles.module.css';

export const Component = ({ onChange, options, value }) => {
  const [isMenuRightAligned, setIsMenuRightAligned] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if (!ref.current || !ref.current.getBoundingClientRect) return;

    const availableSpace =
      window.innerWidth - ref.current.getBoundingClientRect().x;

    setIsMenuRightAligned(availableSpace < 130);
  }, []);

  return (
    <Fragment>
      <span ref={ref} />
      <ReactDropdown
        arrowClassName={styles.dropdownArrow}
        className={styles.dropdownRoot}
        controlClassName={styles.dropdownControl}
        menuClassName={`${styles.dropdownMenu} ${
          isMenuRightAligned && styles.isMenuRightAligned
        }`}
        onChange={onChange}
        options={options}
        value={value}
      />
    </Fragment>
  );
};

Component.displayName = 'Dropdown';
