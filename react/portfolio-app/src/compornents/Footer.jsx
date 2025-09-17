import { SubTitle, Title } from "./base/Title";
import { ContactLink } from "./footer/ContactLink";

export function Footer({data}){
    return(
        <footer id="contact" className="container">
            <Title title="Let's talk" />
            <SubTitle subTitle="jeon.developer.judy@gmail.com"/>
            <ContactLink links={data.links}/>
            <p>Junior Software Enginner Judy's portfolio - All right reserved</p>
        </footer>
    )
}