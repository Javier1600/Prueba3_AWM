import './Styles/App.css';
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Main from './Views/Main';
import PirateList from './Components/PirateList';
import Detail from './Views/detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/pirates" element={<PirateList/>}/>
          <Route path="/pirate/:id" element={<Detail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
