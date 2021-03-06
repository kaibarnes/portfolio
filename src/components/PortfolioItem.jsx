import React from 'react';

const PortfolioItem = props => (
  <div className="PortfolioItem">
    <img src={props.image} alt={props.title} className="PortfolioItem__image" />
    <div className="PortfolioItem__text">
      <h3 className="PortfolioItem__header"><a href={props.link}>{props.title}</a></h3>
      <p className="PortfolioItem__skills">{props.skills}</p>
      <p className="PortfolioItem__description">{props.description}</p>
      <a className="PortfolioItem__link" href={props.link}>Visit Site</a>
      {props.github ? (<a className="PortfolioItem__link" href={props.github}>View on Github</a>) : null}
    </div>
  </div>
);

export default PortfolioItem;
