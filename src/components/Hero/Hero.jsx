import "./Hero.css";
import lovepreetImage from "../../assets/images/hero/lovepreetImage.jpeg";

export default function Hero() {
    return (
        <section className="hero" id="home">

            <div className="container d-flex align-items-center justify-content-between">
                <div className="hero-content">

                    <p className="hero-label">PORTFOLIO 2026</p>

                    <h1 className="hero-title">
                        <span>Hi, I&apos;m</span>
                        <span>Lovepreet</span>
                        <span>Sandhu</span>
                    </h1>

                    <h2 className="hero-role">Full-Stack Developer</h2>

                    <p className="hero-description">
                        I build responsive, full-stack web applications with a focus on clean code, practical solutions, and great user experiences.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="hero-primary-btn">View My Work</a>
                        <a href="/resume.pdf" className="hero-secondary-btn">Download CV</a>
                    </div>

                    <div className="hero-socials">

                        <a href="#" aria-label="Github">
                            <i className="bi bi-github"></i>
                        </a>

                        <a href="#" aria-label="LinkedIn">
                            <i className="bi bi-linkedin"></i>
                        </a>

                        <a href="#" aria-label="Email">
                            <i className="bi bi-envelope"></i>
                        </a>

                    </div>
                </div>

                <div className="hero-card-area">

                    <div className="lanyard">

                    </div>

                    <div className="id-card">
                        <img src={lovepreetImage} alt="Image of Lovepreet Sandhu" />
                    </div>

                </div>

            </div>
        </section>
    );
}