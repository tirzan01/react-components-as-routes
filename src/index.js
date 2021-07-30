import { round } from 'lodash';
import React from 'react';
import ReactDOM, { render } from 'react-dom';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () =>
  <div>
    <NavLink
      to="/"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      style={link}
      /* add prop for activeStyle */
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >About</NavLink>
    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Login</NavLink>
    <NavLink
      to='/signup'
      extact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}>Sign up</NavLink>
  </div>;


const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
};

const Login = () => {
  return (
    <div>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

const Signup = () => {
  return (
    <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="text" name="email" placeholder="email" />
          <label htmlFor="email">email</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="signup" />
    </form>
  )
}

ReactDOM.render(
 ( <Router>
   <div>
     <Navbar />
    <Route exact path='/' component={Home} />
    <Route exact path='/about' component={About} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/signup' component={Signup} />
   </div>
  </Router>),
  document.getElementById('root')
);
