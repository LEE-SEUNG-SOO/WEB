import { List } from "../base/List.jsx";
import { Article, CodingSkills, SkillsTitle } from "./Article.jsx";

export function SkillsContent({data}){
    const {skills, tools, etc} = data;
    
    return(
       <div className="skills">
            <Article style="skills-coding">
                <SkillsTitle title="Coding Skills"/>
                <CodingSkills skills={skills}/>
            </Article>
            <Article style="skills-tools">
                <SkillsTitle title="Tools"/>
                <List list={tools}/>
            </Article>
            <Article style="skills-etc">
                <SkillsTitle title="etc"/>
                <List list={etc}/>
            </Article>
        </div>
    )
}