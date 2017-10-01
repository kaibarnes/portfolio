import React from 'react';
import { NavLink } from 'react-router-dom';
import PortfolioList from './PortfolioList';

class Portfolio extends React.Component {
  // Scrolls the page to the top when the component will mount
  componentWillMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section className="Portfolio">
        <h1 className="Header">Projects</h1>
        <p className="Portfolio__subheader">If you're interested in anything here, feel free to <NavLink to="/contact">
          Contact Me</NavLink></p>
        <p className="Portfolio__subheader">You can also view this website on Github <a href="http://github.com/kaibarnes">here</a></p>
        <PortfolioList />
      </section>
    );
  }
}

export default Portfolio;
