import {
    CSSIcon,
    GitLabIcon,
    GithubIcon,
    HTMLIcon,
    InsomniaIcon,
    LinuxIcon,
    MaterialIcon,
    MySQLIcon,
    NextJS,
    NodeJsIcon,
    ReactJSIcon,
    RightArrow,
    TailwindIcon,
    VSIcon,
    WebSocketIcon,
} from "../../components/page-icons/page-icons";

export default function Skills() {
    return (
        <>
            <div className="m-auto w-8/12 sm:w-full space-y-4 text-center font-body">
                <div className="p-6">
                    <p className="text-white font-extralight text-2xl underline underline-offset-8">
                        Full-stack Developer
                    </p>
                    <p className="text-white font-thin text-base mt-1">
                        Technologies I've used to
                    </p>
                </div>

                <div className="flex flex-row flex-wrap gap-6 justify-center items-center">
                    <div className="flex flex-col text-[#F35624] space-y-1 justify-center items-center font-medium text-base">
                        <SVG Icon={HTMLIcon} />
                        <p>HTML</p>
                    </div>
                    <div className="flex flex-col text-[#1B84E6] space-y-1 justify-center items-center font-medium text-base">
                        <SVG Icon={CSSIcon} />
                        <p>CSS</p>
                    </div>

                    <div className="flex flex-col text-[#12EAE1] space-y-1 justify-center items-center font-medium text-base">
                        <SVG Icon={TailwindIcon} />
                        <p>TAILWIND</p>
                    </div>

                    <div className="flex flex-col text-[#1F84C6] space-y-1 justify-center items-center font-medium text-base">
                        <SVG Icon={MaterialIcon} />
                        <p>MUI</p>
                    </div>

                    <div className="flex flex-col text-[#3bc246] space-y-1 justify-center items-center font-medium text-base">
                        <SVG Icon={NodeJsIcon} />
                        <p>JS</p>
                    </div>

                    <div className="flex flex-col text-[#57AAF8] space-y-1 justify-center items-center font-medium text-base">
                        <SVG Icon={ReactJSIcon} />
                        <p>REACT</p>
                    </div>

                    <div className="flex flex-col text-white space-y-1 justify-center items-center font-medium text-base">
                        <SVG Icon={NextJS} />
                        <p>NEXT</p>
                    </div>

                    <div className="flex flex-col text-[#72B1EC] space-y-1 justify-center items-center font-medium text-base">
                        <SVG Icon={MySQLIcon} />
                        <p>MYSQL</p>
                    </div>

                    <div className="flex flex-col text-white space-y-1 justify-center items-center font-medium text-base">
                        <SVG Icon={WebSocketIcon} />
                        <p>SOCKET</p>
                    </div>

                    <div className="flex flex-col text-[#ECE443] space-y-1 justify-center items-center font-medium text-base">
                        <SVG Icon={LinuxIcon} />
                        <p>LINUX</p>
                    </div>
                </div>
                <p className="text-white font-thin text-base mt-1">
                    Tools I've used to
                </p>
                <div className="flex flex-row flex-wrap justify-center items-center gap-6">
                    <div className="flex flex-col text-[#E67E22] space-y-1 justify-center items-center font-medium text-base">
                        <SVG Icon={GitLabIcon} />
                        <p>GITLAB</p>
                    </div>
                    <div className="flex flex-col text-white space-y-1 justify-center items-center font-medium text-base">
                        <SVG Icon={GithubIcon} />
                        <p>GITHUB</p>
                    </div>
                    <div className="flex flex-col text-[#1F618D] space-y-1 justify-center items-center font-medium text-base">
                        <SVG Icon={VSIcon} />
                        <p>VS CODE</p>
                    </div>
                    <div className="flex flex-col text-purple-500 space-y-1 justify-center items-center font-medium text-base">
                        <SVG Icon={InsomniaIcon} />
                        <p>INSOMNIA</p>
                    </div>
                </div>
            </div>
        </>
    );
}

function SVG({ Icon }) {
    return <Icon />;
}
