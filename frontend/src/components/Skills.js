import { FaReact, FaNodeJs, FaJava, FaAws, FaGitAlt } from "react-icons/fa";

import { SiMongodb, SiExpress, SiJavascript } from "react-icons/si";

function Skills() {
  const skills = [
    { icon: <FaJava />, name: "Java" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <FaGitAlt />, name: "Git" },
  ];

  return (
    <section id="skills">
      <h2>Technical Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>

            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
