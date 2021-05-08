import { useDispatch, useSelector } from 'react-redux';

import Title from './components/UI/Title/Title';
import Card from './components/UI/Card/Card';
import MainContainer from './containers/MainContainer/MainContainer';
import ResultsContainer from './containers/ResultsContainer/ResultsContainer';
import Button from './components/UI/Button/Button';

import { openTipCalculator } from './store/reducer';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const openTipApp = useSelector((state) => state.openTipCalculator);
  const openResults = useSelector((state) => state.openResultsSection);

  const openTipCalculatorHandler = () => {
    dispatch(openTipCalculator());
  };

  return (
    <div className="app">
      <Card>
        <Title />
        {openTipApp || (
          <Button isActionButton clicked={openTipCalculatorHandler}>
            Begin
          </Button>
        )}
      </Card>
      {openTipApp && (
        <Card>
          <MainContainer />
        </Card>
      )}
      {openResults && (
        <Card>
          <ResultsContainer />
        </Card>
      )}
    </div>
  );
}

export default App;
