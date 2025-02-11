import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  const projects = [
    {
      id: "blog-website",
      link: "https://platform-blogging-app.onrender.com/",
      frontendGithubLink: "https://github.com/rymbowman/Blog-App-Client",
      backendGithubLink: "https://github.com/rymbowman/Blog-App-Api",
      title: "Platform Blogging Website",
      description: "React, Node.js, AWS (dynamoDB), Express, CSS",
    },
    {
      id: "fantasy-football",
      link: "https://fantasy-football-website.onrender.com",
      githubLink: "https://github.com/rymbowman/Fantasy-Football-Website",
      title: "Fantasy Football Website",
      description: "React, CSS, API integration",
    },
    {
      id: "Etch-A-Sketch",
      link: "https://rymbowman.github.io/Etch-A-Sketch-Final-Project/",
      githubLink: "https://github.com/rymbowman/Etch-A-Sketch-Final-Project",
      title: "Etch-A-Sketch",
      description: "Javascript, HTML, CSS",
    },
    {
      id: "todo-app",
      link: "",
      githubLink: "",
      title: "(In Progress) Task Management Application",
      description: "React, Node.js, AWS (dynamoDB), Express, CSS",
    },
  ];

  return (
    <div className="projects-container" data-aos="fade-in">
      <h2 className="projects-container-title">Projects</h2>
      <div className="tile-container">
        {projects.map((project) => (
          <div key={project.id} className="project-tile">
            <h5 className="project-title">{project.title}</h5>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </a>
              ) : null}
              {project.frontendGithubLink && project.backendGithubLink ? (
                <div className="multiple-github-links">
                  <a
                    href={project.frontendGithubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repo (frontend)
                  </a>
                  <a
                    href={project.backendGithubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repo (backend)
                  </a>
                </div>
              ) : project.githubLink ? (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
              ) : (
                <p className="not-available-message">Not available yet</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
