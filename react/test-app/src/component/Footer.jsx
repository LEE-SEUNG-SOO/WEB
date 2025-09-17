import { Description, Title } from "./base/Title";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Footer(){
    return(
        <footer id="contact" className="container">
            <Title title="Let's talk"/>
            <Description text="jeon.developer.judy@gmail.com"/>
            <Links />
            <p>Junior Software Enginner Judy's portfolio - All right reserved</p>
        </footer>
    )
}

export function Links(){
    const links = [
        {"href":"#", "site":"github"},
        {"href":"#", "site":"linkedin"}
    ]

    return(
        <ul className="contact-links">
            {
                links && links.map( data => <Link data={data} />)
            }
        </ul>
    )
}

export function Link({data}){
    return(
        <li>
            <a href={data.href} className="contact-link">
                { data.site === "github" ? <FontAwesomeIcon icon={faGithub}/> :
                  data.site === "linkedin" ? <FontAwesomeIcon icon={faLinkedin}/> : ""}
            </a>
        </li>
    )
}