import { FaAws, FaCode, FaLaptopCode, FaTrophy } from "react-icons/fa";

function Achievement() {
  return (
    <section id="achievement">
      <h2>Achievements & Milestones</h2>

      <div className="achievement-grid">
        <div className="achievement-card">
          <FaCode className="achievement-icon" />
          <h3>300+ DSA Problems</h3>

          <p>
            Solved algorithmic and data structure challenges across multiple
            platforms.
          </p>
        </div>

        <div className="achievement-card">
          <FaLaptopCode className="achievement-icon" />
          <h3>MERN Projects</h3>

          <p>
            Developed multiple full-stack applications using React, Node.js and
            MongoDB.
          </p>
        </div>

        <div className="achievement-card">
          <FaAws className="achievement-icon" />
          <h3>AWS Learning Journey</h3>

          <p>
            Completed AWS Cloud Practitioner training and explored core cloud
            services.
          </p>
        </div>

        <div className="achievement-card">
          <FaTrophy className="achievement-icon" />
          <h3>Continuous Learner</h3>

          <p>
            Dedicated to improving development, problem-solving and cloud
            skills.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Achievement;
