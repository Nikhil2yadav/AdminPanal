import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Dashboard/Home';
import Login from './components/Login/Login';
import Layout from './Layout';
import Profile from './components/user-Profile/Profile';
import Header from './components/Header/Header';
import Sidedbar from './components/Dashboard/Sidedbar';
import Footer from './components/Footer/Footer';
import UserSetting from './components/setting/UserSetting';

import "./App.css"
import User from './components/User/User';
import Company from './components/Company-Info/Company';
import AddProduct from './components/Product/AddProduct';
import Addorder from './components/Order/AddOrder';
import ManageUserPage from './components/User/ManageUserPage';
import Manageproduct from './components/Product/Manageproduct';
import Manageorder from './components/Order/Manageorder';
import Table from './components/Tables/Table';
import Category from './components/Category/Category';
import Store from './components/Store/Store';
import Managegroup from './components/Group/Managegroup';
import ProductWise from './components/Reports/ProductWise';
import StoreWise from './components/Reports/StoreWise';

function App() {
  return (
    <Router>
    <div className='app-container'>
    <Routes>
          <Route path='/' element={<Login />} />
          <Route element={<ProtectedRoute/>}>
          {/* <Route path='/' element={<Home/>}/> */}
            <Route path='/Dashboard' element={<Home />} />
            <Route path='/Adduser' element={<User/>}/>
            <Route path='/Manageuser' element={<ManageUserPage/>}/>
            <Route path='/Managegroup' element={<Managegroup/>}/>
            <Route path='/Store' element={<Store/>}/>
            <Route path='/Table' element={<Table/>}/>
            <Route path='/Category' element={<Category/>}/>
            <Route path='/AddProduct' element={<AddProduct/>}/>
            <Route path='/Manageproduct' element={<Manageproduct/>}/>
            <Route path='/AddOrder' element={<Addorder/>}/>
            <Route path='/Manageorder' element={<Manageorder/>}/>
            <Route path='/Totalpaidorder' element={<ProductWise/>}/>
            <Route path='/StoreWise' element={<StoreWise/>}/>
            <Route path='/Company-info' element={<Company/>}/>
            <Route path='/User-profile' element={<Profile/>} />
            <Route path='/Setting' element={<UserSetting/>}/>
          </Route>
        </Routes>
    </div>
        
      
    </Router>
  );
}
function ProtectedRoute(){
  return(
    <>
      <Header/>
      <div className='main-container'>
      <Sidedbar/>
      <Routes>
      {/* <Route path='/' element={<Home/>}/> */}
            <Route path='/Dashboard' element={<Home />} />
            <Route path='/Adduser' element={<User/>}/>
            <Route path='/Manageuser' element={<ManageUserPage/>}/>
            <Route path='/Managegroup' element={<Managegroup/>}/>

            <Route path='/Store' element={<Store/>}/>
            <Route path='/Table' element={<Table/>}/>
            <Route path='/Category' element={<Category/>}/>

            <Route path='/AddProduct' element={<AddProduct/>}/>
            <Route path='/Manageproduct' element={<Manageproduct/>}/>
            <Route path='/AddOrder' element={<Addorder/>}/>
            <Route path='/Manageorder' element={<Manageorder/>}/>
            <Route path='/Totalpaidorder' element={<ProductWise/>}/>
            <Route path='/StoreWise' element={<StoreWise/>}/>

            <Route path='/Company-info' element={<Company/>}/>
            <Route path='/User-profile' element={<Profile/>} />
            <Route path='/Setting' element={<UserSetting/>}/>

      </Routes>
      <Footer/>
      </div>
     
    </>
  )
}

export default App;
