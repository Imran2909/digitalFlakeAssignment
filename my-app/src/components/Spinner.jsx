import React from 'react';
import styles from './styles/Spinner.module.css'; // Import the CSS module

const Spinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
      <p className={styles.message}>Please wait for some moments...</p>
    </div>
  );
};

export default Spinner;
