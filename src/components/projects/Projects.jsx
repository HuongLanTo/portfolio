import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import Projects_Data from "../../data/projects_data";
import "./Projects.css";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="projects-title">
        <h1>Personal Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="projects-content">
        {Projects_Data.map((project) => {
          return (
            <div key={project.id} className="projects-format">
              <h3>{project.name}</h3>
              <div className="projects-description">{project.description}</div>
              <div className="projects-description">
                <span style={{ textDecoration: "underline" }}>
                  Technologies
                </span>
                : {project.technologies}
              </div>
              {project.website !== "" && (
                <div>
                  <span style={{ textDecoration: "underline" }}>Website</span>:{" "}
                  <a
                    href={project.website}
                    className="project-link"
                    target="_blank"
                  >
                    {project.website}
                  </a>
                </div>
              )}
              <div>
                <span style={{ textDecoration: "underline" }}>Source code</span>
                :{" "}
                <a
                  href={project.github}
                  className="project-link"
                  target="_blank"
                >
                  {project.github}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
