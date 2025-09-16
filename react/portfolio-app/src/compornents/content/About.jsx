import { Title, Description } from '../base/Title';
import { Majors } from './Majors.jsx';
import { Jobs } from './Jobs.jsx';

export function About(){
    return(
        <section id="about" class="section container">
            <Title title="About me"/>
            <Description />
            <Majors />
            <Jobs />
        </section>
    )
}