import HNavigationList from "../../components/nav-section/horizontal/nav-list";
import { HamburgerIcon } from "../../components/nav-section/nav-icons/icon-list";

export default function HNavigation({ state }) {
    return (
        <div className="fixed w-full p-4 sm:w-4/5 bg-[#040D12]">
            <div
                className={`flex justify-end items-center space-x-8 text-white font-semibold font-body`}
                id="topnav"
            >
                <HNavigationList state={state} />
                <button className="block sm:hidden" id="button_aside">
                    <SVG Icon={HamburgerIcon} />
                </button>
            </div>
        </div>
    );
}

function SVG({ Icon }) {
    return <Icon />;
}
