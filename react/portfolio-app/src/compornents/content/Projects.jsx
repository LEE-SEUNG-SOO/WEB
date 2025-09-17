
export function Projects({projects}){
    return(
        <ul className="projects">
            <Project projects={projects}/>
        </ul>
    )
}

export function Project({projects}){
    return(
        <>
            {
                projects && projects.map( (project) => 
                    <li className="project">
                        <img className="project-img" src={project.img} alt={project.alt}/>
                        <Metadata metaTitle={project.metaTitle} metaData={project.metaData}/>
                    </li>
                )
            }
        </>
    );
}

export function Metadata({metaTitle, metaData}){
    return(
        <div className="project-metadata">
            <h3 className="project-metadata-title">{metaTitle}</h3>
            <p>{metaData}</p>
        </div>
    )
}