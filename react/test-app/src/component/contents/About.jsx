import { Title, Description } from "../base/Title.jsx"
import { Majors } from "./Majors.jsx"
import { Jobs } from "./Jobs.jsx"

export function About(){
 const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Harum facere ad iusto quam saepe aperiam iure rem nostrum
        reiciendis reprehenderit recusandae quidem nesciunt,
        ipsa adipisci debitis tenetur. Provident, dolorum modi.`

    return(
        <section id="about" class="section container">
            <Title title="About Me"/>
            <Description text={text}/>
            <Majors />
            <Jobs />
        </section>
    )
}