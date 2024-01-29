import {
    CVIcon,
    GithubIcon,
    GitlabIcon,
    LinkedInIcon,
} from "../nav-icons/icon-list";

import cv from "../../../../public/my-cv/Villanueva-James-Ian-CV-X.pdf";

export default function VNavigationList() {
    return (
        <>
            <a
                href="https://github.com/ImJiBV"
                target="_blank"
                className="text-white hover:text-[#93B1A6] cursor-pointer"
            >
                <SVG Icon={GithubIcon} />
            </a>
            <a
                href="https://gitlab.com/JamesIan.Villanueva"
                target="_blank"
                className="text-white hover:text-[#93B1A6] cursor-pointer"
            >
                <SVG Icon={GitlabIcon} />
            </a>
            <a
                href="https://www.linkedin.com/in/jamesvillanueva1201/"
                target="_blank"
                className="text-white hover:text-[#93B1A6] cursor-pointer"
            >
                <SVG Icon={LinkedInIcon} />
            </a>
            <a
                href={cv}
                target="_blank"
                rel="noreferrer"
                download="Villanueva-James-Ian-CV-X"
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
