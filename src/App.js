import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import Offers from './pages/offers';
import OfferDetails from './pages/offerDetails';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Offers} />
        <Route path="/offer" exact component={OfferDetails} />
      </Switch>
    </Router>
  );
}

export default App;
