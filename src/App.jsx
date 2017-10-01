import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Menu from './components/Menu';
import Home from './components/Home';
import Profile from './components/Profile';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


// Check the best place to put these
// Should I put them here, or in their own files, or in Index.css??????
import './styles/App.css';
import './styles/MenuFrame.css';
import './styles/MenuBar.css';
import './styles/Home.css';
import './styles/Profile.css';
import './styles/Portfolio.css';
import './styles/Contact.css';

const App = withRouter(({ location }) => {
  const currentKey = location.pathname.split('/')[1] || '/';

  return (
    <div className="App">
      <div>
        <Menu />
        <TransitionGroup>
          <CSSTransition classNames="fade" timeout={200} key={currentKey}>
            <div className="wrapper">
              <Switch location={location}>
                <Route path="/profile" component={Profile} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
                <Route path="/" component={Home} />
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
});

export default App;
