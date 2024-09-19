import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import about_image from "../../assets/about_image.jpeg";
import linkedin_icon from "../../assets/linkedin_icon.svg";
import github_icon from "../../assets/github_icon.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-content">
        <div className="about-left">
          <div className="about-general">
            <p>
              I am a software engineer with over three years of experience
              specializing in technology transformation and healthcare domains.
              My expertise spans full-stack development, with one year focused
              on both backend and frontend development and two years dedicated
              to frontend development. I am proficient in a range of
              technologies, including Java, Java Spring Boot, ReactJS,
              JavaScript, and TypeScript.
            </p>
            <p>
              Throughout my career, I have successfully handled tasks such as
              developing APIs, building intuitive user interfaces, and designing
              robust features. Additionally, I have led a small frontend team,
              ensuring timely delivery of projects while mentoring team members
              on both technical and soft skills.
            </p>
            <p>
              I am highly motivated to learn and develop new skills, demonstrate
              strong time management abilities, and can efficiently adapt to
              diverse environments and business processes.
            </p>
            <p className="about-link">
              <a href="https://www.linkedin.com/in/huong-lan-to/" target="_blank">
                <img src={linkedin_icon} alt="LinkedIn" />
              </a>
              <a href="https://github.com/HuongLanTo" target="_blank">
                <img src={github_icon} alt="GitHub" />
              </a>
            </p>
          </div>
        </div>
        <div className="about-right">
          <img src={about_image} alt="About me" />
        </div>
      </div>
    </div>
  );
};

export default About;
