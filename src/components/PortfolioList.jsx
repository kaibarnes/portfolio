import React from 'react';
import PortfolioItem from './PortfolioItem';

// Import screenshots of each project in the portfolio
import todoScreenshot from '../images/todo-screenshot.png';
import partyPlannerScreenshot from '../images/party-planner-screenshot.png';
import weatherScreenshot from '../images/weather-screenshot.png';
import findingsummersendScreenshot from '../images/findingsummersend-screenshot.png';

// An array of each project to be included in the portfolio
const projects = [
  {
    image: partyPlannerScreenshot,
    title: 'Party Planner App',
    skills: 'Firebase, React, Bootstrap',
    description: 'A small site I made to help plan parties with coworkers. It uses Firebase to store the data and update it in real time.',
    link: 'http://party-planner.surge.sh',
    github: 'https://github.com/kaibarnes/party-planner',
  },
  {
    image: findingsummersendScreenshot,
    title: 'Finding Summers End Blog',
    skills: 'Wordpress, PHP, CSS',
    description: 'I installed this wordpress site, customized the chosen theme and set up plugins to suit an aspiring blogger.',
    link: 'http://findingsummersend.com',
  },
  {
    image: weatherScreenshot,
    title: 'Weather App',
    skills: 'Axios, React, Foundation',
    description: 'A searchable weather app that grabs the weather of your chosen location from the Open Weather Map API using Axios.',
    link: 'http://kaibarnes-weather.surge.sh',
    github: 'https://github.com/kaibarnes/react-weather',
  },
  {
    image: todoScreenshot,
    title: 'Todo list',
    skills: 'Redux, React, Expect, Foundation',
    description: 'A todo app using Redux to manage state and Expect to run tests. It uses local storage so todos can be checked and added to at any time.',
    link: 'http://kaibarnes-todolist.surge.sh',
    github: 'https://github.com/kaibarnes/react-todo',
  },
];

const PortfolioList = () => (
  <div className="Portfolio__list">
    {/* Makes a new PortfolioItem for each of the projects from the Projects array in order */}
    {projects.map((project) => {
      const { image, title, skills, description, link, github } = project;
      return (
        <PortfolioItem
          image={image}
          title={title}
          skills={skills}
          description={description}
          link={link}
          github={github}
          key={title}
        />);
    })}
  </div>
);

export default PortfolioList;
