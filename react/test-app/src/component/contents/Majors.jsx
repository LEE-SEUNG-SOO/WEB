import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faMobile, faServer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Majors(){
    const majors = [
        {
            "icon":"faHtml5",
            "title":"Front-end",
            "description":"HTML, CSS, JavaScript, TypeScript, React, WebAPIs",
            "style":"major-icon"
        },
        {
            "icon":"faMobile",
            "title":"Mobile",
            "description":"Android Studio, React Native, iOS, Swift, Java, Kotlin",
            "style":"major-icon"
        },
        {
            "icon":"faServer",
            "title":"Back-end",
            "description":"Java, JavaScript, Go, Kotlin, Spring, Spring Boot",
            "style":"major-icon"
        }
    ]
    
    return(
        <ul class="majors">
            {majors &&
                majors.map( major => 
                    <Major major={major}/>
                )
            }
        </ul>
    )
}

export function Major({major}){
    const {icon, title, description, style} = major;
    return(
        <li class="major">
            <div>
                { icon === "faHtml5" ? <FontAwesomeIcon icon={faHtml5} className ={style}/> :
                    icon === "faMobile" ? <FontAwesomeIcon icon={faMobile} className ={style}/> : 
                        icon === "faServer" ? <FontAwesomeIcon icon={faServer} className ={style}/> : "" }
                <p class="majors-title">{title}</p>
                <p class="majors-description">{description}</p>
            </div>
        </li>
    )
}