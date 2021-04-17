import './App.scss';
import db from './firebase/db';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

import { useState, useEffect } from 'react';

import Home from './Home.js';
import MoreFilters from './MoreFilters';
import FilterBtns from './components/FilterBtns';
import OnlyAvailable from './OnlyAvailable';
import CheapestFirst from './CheapestFirst';
import ContainsNike from './ContainsNike';
import AverageStock from './AverageStock';
import MostExpensive from './MostExpensive';
import EditForm from './components/EditForm';
import NewProduct from './NewProduct';

function App() {
  const [links, setLinks] = useState({
    'only available': '/only-available',
    'cheapest first': '/cheapest-first',
    'contains nike': '/contains-nike',
    'average stock': '/average-stock',
    'most expensive available': '/most-expensive',
  });

  const routes = [
    { path: '/new-product', component: NewProduct },
    { path: '/product/edit/:id', component: EditForm },
    { path: '/only-available', component: OnlyAvailable },
    { path: '/cheapest-first', component: CheapestFirst },
    { path: '/contains-nike', component: ContainsNike },
    { path: '/average-stock', component: AverageStock },
    { path: '/most-expensive', component: MostExpensive },
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('shopItems').onSnapshot((snapshot) => {
      const data = [];

      snapshot.docs.forEach((product) => {
        const docItem = product.data();
        docItem['docId'] = product.id;

        data.push(docItem);
      });
      setProducts(data);
    });
    return () => {
      unsubscribe();
    };
  }, []);

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
        <FilterBtns links={links} />
        <Switch>
          <Route path="/more-filters">
            <MoreFilters />
          </Route>
          {routes.map((route, i) => (
            <Route
              path={route.path}
              render={(props) => (
                <route.component
                  {...props}
                  products={products}
                  setProducts={setProducts}
                />
              )}
            />
          ))}
          <Route exact path="/">
            <Home products={products} setProducts={setProducts} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
