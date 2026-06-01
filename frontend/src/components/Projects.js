import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects">
      <h2>Featured Projects</h2>

      <div className="project-grid">
        <div className="project-card">
          <div className="project-icon">
            <FaReact />
          </div>

          <h3>Portfolio Website</h3>

          <p>
            Modern responsive portfolio built using React and advanced UI
            design.
          </p>

          <button>View Project</button>
        </div>

        <div className="project-card">
          <div className="project-icon">
            <FaNodeJs />
          </div>

          <h3>Student Management System</h3>

          <p>Complete CRUD application using MERN stack architecture.</p>

          <button>View Project</button>
        </div>

        <div className="project-card">
          <div className="project-icon">
            <FaDatabase />
          </div>

          <h3>E-Commerce Platform</h3>

          <p>Authentication, products, orders and payment workflow.</p>

          <button>View Project</button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
