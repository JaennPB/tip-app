import { useState } from 'react';

import Button from '../../components/UI/Button/Button';

import styles from './ResultsContainer.module.css';

const ResultsContainer = (props) => {
  const [showDivideInput, setShowDivideInput] = useState(false);

  const showDivideSectionHandler = () => {
    setShowDivideInput(true);
  };

  let divideSection = null;
  if (showDivideInput) {
    divideSection = (
      <div className={styles.divideInput}>
        <input type="number" placeholder="Number of people" />
        <span>Per person: $9.33</span>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.billInfo}>
        <p className={styles.billBlock}>
          Bill: <span>$100</span>
        </p>
        <p className={styles.billBlock}>
          Your Tip: <span>$10 (10%)</span>
        </p>
      </div>
      <div className={styles.calcResults}>
        <p
          className={`${styles.totalBlock} ${
            showDivideInput && styles.divideIsOpen
          }`}
        >
          Total with Tip: <span>$110</span>
        </p>
        {showDivideInput || (
          <Button clicked={showDivideSectionHandler}>Divide</Button>
        )}
        {showDivideInput && divideSection}
      </div>
    </div>
  );
};

export default ResultsContainer;
