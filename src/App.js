import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

import Home from './Home.js';
import MoreFilters from './MoreFilters';

function App() {
  return (
    <Router>
      <div className="container">
        <header className="d-flex justify-content-between mt-3">
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <h1 className="link-info">My Shop</h1>
          </NavLink>
          <NavLink to="/more-filters" style={{ textDecoration: 'none' }}>
            <h2 className="h1 link-info">More >></h2>
          </NavLink>
        </header>
        <hr className="text-info" />
        <Switch>
          <Route path="/more-filters">
            <MoreFilters />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
