import React from 'react';
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About I Next IT Solutions</h1>
      <div className="about-images">
        <div className="image-item">
          <img
            src="/images/about1.webp"
            alt="Description 1"
            className="image"
          />
          <h2 className="image-subheading">Our Vision</h2>
          <p className="image-description">
            We offer a wide range of IT services to meet the needs of small businesses. From network setup and maintenance to cloud solutions and cybersecurity, we have the expertise to help you achieve your goals and keep your business running smoothly. We provide personalized solutions tailored to your needs and budget.
          </p>
        </div>
        <div className="image-item">
          <img
            src="/images/about2.webp"
            alt="Description 2"
            className="image"
          />
          <h2 className="image-subheading">Our Values</h2>
          <p className="image-description">
            Our vision at I Next IT Solutions is to become the go-to IT services provider for small businesses. We aim to achieve this by providing exceptional services that help our clients achieve their business goals and stay ahead of the curve in the ever-evolving world of technology.
          </p>
        </div>
        <div className="image-item">
          <img
            src="/images/about3.webp"
            alt="Description 3"
            className="image"
          />
          <h2 className="image-subheading">Our Team</h2>
          <p className="image-description">
            At I Next IT Solutions, our core values include dedication to quality, a client-centric approach, and fostering a culture of continuous improvement. We believe in building long-term relationships based on trust and transparency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
