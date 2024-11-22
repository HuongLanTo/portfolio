import React from "react";
import "./Experience.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import vmo_logo from "../../assets/vmo_logo.jpeg";
import cmc_global_logo from "../../assets/cmc_global_logo.jpg";
import erm_logo from "../../assets/erm_logo.jpg";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="experience-title">
        <h1>Experience</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="experience-content">
        <div className="experience-left">
          <a href="https://vmogroup.com/" target="_blank">
            <img src={vmo_logo} alt="VMO Holdings" />
          </a>
        </div>
        <div className="experience-right">
          <div className="experience-title">
            Software Engineer - VMO Holdings
          </div>
          <div className="experience-time">11/2021 - 08/2023</div>
          <div className="experience-description">
            <ul>
              <li>
                Techlead in front-end team. Taking responsibilities includes:
                <ul style={{ marginLeft: "20px" }}>
                  <li>
                    Responsive design, cross-browser compatible user interface.
                  </li>
                  <li>Set up and maintained CI/CD system for team on AWS.</li>
                  <li>
                    Keeping a high bar on coding standards that follow OOP
                    principles like SOLID.
                  </li>
                  <li>Guide and unblock team members.</li>
                </ul>
              </li>
              <li>
                Designed and built a PDF sharing and live editing feature,
                enabling real-time collaboration between doctors and patients.
              </li>
              <li>
                Designed and led a team of 3 to build a doctor/patient
                management system that allows users to manage (CRUD) and search
                for doctors/patients.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="experience-content">
        <div className="experience-left">
          <a href="https://cmcglobal.com.vn/" target="_blank">
            <img src={cmc_global_logo} alt="CMC Global" />
          </a>
        </div>
        <div className="experience-right">
          <div className="experience-title">Software Engineer - CMC Global</div>
          <div className="experience-time">10/2020 - 10/2021</div>
          <div className="experience-description">
            <ul>
              <li>
                Designed the resumes feature that allows users to fill in the
                information (experience, projects, education, ...). This feature
                was used by more than 1000 people.
              </li>
              <li>
                Designed and built the email-sending feature to remind
                candidates to update their resumes.
              </li>
              <li>
                Enhanced admin features for managers and recruiters to manage
                employee and candidate resumes.
              </li>
              <li>
                Communicated with clients to gather information and ensure
                completion of business workflows and transfer to team members.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="experience-content">
        <div className="experience-left">
          <a target="_blank">
            <img src={erm_logo} alt="Electronic Records Management Company" />
          </a>
        </div>
        <div className="experience-right">
          <div className="experience-title">
            Software Engineer - Electronic Records Management Company
          </div>
          <div className="experience-time">09/2018 - 05/2020</div>
          <div className="experience-description">
            <ul>
              <li>
                Designed and developed responsive Single Page Web Applications
                (SPA) for hospital solutions using ReactJs, Java, and Spring
                Boot.
              </li>
              <li>
                Optimized the feature that transforms big data into the data
                warehouse, reducing query time by 25%.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
