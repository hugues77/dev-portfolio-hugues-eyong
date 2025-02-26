import "./About.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
function About() {
  return (
    <div className="about">
      <div className="about-content">
        <div className="column about-left">
          <div className="bar">
            <div className="info">
              <span>HTML</span>
              <span>85%</span>
            </div>
            <div className="line">
              <span className="html"></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>CSS/SCSS</span>
              <span>80%</span>
            </div>
            <div className="line">
              <span className="css"></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>JAVASCRIPT</span>
              <span>65%</span>
            </div>
            <div className="line">
              <span className="javascript"></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>REACT</span>
              <span>60%</span>
            </div>
            <div className="line">
              <span className="react"></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>Vue JS</span>
              <span>50%</span>
            </div>
            <div className="line">
              <span className="vuejs"></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>NODEJS</span>
              <span>60%</span>
            </div>
            <div className="line">
              <span className="react"></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>PHP</span>
              <span>80%</span>
            </div>
            <div className="line">
              <span className="css"></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>MYSQL</span>
              <span>80%</span>
            </div>
            <div className="line">
              <span className="css"></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>GIT</span>
              <span>80%</span>
            </div>
            <div className="line">
              <span className="css"></span>
            </div>
          </div>
        </div>
        <div className="column about-right">
          <p>
            Actuellement, je travaille en tant que développeur web chez ID
            Baali. Mon objectif est de progresser dans le métier du web car
            depuis longtemps, je suis passionné par ce métier.
          </p>
          <p>
            Cette passion m'a toujours poussé à me cultiver et à en apprendre
            davantage autour du web à travers des formations, tutoriels et
            avancées technologiques liées au web, afin d'atteindre cet objectif.
          </p>
          <p>
            Après avoir terminé un DUT en Informatique en 2019 (diplôme non
            validé), Je me suis tourné vers le travail indépendant en réalisant
            des projets adaptés aux besoins spécifiques des associations et
            d'autres particuliers. De plus, c'est en 2024 que je me suis engagé
            de réaliser une autre formation chez OpenClassrooms en développement
            informatique.{" "}
          </p>
          <p>
            C'est à ce moment-là que j'ai pu valider l'équivalent d'un diplôme
            de niveau Bac+2 qui m'a permis d'améliorer mes compétences, à
            travers huit projets majeurs réalisés pendant la formation, tant du
            JavaScript, React et Node.js qui sont des langages que j'apprécie
            énormement.
          </p>
          <p>
            {" "}
            Ensuite, j'ai eu l'opportunité d'améliorer l'optimisation du
            référencement SEO des applications web pour une performance optimale
            en recourant à des outils comme Wave, lighthouse...
          </p>
          <p>
            Ce portfolio est le reflet de mes compétences professionnelles,
            affinées en React. c'est l'expertise que j'ai acquise dans le but de
            vous donner un aperçu général de mon parcours et j'ai tellement hâte
            de vous apporter cette expérience inédite.
          </p>
          <a
            className="p_linkedin"
            href="https://www.linkedin.com/in/hugues-eyong-ebun-939b41337/"
          >
            <FontAwesomeIcon className="icon" icon={faLinkedin} /> Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
