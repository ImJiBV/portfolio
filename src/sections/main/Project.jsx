import dolphin from "/projects-images/DolphinR.png";

export default function Project() {
    return (
        <>
            <div className="m-auto w-8/12 sm:w-full space-y-6 text-justify mb-4 font-body">
                <p className="text-white font-medium text-2xl text-center p-6">
                    Personal Projects
                </p>
                <div className="flex flex-row flex-wrap justify-start items-center gap-2">
                    <div className="rounded-lg w-full xl:w-[49.5%] p-3 bg-opacity-5 border-t border-opacity-10 border-white bg-white cursor-pointer">
                        <div className="flex flex-col sm:flex-row gap-3 items-start">
                            <div>
                                <img
                                    className=" rounded-lg object-cover object-left-top w-full sm:w-60"
                                    src={dolphin}
                                    alt="React logo"
                                />
                            </div>

                            <div className="w-full space-y-4">
                                <div className="flex flex-col sm:flex-row justify-between items-start">
                                    <p className="text-white font-medium text-lg">
                                        Dolphin R System
                                    </p>
                                    <p className="text-white text-sm font-normal">
                                        Ongoing
                                    </p>
                                </div>

                                <p className="text-white font-normal text-justify text-sm mt-2">
                                    Elevate your HR management with our
                                    state-of-the-art HRIS project. Streamline
                                    processes, empower employees, and gain
                                    actionable insights, all in one
                                    comprehensive solution.
                                </p>
                                <div className="flex items-center flex-row flex-wrap justify-start gap-2">
                                    <p className="px-2 font-semibold text-sm rounded-full bg-[#183D3D] text-[#93B1A6]">
                                        React
                                    </p>
                                    <p className="px-2 font-semibold text-sm rounded-full bg-[#183D3D] text-[#93B1A6]">
                                        Tailwind
                                    </p>
                                    <p className="px-2 font-semibold text-sm rounded-full bg-[#183D3D] text-[#93B1A6]">
                                        Node
                                    </p>
                                    <p className="px-2 font-semibold text-sm rounded-full bg-[#183D3D] text-[#93B1A6]">
                                        Laravel
                                    </p>
                                    <p className="px-2 font-semibold text-sm rounded-full bg-[#183D3D] text-[#93B1A6]">
                                        Redis
                                    </p>
                                    <p className="px-2 font-semibold text-sm rounded-full bg-[#183D3D] text-[#93B1A6]">
                                        Socket
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="rounded-lg w-full xl:w-[49.5%] p-3 bg-opacity-5 border-t border-opacity-10 border-white bg-white cursor-pointer">
                        <div className="flex flex-col sm:flex-row gap-3 items-start">
                            <div>
                                <img
                                    className=" rounded-lg object-cover object-left-top w-full sm:w-60"
                                    src={dolphin}
                                    alt="React logo"
                                />
                            </div>

                            <div className="w-full space-y-4">
                                <div className="flex flex-col sm:flex-row justify-between items-start">
                                    <p className="text-white font-medium text-lg">
                                        Dolphin R System
                                    </p>
                                    <p className="text-white text-sm font-normal">
                                        Ongoing
                                    </p>
                                </div>

                                <p className="text-white font-normal text-justify text-sm mt-2">
                                    Elevate your HR management with our
                                    state-of-the-art HRIS project. Streamline
                                    processes, empower employees, and gain
                                    actionable insights, all in one
                                    comprehensive solution.
                                </p>
                                <div className="flex items-center flex-row flex-wrap justify-start gap-2">
                                    <p className="px-2 font-semibold text-sm rounded-full bg-[#183D3D] text-[#93B1A6]">
                                        React
                                    </p>
                                    <p className="px-2 font-semibold text-sm rounded-full bg-[#183D3D] text-[#93B1A6]">
                                        Tailwind
                                    </p>
                                    <p className="px-2 font-semibold text-sm rounded-full bg-[#183D3D] text-[#93B1A6]">
                                        Node
                                    </p>
                                    <p className="px-2 font-semibold text-sm rounded-full bg-[#183D3D] text-[#93B1A6]">
                                        Laravel
                                    </p>
                                    <p className="px-2 font-semibold text-sm rounded-full bg-[#183D3D] text-[#93B1A6]">
                                        Redis
                                    </p>
                                    <p className="px-2 font-semibold text-sm rounded-full bg-[#183D3D] text-[#93B1A6]">
                                        Socket
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg w-full xl:w-[49.5%] p-3 bg-opacity-5 border-t border-opacity-10 border-white bg-white cursor-pointer">
                        <div className="flex flex-col sm:flex-row gap-3 items-start">
                            <div>
                                <img
                                    className=" rounded-lg object-cover object-left-top w-full sm:w-60"
                                    src={dolphin}
                                    alt="React logo"
                                />
                            </div>

                            <div className="w-full space-y-4">
                                <div className="flex flex-col sm:flex-row justify-between items-start">
                                    <p className="text-white font-medium text-lg">
                                        Dolphin R System
                                    </p>
                                    <p className="text-white text-sm font-normal">
                                        Ongoing
                                    </p>
                                </div>

                                <p className="text-white font-normal text-justify text-sm mt-2">
                                    Elevate your HR management with our
                                    state-of-the-art HRIS project. Streamline
                                    processes, empower employees, and gain
                                    actionable insights, all in one
                                    comprehensive solution.
                                </p>
                                <div className="flex items-center flex-row flex-wrap justify-start gap-2">
                                    <p className="px-2 font-semibold text-sm rounded-full bg-[#183D3D] text-[#93B1A6]">
                                        React
                                    </p>
                                    <p className="px-2 font-semibold text-sm rounded-full bg-[#183D3D] text-[#93B1A6]">
                                        Tailwind
                                    </p>
                                    <p className="px-2 font-semibold text-sm rounded-full bg-[#183D3D] text-[#93B1A6]">
                                        Node
                                    </p>
                                    <p className="px-2 font-semibold text-sm rounded-full bg-[#183D3D] text-[#93B1A6]">
                                        Laravel
                                    </p>
                                    <p className="px-2 font-semibold text-sm rounded-full bg-[#183D3D] text-[#93B1A6]">
                                        Redis
                                    </p>
                                    <p className="px-2 font-semibold text-sm rounded-full bg-[#183D3D] text-[#93B1A6]">
                                        Socket
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg w-full xl:w-[49.5%] p-3 bg-opacity-5 border-t border-opacity-10 border-white bg-white cursor-pointer">
                        <div className="flex flex-col sm:flex-row gap-3 items-start">
                            <div>
                                <img
                                    className=" rounded-lg object-cover object-left-top w-full sm:w-60"
                                    src={dolphin}
                                    alt="React logo"
                                />
                            </div>

                            <div className="w-full space-y-4">
                                <div className="flex flex-col sm:flex-row justify-between items-start">
                                    <p className="text-white font-medium text-lg">
                                        Dolphin R System
                                    </p>
                                    <p className="text-white text-sm font-normal">
                                        Ongoing
                                    </p>
                                </div>

                                <p className="text-white font-normal text-justify text-sm mt-2">
                                    Elevate your HR management with our
                                    state-of-the-art HRIS project. Streamline
                                    processes, empower employees, and gain
                                    actionable insights, all in one
                                    comprehensive solution.
                                </p>
                                <div className="flex items-center flex-row flex-wrap justify-start gap-2">
                                    <p className="px-2 font-semibold text-sm rounded-full bg-[#183D3D] text-[#93B1A6]">
                                        React
                                    </p>
                                    <p className="px-2 font-semibold text-sm rounded-full bg-[#183D3D] text-[#93B1A6]">
                                        Tailwind
                                    </p>
                                    <p className="px-2 font-semibold text-sm rounded-full bg-[#183D3D] text-[#93B1A6]">
                                        Node
                                    </p>
                                    <p className="px-2 font-semibold text-sm rounded-full bg-[#183D3D] text-[#93B1A6]">
                                        Laravel
                                    </p>
                                    <p className="px-2 font-semibold text-sm rounded-full bg-[#183D3D] text-[#93B1A6]">
                                        Redis
                                    </p>
                                    <p className="px-2 font-semibold text-sm rounded-full bg-[#183D3D] text-[#93B1A6]">
                                        Socket
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}
