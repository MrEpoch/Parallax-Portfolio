

export default function Project() {
    
    const projects = [
        {
            title: "Todo App",
            description: "Sign up and Login Todo app, user can do all CRUD operations",
            image: "image",
            link: "link",
            github: "github"
        }
    ]

    return (
        <section className="portfolio-projects">
            <h2 className="portfolio-projects__title">Projects</h2>
            <div className="portfolio-projects__container">
                {projects.map((project) => {
                    return (
                    <div className="portfolio-projects__card">
                        <h3 className="portfolio-projects__card-title">{project.title}</h3>
                        <p className="portfolio-projects__card-description">{project.description}</p>
                        <div className="portfolio-projects__card-links">
                            <a href={project.link} className="portfolio-projects__card-link">project</a>
                            <a href={project.github} className="portfolio-projects__card-link">github</a>
                        </div>
                    </div>
                    )
                })}
            </div>
        </section>
    )
}
