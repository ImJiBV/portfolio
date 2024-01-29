import { Helmet } from "react-helmet-async";
import { RightArrow, ShapeDiv } from "../components/page-icons/page-icons";
import geek from "/icons/geek.svg";
import Main from "../sections/main/Main";
import AboutMe from "../sections/main/About-me";
import Wrapper from "../layouts/Wrapper";
import Skills from "../sections/main/Skills";
import Project from "../sections/main/Project";
import ContactMe from "../sections/main/Contact";
import Experience from "../sections/main/Experience";

export default function MainPage({ state }) {
    return (
        <>
            <Helmet>
                <title> Portfolio | James Villanueva</title>
            </Helmet>
            <Wrapper>
                <Main state={state} />
                <AboutMe />
                <Skills />
                <Project state={state} />
                <Experience state={state} />
                <ContactMe state={state} />
            </Wrapper>
        </>
    );
}

function SVG({ Icon }) {
    return <Icon />;
}
