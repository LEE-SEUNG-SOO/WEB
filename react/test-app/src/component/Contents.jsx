import { Home } from "./contents/Home.jsx";
import { About } from "./contents/About.jsx";
import { Skills } from "./contents/Skills.jsx";
import { Work } from "./contents/Work.jsx";
import { Testimonials } from "./contents/Testimonials.jsx";
import { ArrowUp } from "./contents/ArrowUp.jsx";

export function Contents(){
    return(
        <main>
            <Home />
            <About />
            <Skills />
            <Work />
            <Testimonials />
            <ArrowUp />
        </main>
    )
}