export function Jobs(){
    const jobs = [
        {
            "img":"img/jobs/google.png",
            "alt":"google",
            "name":"Google as Junior Software Engineer",
            "period":"2019 Oct - Until now"
        },
        {
            "img":"img/jobs/samsung.png",
            "alt":"samsung",
            "name":"Samsung as Junior Software Engineer",
            "period":"2010 Oct - 2019 Oct"
        }
    ]

    return(
        <ul class="jobs">
            {
                jobs && jobs.map( job => 
                    <Job job={job}/>
                )
            }
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