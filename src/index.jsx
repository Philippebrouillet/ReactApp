import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './index.css';
import Home from './pages/Home/index.jsx';
import Survey from './pages/Survey'
import Header from './components/Header';
import Results from './pages/Results'
import Freelances from './pages/Freelances'
//import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from './utils/style/context';
import Footer from './components/Footer';
import GlobalStyle from './utils/style/GlobalStyle';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <React.StrictMode>
        <BrowserRouter>
        
        <ThemeProvider>
        <GlobalStyle />
        <Header />
        
        
        <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="*" element={<Home />} />
        <Route path="/Results" element={<Results />} />
        <Route path="/Freelances" element={<Freelances />} />      
          
        </Routes>

        
        <Footer />
        
        </ThemeProvider>
        
        </BrowserRouter>
    </React.StrictMode>
);
               
           
           
  


