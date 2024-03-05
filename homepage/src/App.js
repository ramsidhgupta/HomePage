
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import { Header } from './Header';

import CarrerPage from './CarrerPage';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import ConsultSerice from './ConsultSerice';
import SemiEngg from './SemiEngg';
import Footer from './Footer';


import TurnKey from './TurnKey';
import FiveG from './FiveG';
import ProjectOutsourcing from './ProjectOutsourcing';
import OffshoreDevelopment from './OffshoreDevelopment';
import ProgressBar from './ProgressBar';
import NewNav from './NavNew';

import LifeComp from './LifeComp'
import EmpQuotes1 from './EmpQuotes1';
import PhotoShow from './PhotoShow';
import AwardShow from './AwardShow';

function App() {
  return (
    <>
      <NewNav/>
      
    <Routes>
      <Route path="/" element={<Header/>}/>
      <Route path="/CarrierPage" element={<CarrerPage/>}/>
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/ContactUs" element={<ContactUs/>}/>
      <Route path="/SemiCondEngin" element={<SemiEngg/>}/>
      <Route path="/FiveGTech" element={<FiveG/>}/>
      <Route path="/TurnkeyServices" element={<TurnKey/>}/>
      <Route path="/ConsultServices" element={<ConsultSerice/>}/>
      <Route path="/ProjectOutSource" element={<ProjectOutsourcing/>}/>
      <Route path="/OffshoreDev" element={<OffshoreDevelopment/>}/>
      <Route path="/LifeAtTechsoc" element={<LifeComp/>}/>
      <Route path="/employee-quotes" element={<EmpQuotes1/>}/>
      <Route path="/photos-events" element={<PhotoShow/>}/>
      <Route path="/recognition-awards" element={<AwardShow/>}/> 
        <Route
          path="/values-mission"
          element={
            <div>
              <h1>values and mission</h1>
              <p>This is a paragraph with some content.</p>
            </div>
          }
        />
    </Routes>
      <ProgressBar/>
      <Footer/>
    </>  
  );
}

export default App;


