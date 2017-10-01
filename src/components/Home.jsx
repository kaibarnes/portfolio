import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => (
  <section className="Home">
    <div>
      <h1 className="Home__heading">Kai Barnes</h1>
      <p className="Home__sub-heading">Brit, Web Developer</p>
    </div>
    <div>
      <p className="Home__text">Thanks for stopping by</p>
      <p className="Home__text">Go ahead and look around</p>
      <p className="Home__text">If you see anything you like, why not <NavLink to="/contact">get in touch?</NavLink></p>
    </div>
  </section>
);

export default Home;
