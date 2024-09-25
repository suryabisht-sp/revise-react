import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header} from './component';
import About from './Pages/AboutUs/About';
import {Landing, Home, Signin } from './Pages';
import Footer from './component/Footer/Footer';
import { useRef } from 'react';
import MainLayout from './component/Layout/MainLayout/MainLayout';
import PrivateRoutes from './HOC/PrivateRoutes/PrivateRoutes';

function App() {
  const registerSectionRef = useRef(null); 

  const handleRegisterClick = () => {
    registerSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div className="App">
    <Routes>
    <Route element={<MainLayout onRegisterClick={handleRegisterClick} />}>
      <Route
          path="/"
          element={
            <PrivateRoutes fallback={Landing} registerRef={registerSectionRef}>
              <Home registerRef={registerSectionRef} />
            </PrivateRoutes>
          }
        />  
          <Route path='/about' element={<About/>}/>
        </Route>     
         
        <Route path='/signin' element={<Signin/>}/>
    </Routes>

    </div>
  );
}

export default App;
