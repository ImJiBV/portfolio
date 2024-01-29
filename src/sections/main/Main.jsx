import { Helmet } from "react-helmet-async";
import { RightArrow, ShapeDiv } from "../../components/page-icons/page-icons";
import geek from "/icons/geek.svg";

export default function Main({ state }) {
    const selectExperienceSection = (event) => {
        state[3].scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
        });
    };

    return (
        <div
            className="main"
            ref={(ref) => {
                state[0] = ref;
            }}
        >
            <Helmet>
                <title> Portfolio | James Villanueva</title>
            </Helmet>
            <div className="flex flex-row justify-center items-center min-h-screen m-auto py-40 font-body">
                <div className="flex flex-col justify-center items-center sm:items-start w-8/12 sm:w-full md:w-1/2 text-center sm:text-left">
                    <div className="space-y-4">
                        <p className="text-white text-3xl sm:text-4xl font-thin">
                            Hello, I'm{" "}
                            <span className="text-[#5C8374]">
                                James Ian Villanueva
                            </span>
                        </p>
                        <p className="font-semibold text-4xl sm:text-5xl text-white">
                            Full Stack Developer
                        </p>
                        <p className="font-thin text-base text-white">
                            In the realm of code, where logic meets creativity,
                            software engineers sculpt the future line by line,
                            turning abstract ideas into tangible innovation, and
                            debugging the path to progress.
                        </p>
                    </div>

                    <div className="mt-12">
                        <button
                            onClick={() => selectExperienceSection()}
                            className="space-x-2 flex justify-center items-center text-[#183D3D] text-lg font-medium  border-4 border-[#183D3D] py-2 px-4 hover:text-[#93B1A6] hover:border-[#93B1A6]"
                        >
                            <SVG Icon={RightArrow} />
                            <p>Experience</p>
                        </button>
                    </div>
                </div>
                <div className="w-1/2 hidden md:block text-white ">
                    <div className="">
                        <img
                            className="w-96 m-auto"
                            src={geek}
                            alt="React logo"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function SVG({ Icon }) {
    return <Icon />;
}
