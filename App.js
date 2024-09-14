
import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './mainapp/Home';
import About from './mainapp/About';
import Registration from './mainapp/Registration';
import Login from './mainapp/Login';
import Adlogin from './mainapp/Adlogin';
import Dash from './userapp/Dash';
import AddQuery from './userapp/AddQuery';
import ViewPenQuery from './userapp/ViewPenQuery';
import Leadership from './mainapp/Leadership';
import Esg from './mainapp/Esg';

import Personal from './mainapp/Personal';
import Fall from './mainapp/Fall';
import Addash from './adminapp/Addash';
import Viewalluser from './adminapp/Viewalluser';
import Viewallpenquery from './adminapp/Viewallpenquery';
import Viewallproquery from './adminapp/Viewallproquery';
import Viewallcompquery from './adminapp/Viewallcompquery';
import ViewProQuery from './userapp/ViewProQuery';
import ViewCompQuery from './userapp/ViewCompQuery';

function App() {
  return (
  <>
  <div className='container-fluid'>
  <BrowserRouter>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/registration' element={<Registration/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/adlogin' element={<Adlogin/>}/>
  <Route path='/userDash/:id' element={<Dash/>}/>
  <Route path='/AddQuery/:id' element={<AddQuery/>}/>
  <Route path='/ViewPenQuery/:id' element={<ViewPenQuery/>}/>
  <Route path='/leadership' element={<Leadership/>}/>
  <Route path='/esg' element={<Esg/>}/>
  <Route path='/Personal' element={<Personal/>}/>
  <Route path='/Fall' element={<Fall/>}/>
  <Route path='/addash' element={<Addash/>}/>
  <Route path='/viewalluser' element={<Viewalluser/>}/>
  <Route path='/viewallpenquery' element={<Viewallpenquery/>}/>
  <Route path='/viewallproquery' element={<Viewallproquery/>}/>
  <Route path='/viewallcompquery' element={<Viewallcompquery/>}/>
  <Route path='/viewProQuery/:id' element={<ViewProQuery/>}/>
  <Route path='/viewCompQuery/:id' element={<ViewCompQuery/>}/>
 </Routes>
  </BrowserRouter>
  </div>
  </>
     
  );
}

export default App;
