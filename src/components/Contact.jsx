import React from 'react';
import resume from '../files/kaibarnes-resume.pdf';

const Contact = () => (
  <section className="Contact">
    <div className="Contact__container">
      <h1 className="Contact__heading">Contact me</h1>
      <p className="Contact__text">I'm currently looking for work.<br /> I'd love to hear from you if you are hiring.</p>
      <p className="Contact__text">You can <a href="mailto:barnes.kai@gmail.com" target="_top">email me</a></p>
      <p className="Contact__text">You can also download <a className="Contact__download"href={resume} download>my resume</a></p>
    </div>
  </section>
);


export default Contact;
