import './App.css';
import Breakfast from './components/Breakfast';
import DeepRename from './components/DeepRename';
import Food from './components/Food';
import Spy from './components/Spy';
import ToggleInputs from './components/ToggleInputs';

function App() {
  return (
    <div className='App'>
      <Breakfast overwrite='coffee'>
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
      <Spy>
        <input
          type='text'
          placeholder='Check the log'
          onChange={(e) => console.log(e.target.value, 'INPUT LOG <<<---')}
        />
      </Spy>
      <DeepRename>
        <div>
          <p>change me!</p>
        </div>
      </DeepRename>
    </div>
  );
}

export default App;
