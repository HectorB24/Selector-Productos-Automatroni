import { NavLink } from "react-router-dom";

const Eyelashes = () => {

    const activeStyle = 'bg-white text-black';
    const inactiveStyle = 'bg-[#0000c8] text-white border-solid border-4 border-{#d5d7d8} p-1';
    return (
        <div className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li>
                    <NavLink 
                    to='/measures'
                    className={({ isActive }) =>
                        isActive ? activeStyle : inactiveStyle
                    }>
                        Medidas
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                    to='/draw'
                    className={({ isActive }) =>
                        isActive ? activeStyle : inactiveStyle
                    }>
                        Plano
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                    to='/list'
                    className={({ isActive }) =>
                        isActive ? activeStyle : inactiveStyle
                    }>
                        Lista
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export { Eyelashes };