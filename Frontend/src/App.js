
import './App.css';
import Login from './comp/Login';
import Signup from './comp/Signup';
import Navbar from './components/Navbar/Navbar';
import MainHome from './Homepage/MainHome';




function App() {
  return (
    <div className="App">

      <Navbar/>
      <Login/>
      {/* <Signup/> */}
       {/* <MainHome/> */}
    
    </div>
  );
}

export default App;
