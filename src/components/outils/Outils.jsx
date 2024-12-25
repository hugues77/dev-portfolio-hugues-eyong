import './Outils.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faCss3, faDocker, faHtml5, faJsSquare,  faPhp, faReact, faSass } from '@fortawesome/free-brands-svg-icons'
import { faNode } from '@fortawesome/free-brands-svg-icons/faNode'
import { faDatabase} from '@fortawesome/free-solid-svg-icons'
import { faVuejs } from '@fortawesome/free-brands-svg-icons/faVuejs'
import { faGitAlt } from '@fortawesome/free-brands-svg-icons/faGitAlt'

function Outils() {
  return (
    <div className='outils'> 
      <div className="outils-content">
          <div className="first-group">
            <div className='icon'>
              <FontAwesomeIcon icon={faReact}  />
            </div> 
            <div className='icon'>
              <FontAwesomeIcon icon={faPhp}  />
            </div>
            <div className='icon'>
              <FontAwesomeIcon icon={faHtml5}  />
            </div>
            <div className='icon'>
              <FontAwesomeIcon icon={faCss3}  />
            </div>
            <div className='icon'>
              <FontAwesomeIcon icon={faJsSquare}  />
            </div>
            <div className='icon'>
              <FontAwesomeIcon icon={faNode}  />
            </div>
            <div className='icon'>
              <FontAwesomeIcon icon={faDatabase}  />
            </div>
            <div className='icon'>
              <FontAwesomeIcon icon={faSass}  />
            </div>
            <div className='icon'>
              <FontAwesomeIcon icon={faGitAlt}  />
            </div>
            <div className='icon'>
              <FontAwesomeIcon icon={faBootstrap}  />
            </div>
            <div className='icon'>
              <FontAwesomeIcon icon={faVuejs}  />
            </div>
            <div className='icon'>
              <FontAwesomeIcon icon={faDocker}  />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Outils
