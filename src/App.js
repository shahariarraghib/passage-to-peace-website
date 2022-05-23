
import { Route, Routes } from 'react-router-dom';


import './App.css';
import About from './Components/About/About';
import AddPlace from './Components/AddPlace/AddPlace';
import AllBookings from './Components/Booking/AllBooking/AllBookings';
import Booking from './Components/Booking/Booking/Booking';
import MyBooking from './Components/Booking/MyBooking/MyBooking';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Footer from './Components/Shared/Footer/Footer';

import UpdatePlaceInfo from './Components/UpdatePlaceInfo/UpdatePlaceInfo';
import AuthProvider from './Contexts/AuthProvider';


function App() {

  return (
    <div>

      <AuthProvider>
        <Header></Header>
        <Routes>


          <Route path='/' element={
            <Home></Home>
          }></Route>

          <Route path='/home' element={
            <Home></Home>
          }>
          </Route>



          <Route path="/booking/:id" element={<Booking></Booking>} />




          <Route path="/place" element={
            <PrivateRoute>
              <AddPlace></AddPlace>
            </PrivateRoute>
          } />



          <Route path="/update/:id" element={<UpdatePlaceInfo></UpdatePlaceInfo>} />

          <Route path="/about" element={<About></About>} />


          <Route path="/mybooking" element={
            <PrivateRoute >
              <MyBooking></MyBooking>
            </PrivateRoute>
          } />

          <Route path="/allbooking" element={
            <PrivateRoute>
              <AllBookings></AllBookings>
            </PrivateRoute>
          } />

          <Route path="/login" element={<Login></Login>} />







        </Routes>
        <Footer></Footer>
      </AuthProvider>

    </div>
  );
}

export default App;
