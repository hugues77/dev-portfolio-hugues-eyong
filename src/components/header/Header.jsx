import './Header.scss';
import  { Cursor, useTypewriter } from 'react-simple-typewriter'
// import {cvhugues} from 'https://secoursdeleternel.fr/images/portfolio-hugues/pdf/cv-hugues-eyong-dev.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [text] = useTypewriter({
    words: ['Fullstack','PHP'],
    loop:0,
    typeSpeed:120
  })

  return (
    <div className="header">
      <div className="header-content">
        <div className="main">
          <h1>Bonjour !  Je suis Hugues EYONG</h1>
          <h2>Developpeur web <span>{text} <Cursor/></span></h2>
          <p>Passionné du développement<span> web et ses technologies</span>. je suis en reconversion <span>professionnelle et à la recherche des nouvelles</span> opportunités <span>pour  concilier mes acquis en frontend et backend </span> ayant déjà <span>réaliser des projets concrets en PHP, React, Vue JS, Javascript et Nodejs(Express).</span> </p>
        
          <div className="btn-group">
            <a className='voir' href="https://github.com/hugues77" target='blank'><FontAwesomeIcon icon={faGithub} className='icon' /> Voir mon github </a>
            {/* <a className='download' href= '#'><FontAwesomeIcon icon={faDownload} className='icon' />Télécharger mon CV </a> */}
            <a  href="https://secoursdeleternel.fr/images/portfolio-hugues/pdf/cv-hugues-eyong-dev.pdf" target='blank'  className='download_btn' alt="cv hugues eyong dev" download><FontAwesomeIcon icon={faDownload} className='icon' />Télécharger mon CV </a>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Header
