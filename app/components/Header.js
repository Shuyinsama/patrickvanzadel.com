import React from 'react';
import { IndexLink, Link } from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <div className="navigationWrapper">
        <ul className="mainNavigation">
          <li><IndexLink to="/">home</IndexLink></li>
          <li><Link to="/about">about me</Link></li>
          <li><Link to="/contact">contact</Link></li>
        </ul>
      </div>
    );
  }
}

export default Header;
