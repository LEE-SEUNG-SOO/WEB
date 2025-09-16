import { Title, Description } from "../base/Title";

export function Skills(){
    return(
        <section id="skills"className="section container">
            <Title title="skiils"/>
            <Description text="Skills & Attribues"/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum dolor dicta quas optio. Est laudantium iusto voluptatibus qui blanditiis aliquid recusandae, magnam culpa perferendis quo, sed id maxime velit in?</p>
            <SkillList />
        </section>
    )
}

export function SkillList(){
    const items = [
        {
            "style":"skills-tools",
            "text":"Tools",
            "contents":["Visual Studio Code","Intellij","Android Studio","Eclipse","MySql"]
        },
        {
            "style":"skills-etc",
            "text":"etc",
            "contents":["Git","Scrum Master","SVN"]
        }
    ]

    return(
        <div className="skills">
            <Article />
            { items &&
                items.map( (item) => <Article2 item={item}/> )
            }
        </div>
    )
}

export function Coding(){
    const barDatas = [
        {
            "name":"HTML",
            "persent":"98%",
            "width":"98%"
        },
        {
            "name":"CSS",
            "persent":"90%",
            "width":"90%"
        },
        {
            "name":"JavaScript",
            "persent":"80%",
            "width":"80%"
        },
        {
            "name":"TypeScript",
            "persent":"70%",
            "width":"70%"
        },
        {
            "name":"React",
            "persent":"70%",
            "width":"70%"
        },
        {
            "name":"NodeJS",
            "persent":"60%",
            "width":"60%"
        }
    ]

    return(
        <ul>
            { barDatas &&
                barDatas.map( (data) => 
                <li className="bar">
                    <div className="bar-title">
                        <span>{data.name}</span>
                        <span>{data.persent}</span>
                    </div>
                    <div className="bar-bg"><div className= "bar-value" style={{width:data.width}}></div></div>
                </li>
                )
            }
        </ul>
    )
}

export function Article(){
    return(
        <article className="skills-coding">
            <h3 className="skills-title">Coding Skills</h3>
            <Coding />
        </article>
    )
}

export function Article2({item}){
    const {style, text, contents} = item;

    return(
        <article className={style}>
            <h3 className="skills-title">{text}</h3>
            <ul>
                { contents &&
                    contents.map( content => <li>{content}</li>)
                }
            </ul>
        </article>
    )
}