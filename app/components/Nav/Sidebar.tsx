import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { toggleSidebar } from "@/app/redux/slices/modalSlice";

const Sidebar = () => {
    const { isSidebarOpen } = useAppSelector((state) => state.modal);
    const dispatch = useAppDispatch();

    const sidebarClasses = isSidebarOpen ? "transform translate-x-0" : "transform -translate-x-full";

    return (
        <>
            <button className="block md:hidden ml-auto" onClick={() => dispatch(toggleSidebar())}>
                <img src="/icons/menu.svg" alt="menu" />
            </button>

            {isSidebarOpen && (
                <div
                    className={`p-8 fixed h-full w-64 bg-white top-0 right-0 overflow-y-auto transition-transform duration-300 ease-in-out shadow-2xl ${sidebarClasses}`}
                >
                    <button
                        className="text-xl font-bold text-neutral-800 hover:text-gray-700 focus:outline-none mb-5"
                        onClick={() => dispatch(toggleSidebar())}
                    >
                        &#x2715;
                    </button>

                    <div className="font-calibre_medium text-neutral-800 text-2xl">
                        <ul>
                            <li>
                                <a href="/schedule">Schedule</a>
                            </li>
                            <li>
                                <a href="/standings">Standings</a>
                            </li>
                            <li>
                                <a href="/playoffs">Playoffs</a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default Sidebar;
