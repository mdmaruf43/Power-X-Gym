import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MembershipForm from './Component/MembershipForm/MembershipForm';
import Navbar from './Component/Navbar/Navbar'
import Paypal from './Component/Paypal/Paypal';
import Footer from './Component/Footer/Footer';
import NotFound from './Component/NotFound/NotFound';
import Payment from './Component/Payment/Payment';
import About from './Component/AboutUs/About';
import Workout from './Component/Workout/Workout';
import Training from './Component/Training/Training';
import ChooseUs from './Component/ChooseUs/ChooseUs';
import Classes from './Component/Classes/Classes';
import ProductDetails from './Component/ProductDetails/ProductDetails';
import Pricing from './Component/Pricing/Pricing';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/ourClasses">
          <Navbar />
          <Classes />
          <Footer />
        </Route>
        <Route path="/productDetails/:category">
          <Navbar />
          <ProductDetails />
          <Footer />
        </Route>
        <Route path="/Membership">
          <Navbar />
          <MembershipForm />
          <Footer />
        </Route>
        <Route path="/membershipFrom/paypal">
          <Navbar />
          <Payment />
          <Footer />
        </Route>
        <Route path="/paypal">
          <Navbar />
          <Paypal />
          <Footer />
        </Route>
        <Route path="/membershipFrom">
          <Navbar />
          <MembershipForm />
          <Footer />
        </Route>
        <Route path="/pricing">
          <Navbar />
          <Pricing />
          <Footer />
        </Route>
        <Route exact path="/">
          <Navbar />
          <Workout />
          <About />
          <Training />
          <ChooseUs />
          <Footer />
        </Route>
        <Route path="*">
            <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
