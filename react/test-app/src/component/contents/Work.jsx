import { Description, Title } from "../base/Title.jsx";
import { Catecorys } from "./Catecorys.jsx";
import { Projects } from "./Projects.jsx";

export function Work(){
    return(
        <section id="work"class="section container">
            <Title title="My work"/>
            <Description text="Projects"/>
            <Catecorys />
            <Projects />
        </section>
    )
}