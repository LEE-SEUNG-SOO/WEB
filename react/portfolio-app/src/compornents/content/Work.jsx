import { SubTitle, Title } from "../base/Title.jsx";
import { Catecorys } from "./Categorys.jsx";
import { Projects } from "./Projects.jsx";

export function Work({data}){    
    return(
        <section id="work"className="section container">
            <Title title="My work"/>
            <SubTitle subTitle="Projects"/>
            <Catecorys catecorys={data.catecorys}/>
            <Projects projects={data.projects}/>
        </section>
    )
}