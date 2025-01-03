import './About.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
function About() {
  return (
    <div className="about">
        <div className="about-content">
            <div className="column about-left">
                <div className="bar">
                  <div className="info">
                    <span>HTML</span>
                    <span>95%</span>
                  </div>
                  <div className="line"><span className='html'></span></div>
                </div>
                <div className="bar">
                  <div className="info">
                    <span>CSS/SCSS</span>
                    <span>90%</span>
                  </div>
                  <div className="line"><span className='css'></span></div>
                </div>
                <div className="bar">
                  <div className="info">
                    <span>JAVASCRIPT</span>
                    <span>75%</span>
                  </div>
                  <div className="line"><span className='javascript'></span></div>
                </div>
                <div className="bar">
                  <div className="info">
                    <span>REACT</span>
                    <span>70%</span>
                  </div>
                  <div className="line"><span className='react'></span></div>
                </div>
                <div className="bar">
                  <div className="info">
                    <span>Vue JS</span>
                    <span>60%</span>
                  </div>
                  <div className="line"><span className='vuejs'></span></div>
                </div>
                <div className="bar">
                  <div className="info">
                    <span>NODEJS</span>
                    <span>70%</span>
                  </div>
                  <div className="line"><span className='react'></span></div>
                </div>
                <div className="bar">
                  <div className="info">
                    <span>PHP</span>
                    <span>90%</span>
                  </div>
                  <div className="line"><span className='css'></span></div>
                </div>
                <div className="bar">
                  <div className="info">
                    <span>MYSQL</span>
                    <span>90%</span>
                  </div>
                  <div className="line"><span className='css'></span></div>
                </div>
                <div className="bar">
                  <div className="info">
                    <span>GIT</span>
                    <span>90%</span>
                  </div>
                  <div className="line"><span className='css'></span></div>
                </div>
            </div>
            <div className="column about-right">
              <p>Actuellement, j’occupe le poste d’opérateur laminage au sein de l’entreprise ArcelorMittal Gandrange. J’aimerais évoluer dans le métier du web car ce dernier me passionne depuis plusieurs années, c’est pourquoi je me suis orienté progressivement dans cette reconversion professionnelle. </p>
              <p>Cette volonté m’a amené à apprendre plusieurs technologies du web au travers des cours, tutoriels et articles, et lorsque je me suis senti capable de relever des nombreux défis en réalisant notamment plusieurs  applications en PHP/MySQL ;</p>
              <p>je me suis lancé dans la formation du développeur web fullstack chez Openclassrooms en vue d’obtenir un diplôme Bac+2, au terme de laquelle j’ai pu monter en compétences au travers huit grands projets réalisés au cours de la formation tant du  JavaScript, React et NodeJs ensuite j’ai eu l’opportunité d’améliorer la performance et optimiser le référencement SEO d’un site web en utilisant des outils tels que Wave et lighthouse. </p>
              <p>Ce portfolio est le résultat du dernier projet développé en React, c&#39;est la representation concret de ce que j&#39;ai appris et maitriser en vue de vous permettre d&#39;avoir une idée générale de mes compétences et j&#39;ai hate de vous apporter cette expérience inedite. </p>
                <a className='p_linkedin' href="https://www.linkedin.com/in/hugues-eyong-ebun-939b41337/"><FontAwesomeIcon className='icon' icon={faLinkedin} /> Linkedin</a> 
            </div> 
        </div>
    </div>
  )
}

export default About
