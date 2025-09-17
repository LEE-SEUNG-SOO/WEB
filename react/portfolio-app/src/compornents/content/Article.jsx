export function Article({children, style}){
    return(
        <article className={style}>
            {children}
        </article>
    )
}

export function SkillsTitle({title}){
    return(
        <h3 className="skills-title">{title}</h3>
    )
}

export function CodingSkills({skills}){
    return(
        <ul>
            {
                skills && skills.map( skill => 
                    <li className="bar">
                        <div className="bar-title">
                            <span>{skill.skill}</span>
                            <span>{skill.persent}</span>
                        </div>
                        <div className="bar-bg"><div className= "bar-value" style={{width:skill.width}}></div></div>
                    </li>
                )
            }
        </ul>
    )
}