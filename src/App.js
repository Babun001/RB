import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './Pages/Home.Page';
import HomeCollection from './Pages/HomeCollection.page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path='collection' element={<HomeCollection/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
