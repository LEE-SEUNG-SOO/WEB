export function Jobs({jobs}){
    return(
        <ul class="jobs">
            { jobs && jobs.map( job => <Job job={job} /> ) }    
        </ul>
    )
}

export function Job({job}){
    const {img, alt, name, period} = job;

    return(
        <li class="job">
            <img src={img} alt={alt}/>
            <div>
                <p class="job-name">{name}</p>
                <p class="job-period">{period}</p>
            </div>
        </li>
    )
}