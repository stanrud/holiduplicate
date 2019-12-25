import React from 'react';
import Header from '../../Header';

const MainContainer = ({ children }) => (
  <React.Fragment>
    <Header />
    <main id='main'>
      {children}
    </main>
  </React.Fragment>
);

export default MainContainer;
