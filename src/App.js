import './App.scss';
import db from './firebase/db';

import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from 'react-router-dom';

import { useState, useEffect } from 'react';

import OnlyAvailable from './OnlyAvailable';
import CheapestFirst from './CheapestFirst';
import ContainsNike from './ContainsNike';
import AverageStock from './AverageStock';
import MostExpensive from './MostExpensive';
import EditForm from './components/EditForm';
import NewProduct from './NewProduct';
import FilterByType from './components/FilterByType';
import Home from './Home';
import MoreFilters from './MoreFilters';

function App() {
  const [linksHome, setLinksHome] = useState({
    'only available': '/only-available',
    'cheapest first': '/cheapest-first',
    'contains nike': '/contains-nike',
    'average stock': '/average-stock',
    'most expensive available': '/most-expensive',
  });

  const [linksMore, setLinksMore] = useState({});

  const routes = [
    { path: '/new-product', component: NewProduct },
    { path: '/product/edit/:id', component: EditForm },
    { path: '/only-available', component: OnlyAvailable },
    { path: '/cheapest-first', component: CheapestFirst },
    { path: '/contains-nike', component: ContainsNike },
    { path: '/average-stock', component: AverageStock },
    { path: '/most-expensive', component: MostExpensive },
    { path: '/filter-by-type/:type', component: FilterByType },
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

  useEffect(() => {
    setSetLinksMore();
  }, [products]);

  function setSetLinksMore() {
    const values = [];
    for (const object of products) {
      let pathName = object.type.toLowerCase();
      values.push(pathName);
    }

    let uniqueValues = values.filter(onlyUnique);

    let links = {};

    uniqueValues.forEach((value) => {
      links[value] = '/' + value.replace(/ /g, '-');
    });

    console.log(links);

    setLinksMore(links);
  }

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  function setMoreFilterRoutes() {
    let moreFilterRoutes = [];

    for (const key in linksMore) {
      let route = (
        <Route
          path={`/filter-by-type/${key}`}
          render={(props) => (
            <FilterByType
              {...props}
              products={products}
              setProducts={setProducts}
              linksMore={linksMore}
            />
          )}
        />
      );

      moreFilterRoutes.push(route);
    }
  }

  return (
    <Router>
      <div className="container">
        <header className="d-flex justify-content-between mt-4">
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <h1 className="link-info">My Shop</h1>
          </NavLink>
          <NavLink to="/more-filters" style={{ textDecoration: 'none' }}>
            <h2 className="h1 link-info">More {'>>'}</h2>
          </NavLink>
        </header>
        <hr className="text-info" />
        <Switch>
          {routes.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              render={(props) => (
                <route.component
                  {...props}
                  products={products}
                  setProducts={setProducts}
                  linksHome={linksHome}
                />
              )}
            />
          ))}
          {setMoreFilterRoutes()}
          <Route exact path="/more-filters">
            <MoreFilters
              products={products}
              setProducts={setProducts}
              linksMore={linksMore}
            />
          </Route>
          <Route exact path="/">
            <Home
              products={products}
              setProducts={setProducts}
              linksHome={linksHome}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
