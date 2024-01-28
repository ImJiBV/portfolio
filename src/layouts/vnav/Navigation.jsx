import VNavigationList from "../../components/nav-section/vertical/nav-list";

export default function VNavigation() {
    return (
        <aside
            className={`fixed top-0 h-full w-[50px] flex flex-col justify-center items-center bg-transparent space-y-4`}
            id="aside"
        >
            <VNavigationList />
        </aside>
    );
}
