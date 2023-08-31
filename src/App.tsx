
import './App.css';
import Navbar from './components/Navbar';
import Body from "./components/Body"


function App() {
  return (
    <main>
    
    <div className='min-h-screen relative overflow-hidden  bg-cover bg-no-repeat  text-center text-white' style={ { backgroundImage : "url(./img/background.png)" ,  } }>
        <Navbar />
        <Body />
      </div>
      
      </main>
  );
}

export default App;
