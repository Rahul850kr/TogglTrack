import logo from './logo.svg';
import './App.css';
import Taskmanage from './components/Task/TaskManager';
import Candle from './components/Task/calen';
import WithSubnavigation from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
     <Taskmanage />
      {/* <WithSubnavigation /> */}
    </div>
  );
}

export default App;
