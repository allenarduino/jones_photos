import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DeskTopHeader from './components/DesktopHeader/DesktopHeader';
import MobileHeader from './components/MobileHeader/MobileHeader';
import Favourites from './pages/Favourites/Favourites';
import Photos from './pages/Photos/Photos';

const App = () => {
  return (
    <Router>
      <MobileHeader />
      <DeskTopHeader />
      <Switch>
        <Route exact path="/" component={Photos} />
        <Route path="/favourites" component={Favourites} />
      </Switch>
    </Router>
  );
};
export default App;
