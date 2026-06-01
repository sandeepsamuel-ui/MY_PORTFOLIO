function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-tag">
          Full Stack Developer • Problem Solver • Cloud Enthusiast
        </p>

        <h1>
          Hi, I'm <span>Sandeep Samuel </span>
        </h1>

        <h2>MERN Stack Developer</h2>

        <p className="hero-description">
          I build modern, responsive and scalable web applications using the
          MERN Stack. Passionate about Data Structures, Algorithms, Cloud
          Computing and creating impactful digital experiences that solve
          real-world problems.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn">
            Explore My Work
          </a>

          <a href="#contact" className="btn secondary">
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
