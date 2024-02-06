import Dropdown from "react-bootstrap/Dropdown";
import classNames from "classnames/bind";
import style from "./DropdownMenu.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function DropdownMenu({ title, listActions, width = "120px", border, icon }) {
    const cx = classNames.bind(style);
    return (
        <Dropdown>
            <Dropdown.Toggle
                className={cx("button-dropdown")}
                id="button-dropdown"
                style={{
                    border: { border },
                    width: { width },
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}
            >
                {icon ? <FontAwesomeIcon icon={icon} /> : ""}
                &nbsp; &nbsp;
                {title}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {listActions?.map((action, index) => (
                    <Link key={index} to={action.to}>
                        {action.name}
                    </Link>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropdownMenu;
