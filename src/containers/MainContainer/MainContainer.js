import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../../components/UI/Button/Button';
import { calculateBill } from '../../store/reducer';

import styles from './MainContainer.module.css';

const AppContainer = (props) => {
  const dispatch = useDispatch();
  const [showCustomTipInput, setShowCustomTipInput] = useState(false);

  const showCustomTipHandler = () => {
    setShowCustomTipInput(true);
  };

  let tipSection = (
    <div className={styles.buttonControls}>
      <label>Tip:</label>
      <Button isTipButton>10%</Button>
      <Button isTipButton>15%</Button>
      <Button isTipButton>20%</Button>
      <Button clicked={showCustomTipHandler}>Custom</Button>
    </div>
  );
  if (showCustomTipInput) {
    tipSection = (
      <div className={styles.customTipControls}>
        <label>Tip:</label>
        <input type="number" />
      </div>
    );
  }

  const calculateHandler = () => {
    dispatch(calculateBill());
  };

  return (
    <div className={styles.container}>
      <form>
        <div className={styles.controls}>
          <div className={styles.billControls}>
            <label>Your Bill:</label>
            <input type="number" />
          </div>
          {!showCustomTipInput && tipSection}
          {showCustomTipInput && tipSection}
        </div>
      </form>
      <Button isActionButton clicked={calculateHandler}>
        Calculate!
      </Button>
    </div>
  );
};

export default AppContainer;
