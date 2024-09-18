import { NavLink } from "react-router-dom";

const Eyelashes = () => {
    return (
        <ul>
            <li>
                <NavLink 
                to='/parameters'>
                    Parámetros
                </NavLink>
            </li>

            <li>
                <NavLink 
                to='/ranges'>
                    Rangos
                </NavLink>
            </li>

            <li>
                <NavLink 
                to='/listCharge'>
                    Lista
                </NavLink>
            </li>
        </ul>
    )
}

export { Eyelashes };