import Title from './components/UI/Title/Title';
import Card from './components/UI/Card/Card';
import MainContainer from './containers/MainContainer/MainContainer';
import ResultsContainer from './containers/ResultsContainer/ResultsContainer';

import './App.css';

function App() {
  return (
    <div className="app">
      <Card>
        <Title />
      </Card>
      <Card>
        <MainContainer />
      </Card>
      <Card>
        <ResultsContainer />
      </Card>
    </div>
  );
}

export default App;
