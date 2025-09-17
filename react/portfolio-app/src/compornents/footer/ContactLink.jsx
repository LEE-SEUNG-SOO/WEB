import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function ContactLink({links}){
    return(
        <ul className="contact-links">
            {
                links && links.map( data => 
                    <li>
                        <a href={data.href} className="contact-link">
                        { data.type === "github" ? 
                            <FontAwesomeIcon icon={faGithub}/> : 
                          data.type === "linkedin" ?
                            <FontAwesomeIcon icon={faLinkedin}/> : "#"}
                        </a>
                    </li>
                )
            }
        </ul>
    )
}