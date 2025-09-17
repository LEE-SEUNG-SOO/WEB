export function Projects(){
    const projects = [
        { "src":"/img/projects/project1.webp", "alt":"project#1", 
            "metaTitle":"Project #1", "metaData":"Clone Coding with HTML, CSS"
        },
        { "src":"/img/projects/project2.webp", "alt":"project#2", 
            "metaTitle":"Project #2", "metaData":"Clone Coding with HTML, CSS"
        },
        { "src":"/img/projects/project3.webp", "alt":"project#3", 
            "metaTitle":"Project #3", "metaData":"Clone Coding with HTML, CSS"
        },
        { "src":"/img/projects/project4.webp", "alt":"project#4", 
            "metaTitle":"Project #4", "metaData":"Clone Coding with HTML, CSS"
        },
        { "src":"/img/projects/project5.webp", "alt":"project#5", 
            "metaTitle":"Project #5", "metaData":"Clone Coding with HTML, CSS"
        },
        { "src":"/img/projects/project6.webp", "alt":"project#6", 
            "metaTitle":"Project #6", "metaData":"Clone Coding with HTML, CSS"
        },
        { "src":"/img/projects/project7.webp", "alt":"project#7", 
            "metaTitle":"Project #7", "metaData":"Clone Coding with HTML, CSS"
        },
        { "src":"/img/projects/project8.webp", "alt":"project#8", 
            "metaTitle":"Project #8", "metaData":"Clone Coding with HTML, CSS"
        }
    ]

    return(
        <ul className="projects">
            {
                projects && projects.map( project => <Project data={project}/>)
            }
        </ul>
    )
}

export function Project({data}){
    
    return(
        <li className="project">
            <img className="project-img" src={data.src} alt={data.alt}/>
            <div className="project-metadata">
                <h3 className="project-metadata-title">{data.metaTitle}</h3>
                <p>{data.metaData}</p>
            </div>
        </li>
    )
}