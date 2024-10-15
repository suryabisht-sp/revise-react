import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header, Home, PrivateRoutes } from './component';
import About from './component/AboutUs/About';
import {Landing} from './component';
import Footer from './component/Footer/Footer';
import PerformanceChart from './component/Services/Performance/Performance';
import AuthLayout from './component/auth/layout';
import LoginForm from './component/auth/login';
import SignupForm from './component/auth/signup';

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
        <Route path='/services' element={<PerformanceChart/>}/>
         {/* Authentication Routes using AuthLayout */}
         <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<LoginForm />} />
          <Route path="/auth/signup" element={<SignupForm />} />
        </Route>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
