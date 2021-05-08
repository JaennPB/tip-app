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

  let customSection = null;
  if (showCustomTipInput) {
    customSection = (
      <>
        <label>Tip:</label>
        <input />
      </>
    );
  }

  const calculateHandler = () => {
    dispatch(calculateBill());
  };

  return (
    <div className={styles.container}>
      <form>
        <div className={styles.controls}>
          <div>
            <label>Your Bill:</label>
            <input />
          </div>
          <div>
            <p>Tip:</p>
            {showCustomTipInput || <Button isTipButton>10%</Button>}
            {showCustomTipInput || <Button isTipButton>15%</Button>}
            {showCustomTipInput || <Button isTipButton>20%</Button>}
            <Button clicked={showCustomTipHandler}>Custom</Button>
            {showCustomTipInput && customSection}
          </div>
        </div>
      </form>
      <Button isActionButton clicked={calculateHandler}>
        Calculate!
      </Button>
    </div>
  );
};

export default AppContainer;
