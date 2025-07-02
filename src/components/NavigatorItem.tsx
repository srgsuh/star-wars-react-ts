interface NavigatorItemProps {
    name: string;
}

const NavigatorItem = ({name}: NavigatorItemProps) => {
    return (
        <li className="nav-item btn btn-danger mx-1">
            {name}
        </li>
    );
};

export default NavigatorItem;