import "./Projects.css";

const Projects = () => {
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
      <h2 id="projects-title" data-aos="fade-in">
        Projects
      </h2>
      <div className="tile-container" data-aos="fade-in">
        {projects.map((project) => (
          <div key={project.id} className="project-tile">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Live Site
              </a>
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
              ) : (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
