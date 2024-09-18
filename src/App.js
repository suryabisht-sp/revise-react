import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header, Home } from './component';

function App() {
  return (
    <div className="App">
      <Header/>
    <Routes>
      <Route path="/home" element={<Home/>}>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
