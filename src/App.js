import './App.css';
import { Dropdown } from './components/Dropdown/Dropdown';
import { SingleTask } from './components/SingleTask/SingleTask';

function App() {
  return (
    <div className="app__wrap">
      <img src='/assets/logo.png' alt='logo'/>
      <Dropdown/>
      <SingleTask content={"This is a looooooooooooooooong task"}/>
    </div>
  );
}

export default App;
