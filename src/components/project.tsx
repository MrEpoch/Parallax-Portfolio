export default function Project() {
  const projects = [
    {
      title: "Todo App",
      description:
        "Sign up and Login Todo app, user can do all CRUD operations",
      image: "image",
      link: "http://stencukpage.com",
      github: "https://github.com/MrEpoch/TodoApp",
    },
    {
      title: "Train hackhaton site",
      description: "This is improvment of train company site, it was built on hackhaton",
      image: "image",
      link: "https://hackhathon-train.pages.dev",
      github: "https://github.com/MrEpoch/Hackaton-trains",
    }
  ];

  return (
    <section className="portfolio-projects">
      <h2 className="portfolio-projects__title">Projects</h2>
      <div className="portfolio-projects__container">
        {projects.map((project, index) => {
          return (
            <div key={index} className="portfolio-projects__card">
              <h3 className="portfolio-projects__card-title">
                {project.title}
              </h3>
              <p className="portfolio-projects__card-description">
                {project.description}
              </p>
              <div className="portfolio-projects__card-links">
                <a
                  href={project.link}
                  className="portfolio-projects__card-link"
                >
                  project
                </a>
                <a
                  href={project.github}
                  className="portfolio-projects__card-link"
                >
                  github
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
