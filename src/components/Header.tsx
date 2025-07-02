import Navigator from "./Navigator.tsx";

const Header = () => {
    return (
        <header className="rounded-top-4">
            <Navigator/>
            <h1 className="text-center fs-1 py-4">Luke Skywalker</h1>
        </header>
    );
};

export default Header;