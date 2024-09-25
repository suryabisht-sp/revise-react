import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header, Home, PrivateRoutes } from './component';
import About from './component/AboutUs/About';
import {Landing} from './component';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
    <Routes>
      <Route
          path="/home"
          element={
            <PrivateRoutes fallback={Landing}>
              <Home/>
            </PrivateRoutes>
          }
        />        
        <Route path='/about' element={<About/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
