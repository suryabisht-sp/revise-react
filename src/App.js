import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './component';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/home" element={<Home/>}>

      </Route>
    </Routes>
    </div>
  );
}

export default App;
