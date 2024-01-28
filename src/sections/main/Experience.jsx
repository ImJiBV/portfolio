import { dotIcon } from "../../components/page-icons/page-icons";

export default function Experience() {
    const timeline = [
        {
            position: "Lead Software Engineer",
            companyName: "8nergy IT Solutions Inc.",
            date: "Sept 2022 - Oct 2023",
            logo: "/portfolio/companylogo/8nergylogo.png",
            experience: [
                "Responsible for managing the server infrastructure in my capacity as a software engineer.",
                "Managing diverse projects and overseeing our repositories.",
                "Integrate data sources and APIs to create automation solutions that fetch, process, and distribute data efficiently",
                "Create Realtime Applications using WebSockets",
            ],
        },
        {
            position: "NexPlay Intern",
            companyName: "NexPlay.",
            date: "March - Jul 2022",
            logo: "/portfolio/companylogo/nexplay.jpg",
            experience: [
                "Analyze, design, develop, as well as implement RESTful services and APIs.",
            ],
        },
        {
            position: "QA Tester (Trainee)",
            companyName: "Quadrant Alpha Technology Solutions Inc.",
            date: "April - May 2019",
            logo: "/portfolio/companylogo/quadrant.png",
            experience: ["Manual Testing", "Create Bug Reports using Jira."],
        },
    ];
    return (
        <>
            <div className="m-auto pt-40 w-8/12 sm:w-full space-y-6 text-justify font-body">
                <p className="text-white font-medium text-2xl text-center p-6">
                    Experience
                </p>
                <div className="flex flex-col justify-center items-center space-y-2 w-full">
                    {timeline.map((key, index) => {
                        return (
                            <div
                                key={index}
                                className={`${
                                    index % 2 == 0
                                        ? "lg:self-start"
                                        : "lg:self-end"
                                } rounded-lg bg-opacity-5 border-t border-opacity-10 border-white bg-white p-2 flex flex-row flex-wrap sm:flex-nowrap justify-start items-start gap-2 w-full md:w-3/4 lg:w-3/5 xl:w-[49.5%]`}
                            >
                                <div className="p-3 rounded-lg bg-white shrink-0 grow-0 object-cover">
                                    <img
                                        className={`w-12 h-12`}
                                        src={key.logo}
                                    />
                                </div>
                                <div className="space-y-2 text-white">
                                    <div>
                                        <p className="font-medium text-sm text-left">
                                            {key.companyName}
                                        </p>
                                        <p className="font-medium text-sm sm:text-lg text-left">
                                            {key.position}
                                        </p>
                                        <p className="font-light text-xs text-left">
                                            {key.date}
                                        </p>
                                    </div>
                                    {key.experience.map((k, i) => (
                                        <div key={i} className="flex">
                                            <SVG Icon={dotIcon} />
                                            <div className="text-sm text-left">
                                                {k}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/*   <div
                            className={`text-white font-body ${
                                index % 2 == 0 ? "" : ""
                            }`}
                        >
                            adsfads
                        </div> */}
                {/* <div className="m-auto py-10 w-8/12 sm:w-full space-y-6 text-justify font-body">
                <p className="text-white font-medium text-2xl text-center p-6">
                    Experience
                </p>
                <div className="bg-red-500">
                    {timeline.map((key, index) => {
                        return (
                            <div
                                className={`${
                                    index % 2 == 0 ? "ml-auto" : "mr-auto"
                                }`}
                            >
                                {index}
                            </div>
                        );
                    })}
                </div>
            </div> */}
            </div>
        </>
    );
}
function SVG({ Icon }) {
    return <Icon />;
}
