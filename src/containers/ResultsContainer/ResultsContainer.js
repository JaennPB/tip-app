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
      <>
        <label>Number of people</label>
        <input type="number" />
        <p>Per person: $9.33</p>
      </>
    );
  }

  return (
    <div className={styles.container}>
      <div>Bill: $100</div>
      <div>Your Tip: 10%</div>
      <div>Total with Tip: $110</div>
      <div className={styles.divideControls}>
        <Button clicked={showDivideSectionHandler}>Divide</Button>
        {showDivideInput && divideSection}
      </div>
    </div>
  );
};

export default ResultsContainer;
