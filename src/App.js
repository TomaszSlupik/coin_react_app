import './App.scss';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Coin from './components/Coin/Coin';
import Entrance from './components/Entrance/Entrance';
import Describe from './components/Describe/Describe';

function App() {
  return (
    <div className="App">
        <Router>
              <Header />
          <Routes>
              <Route path='/' element={<Entrance />} />
              <Route path='/' element={<Describe />} />
              <Route path='/coin' element={<Coin />} />
              <Route path=':coinId' element={<Coin />} />
          </Routes>
        </Router>
        
    </div>
  );
}

export default App;
