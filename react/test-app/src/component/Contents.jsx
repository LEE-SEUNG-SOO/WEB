import { Home } from "./contents/Home.jsx";
import { About } from "./contents/About.jsx";
import { Skills } from "./contents/Skills.jsx";

export function Contents(){
    return(
        <main>
            <Home />
            <About />
            <Skills />
        </main>
    )
}