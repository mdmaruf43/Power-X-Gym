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

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Footer />
        </Route>
        <Route path="/membershipFrom/paypal">
          <Paypal />
        </Route>
        <Route path="/membershipFrom">
          <MembershipForm />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
        <Route path="*">
            <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
