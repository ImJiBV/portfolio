import { RightArrow } from "../../components/page-icons/page-icons";

export default function ContactMe() {
    return (
        <>
            <div className="m-auto w-8/12 sm:w-full space-y-6 text-justify font-body py-60">
                <p className="text-white font-medium text-2xl text-center p-6">
                    Say Hi!
                </p>
                <div className="m-auto w-full lg:w-2/4 space-y-4">
                    <input
                        placeholder="Name"
                        className={`block 
                        w-full 
                        rounded-lg 
                        border-0 p-3 
                        text-gray-900 
                        shadow-sm
                        ring-1
                        ring-inset 
                        ring-gray-300
                        placeholder:text-gray-400 
                        focus:ring-2 
                        focus:ring-inset 
                        focus:ring-[#5C8374]
                        outline-none
                        sm:text-sm 
                        sm:leading-6`}
                    />
                    <input
                        placeholder="Email"
                        className={`block 
                        w-full 
                        rounded-lg 
                        border-0 p-3 
                        text-gray-900 
                        shadow-sm
                        ring-1
                        ring-inset 
                        ring-gray-300
                        placeholder:text-gray-400 
                        focus:ring-2 
                        focus:ring-inset 
                        focus:ring-[#5C8374]
                        outline-none
                        sm:text-sm 
                        sm:leading-6`}
                    />
                    <textarea
                        cols="40"
                        rows="5"
                        placeholder="Message"
                        className={`block 
                        w-full 
                        rounded-lg 
                        border-0 p-3 
                        text-gray-900 
                        shadow-sm
                        ring-1
                        ring-inset 
                        ring-gray-300
                        placeholder:text-gray-400 
                        focus:ring-2 
                        focus:ring-inset 
                        focus:ring-[#5C8374]
                        outline-none
                        sm:text-sm 
                        sm:leading-6`}
                    />

                    <button className="m-auto space-x-2 flex justify-center items-center text-[#183D3D] text-lg font-medium  border-4 border-[#183D3D] py-2 px-4 hover:text-[#93B1A6] hover:border-[#93B1A6]">
                        <SVG Icon={RightArrow} />
                        <p>Let's collaborate</p>
                    </button>
                </div>
            </div>
        </>
    );
}

function SVG({ Icon }) {
    return <Icon />;
}
