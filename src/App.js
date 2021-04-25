import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState } from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import BreakFast from './components/BreakFast/BreakFast';
import Dinner from './components/Dinner/Dinner';
import Lunch from './components/Lunch/Lunch';
import BreakFastDetail from './components/BreakFastDetail/BreakFastDetail';
import DinnerDetail from './components/DinnerDetail/DinnerDetail';
import LunchDetail from './components/LunchDetail/LunchDetail';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Login from './components/Login/Login';
import OrderPlace from './components/OrderPlace/OrderPlace';
import Dashboard from './components/Dashboard/Dashboard';
import DashboardContainer from './components/DashboardContainer/DashboardContainer';
import AllOrder from './components/AllOrder/AllOrder';
import ManageFood from './components/ManageFood/ManageFood';
import Review from './components/Review/Review';
import YourOrder from './components/YourOrder/YourOrder';
import PrivateRoute from './components/Login/PrivateRoute';
import CartProduct from './components/CartProduct/CartProduct';
import Payment from './components/CartProduct/Payment';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';

export const Context=createContext();

function App() {
  const [logInUser,setLogInUser]=useState({});
  return (
    <div className='appContainer'>
    <Context.Provider value={[logInUser,setLogInUser]} >
        <Router>
        <Header></Header>
            <Switch>
              <Route path='/home'><Home></Home></Route>
              <Route exact path='/'><Home></Home></Route>
              <PrivateRoute  path='/dashboard'><DashboardContainer></DashboardContainer></PrivateRoute>
              <Route path='/addNewFoods'><Dashboard></Dashboard></Route>
              <Route path='/allOrders'><AllOrder></AllOrder></Route>
              <Route path='/manageFood'><ManageFood></ManageFood></Route>
              <Route path='/review'><Review></Review></Route>
              <Route path='/yourOrder'><YourOrder></YourOrder></Route>
              <Route path='/breakfast'><BreakFastDetail></BreakFastDetail></Route>
              <Route path='/lunch'><DinnerDetail></DinnerDetail></Route>
              <Route path='/dinner'><LunchDetail></LunchDetail></Route>
              <Route path='/login'><Login></Login></Route>
              <Route path='/orderPlace'><OrderPlace></OrderPlace></Route>
              <PrivateRoute path='/cart'><CartProduct></CartProduct></PrivateRoute>
              <Route path='/payment'><Payment></Payment></Route>
              <Route path='/adminPanel'><MakeAdmin></MakeAdmin></Route>
              <PrivateRoute path='/productDetail/:productId'><ProductDetail></ProductDetail></PrivateRoute>
            </Switch>
      </Router>
    </Context.Provider>
   </div>
  );
}

export default App;
