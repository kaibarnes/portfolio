import React from 'react';

class Profile extends React.Component {
  // Scrolls the page to the top when the component will mount
  componentWillMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section className="Profile">
        <h1 className="Header">Who I am</h1>
        <p>Born and raised in England. After graduating University with a Bachelors in Marketing Communications and Advertising, I moved to Tokyo. I studied Japanese for 2 years, then, as most people here seem to do, I got a job teaching English. I had no idea what I wanted to do with my life, but decided that whatever it was, I wanted it to be here in Japan.</p>
        <p>Eventually, I found web development. I had tried a little programming before,specifically C and Python, but neither of these ever really clicked with me and I had almost written off any type of programming altogether. Then one day, I saw a post on Reddit talking about Front End Web Development, and it all seemed to fall in to place. This is what I want to do with my life.
        </p>
        <p>Since then, I have spent the majority of my free time studying, reading, watching and building pretty much anything I could. I'm still studying now, and expect that I'll probably never stop as it seems that there is always some new framework or library that people are recommening. Some days it's a pain - to have spent the last month learning about something and practicing using it well, only to find out that many people are now switching to something else. But that's why I love web development. It never stops moving and never gets boring.</p>
      </section>
    );
  }
}

export default Profile;
