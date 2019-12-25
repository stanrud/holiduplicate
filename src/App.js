import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import Offers from './pages/offers';
import OfferDetails from './pages/offerDetails';
import Main from './components/containers/Main';

function App() {
  return (
    <Router>
      <Main>
        <Switch>
          <Route path='/' exact component={Offers} />
          <Route path='/offer/:id' exact component={OfferDetails} />
        </Switch>
      </Main>
    </Router>
  );
}

export default App;
