import './App.css';
import Home from './components/home/index';
import { Routes, Route, Link } from 'react-router-dom';
import CategoryList from './components/category-list/CategoryList';
import NavCategories from './components/navbar/navbar';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';
import StaticPage from './components/static-page/StaticPage';



function App() {
  return (
    <div className="container">
      <NavCategories/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path=":categoryId" element={<CategoryList/>}/>
          {/* <Route path="page/" element={<Outlet />} >
            <Route path=":pageId" element={<StaticPage />} /> */}
          {/* </Route> */}
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
