import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header, Home, PrivateRoutes } from './component';
import About from './component/AboutUs/About';

function App() {
  return (
    <div className="App">
      <Header/>
    <Routes>
     
      <Route
          path="/home"
          element={
            <PrivateRoutes>
              <Home/>
            </PrivateRoutes>
          }
        />
        <Route path='/about' element={<About/>}/>
    </Routes>
    </div>
  );
}

export default App;
