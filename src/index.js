import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import './style.scss';

import reducers from './reducers';

import App from './components/app';

// this creates the store with the reducers, and does some other stuff to initialize devtools
// boilerplate to copy, don't have to know
const store = createStore(reducers, {}, compose(
  applyMiddleware(),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));

// we now wrap App in a Provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main'),
);

// ROUTER STUFF FROM V3? ///////////////////////////////////////////////

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './style.scss';
// import {
//   BrowserRouter as Router, Route, NavLink, Switch,
// } from 'react-router-dom';


// const About = (props) => {
//   return <div> All there is to know about me </div>;
// };
// const Welcome = (props) => {
//   return <div>Welcome</div>;
// };
// const Test = (props) => {
//   return <div> ID: {props.match.params.id} </div>;
// };
// const FallBack = (props) => {
//   return <div>URL Not Found</div>;
// };

// const Nav = (props) => {
//   return (
//     <nav>
//       <ul>
//         <li><NavLink to="/" exact>Home</NavLink></li>
//         <li><NavLink to="/about">About</NavLink></li>
//         <li><NavLink to="/test/id1">test id1</NavLink></li>
//         <li><NavLink to="/test/id2">test id2</NavLink></li>
//       </ul>
//     </nav>
//   );
// };

// const App = (props) => {
//   return (
//     <Router>
//       <div>
//         <Nav />
//         <Switch>
//           <Route exact path="/" component={Welcome} />
//           <Route path="/about" component={About} />
//           <Route exact path="/test/:id" component={Test} />
//           <Route component={FallBack} />
//         </Switch>
//       </div>
//     </Router>
//   );
// };


// ReactDOM.render(<App />, document.getElementById('main'));
