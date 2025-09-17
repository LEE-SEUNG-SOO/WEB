import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faMobile, faServer } from '@fortawesome/free-solid-svg-icons';

export function Majors({majors}){

    return(
        <ul className="majors">
            { majors && majors.map( (major) => <Major major={major}/> ) }
        </ul>
    )
}

export function Major({major}){
    const {icon, title, description, style} = major;

    return(
        <li className="major">
            <div>
                { icon === "faHtml5" ? <FontAwesomeIcon icon={faHtml5} className ={style}/> :
                    icon === "faMobile" ? <FontAwesomeIcon icon={faMobile} className ={style}/> : 
                        icon === "faServer" ? <FontAwesomeIcon icon={faServer} className ={style}/> : "" }
                <p className="majors-title">{title}</p>
                <p className="majors-description">{description}</p>
            </div>
        </li>
    );
}