import './App.css';
import Breakfast from './components/Breakfast';
import Food from './components/Food';
import ToggleInputs from './components/ToggleInputs';

function App() {
  return (
    <div className='App'>
      <Breakfast>
        <Food foodName='toast' />
        <Food foodName='mushrooms' />
      </Breakfast>
      <input type='text' placeholder='tell me a joke!' />
      <ToggleInputs>
      <select name='type' id='joke-type'>
        <option>funny</option>
        <option>hilarious</option>
      </select>
      </ToggleInputs>
    </div>
  );
}

export default App;
