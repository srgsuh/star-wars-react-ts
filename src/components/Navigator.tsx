import NavigatorItem from "./NavigatorItem.tsx";

const Navigator = () => {
    return (
        <nav>
            <ul className="nav fixed-top mt-1 ms-5">
                <NavigatorItem name={"Home"} />
                <NavigatorItem name={"About me"} />
                <NavigatorItem name={"Star wars"} />
                <NavigatorItem name={"Contacts"} />
            </ul>
        </nav>
    );
};

export default Navigator;