import {
    CVIcon,
    GithubIcon,
    GitlabIcon,
    LinkedInIcon,
} from "../nav-icons/icon-list";

export default function VNavigationList() {
    return (
        <>
            <a
                href="https://github.com/ImJiBV"
                className="text-white hover:text-[#93B1A6] cursor-pointer"
            >
                <SVG Icon={GithubIcon} />
            </a>
            <a
                href="https://gitlab.com/JamesIan.Villanueva"
                className="text-white hover:text-[#93B1A6] cursor-pointer"
            >
                <SVG Icon={GitlabIcon} />
            </a>
            <a
                href="https://www.linkedin.com/in/jamesvillanueva1201/"
                className="text-white hover:text-[#93B1A6] cursor-pointer"
            >
                <SVG Icon={LinkedInIcon} />
            </a>
            <a
                href="/my-cv/Villanueva-James-Ian-CV-X.pdf"
                className="text-white hover:text-[#93B1A6] cursor-pointer"
            >
                <SVG Icon={CVIcon} />
            </a>
        </>
    );
}

function SVG({ Icon }) {
    return <Icon />;
}
