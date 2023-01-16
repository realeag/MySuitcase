import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import SnakeGame from './components/games/snakeGame';
import Body from './components/body/Body';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Body />
      
      <Routes>
        <Route path='/snakeGame' element={<SnakeGame />} />
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
