import { Link as Link } from "react-router-dom";

export default function HNavigationList() {
    return (
        <>
            <Link to={"/"} className={`hover:text-[#93B1A6] hidden sm:block`}>
                HOME
            </Link>
            <Link
                to={"/my-projects"}
                className={`hover:text-[#93B1A6] hidden sm:block`}
            >
                PROJECTS
            </Link>
            <Link
                to={"/contact-me"}
                className={`hover:text-[#93B1A6] hover:border-[#93B1A6] rounded-full border-4 border-solid border-white py-2 px-4 hidden sm:block`}
            >
                Say Hi
            </Link>
        </>
    );
}
