import { Link as Link } from "react-router-dom";

export default function HNavigationList({ state }) {
    const selectHomeSection = (event) => {
        state[0].scrollIntoView({
            behavior: "smooth",
        });
    };

    const selectProjectSection = (event) => {
        state[1].scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
        });
    };

    const selectContactSection = (event) => {
        state[2].scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <>
            <Link
                onClick={() => selectHomeSection()}
                className={`hover:text-[#93B1A6] hidden sm:block`}
            >
                HOME
            </Link>
            <Link
                onClick={() => selectProjectSection()}
                className={`hover:text-[#93B1A6] hidden sm:block`}
            >
                PROJECTS
            </Link>
            <Link
                onClick={() => selectContactSection()}
                className={`hover:text-[#93B1A6] hover:border-[#93B1A6] rounded-full border-4 border-solid border-white py-2 px-4 hidden sm:block`}
            >
                Say Hi
            </Link>
        </>
    );
}
