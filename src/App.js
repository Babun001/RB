import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import ScrollToTop from './ScrollToTop';
import Home from './Pages/Home.Page';
import HomeCollection from './Pages/HomeCollection.page';
import OurPackagesPage from './Pages/OurPackages.Page';
import DoctorsGridPage from './Pages/DoctorsGrid.Page';
import FAQsPage from './Pages/FAQs.Page';
import CorporateWellnessPage from './Pages/CorporateWellness.Page';
import DoctorDetailsPage from './PageElements/DoctorsGridPageElements/DoctorDetailsPage';
import ViewReportsPage from './Pages/ViewReports.Page';
import LoginPage from './Pages/Login.Page';
import RegistrationPage from './Pages/Registration.Page';

// services pages
import PulmonologyPage from './Pages/ServicePages/Pulmonology.Page';
import GastroenterologyPage from './Pages/ServicePages/Gastroenterology.Page';
import RadiologyPage from './Pages/ServicePages/Radiology.Page';
import NeurologyPage from './Pages/ServicePages/Neurology.Page';
import DentalPage from './Pages/ServicePages/Dental.Page';
import DialysisPage from './Pages/ServicePages/Dialysis.Page';
import DermatologyPage from './Pages/ServicePages/Dermatology.Page';
import HomecarePage from './Pages/ServicePages/Homecare.Page';
import OphthalmologyPage from './Pages/ServicePages/Ophthalmology.Page';
import PhysiotherapyPage from './Pages/ServicePages/Physiotherapy.Page';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/doctors-grid/:id" element={<DoctorDetailsPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path='/collection' element={<HomeCollection/>}/>
          <Route path='/OurPackagesPage' element={<OurPackagesPage/>}/>
          <Route path='/doctors-grid' element={<DoctorsGridPage/>}/>
          <Route path='/view-reports' element={<ViewReportsPage/>}/>
          <Route path='/faqs' element={<FAQsPage/>}/>
          <Route path='/corporate-wellness' element={<CorporateWellnessPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/registration' element={<RegistrationPage/>}/>


          {/*services routes */}


          <Route path='/service/pulmonology' element={<PulmonologyPage/>}/>
          <Route path='/service/gastroenterology' element={<GastroenterologyPage/>}/>
          <Route path='/service/radiology' element={<RadiologyPage/>}/>
          <Route path='/service/neurology' element={<NeurologyPage/>}/>
          <Route path='/service/dental' element={<DentalPage/>}/>
          <Route path='/service/dialysis' element={<DialysisPage/>}/>
          <Route path='/service/dermatology' element={<DermatologyPage/>}/>
          <Route path='/service/homecare' element={<HomecarePage/>}/>
          <Route path='/service/ophthalmology' element={<OphthalmologyPage/>}/>
          <Route path='/service/physiotherapy' element={<PhysiotherapyPage/>}/>


        </Route>
      </Routes>
    </Router>
  );
}

export default App;
