import { Description, SubTitle, Title } from "../base/Title.jsx";
import { SkillsContent } from "./SkillsContent.jsx";

export function Skills({data}){
    return(
        <section id="skills"className="section container">
            <Title title="My Skills"/>
            <SubTitle subTitle="Skills & Attribues"/>
            <Description />
            <SkillsContent data={data}/>
        </section>
    );
}