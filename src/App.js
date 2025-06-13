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

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path='/collection' element={<HomeCollection/>}/>
          <Route path='/OurPackagesPage' element={<OurPackagesPage/>}/>
          <Route path='/doctors-grid' element={<DoctorsGridPage/>}/>
          <Route path="/doctors-grid/:id" element={<DoctorDetailsPage />} />
          <Route path='/faqs' element={<FAQsPage/>}/>
          <Route path='/corporate-wellness' element={<CorporateWellnessPage/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
