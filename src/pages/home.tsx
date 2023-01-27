

import  Nav  from "../Nav";
import  Main  from "../Main";
import  Aboutme  from "../AboutMe";
import  Projects  from "../ProjectList";
import  ContactMain  from '../Contact/index';


export default function Index() {
    return (
        <>
            <Nav />
            <Main />
            <Aboutme />
            <Projects />
            <ContactMain/>
        </>
    )
}