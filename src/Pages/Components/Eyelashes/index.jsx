import { NavLink } from "react-router-dom";

const Eyelashes = () => {

    const activeStyle = 'text-base text-white text-center p-2 mr-2 bg-[#0000c8] border-[1px] border-[#0000c8] rounded-t-[0.6rem] transition-all duration-500 ease-in-out cursor-pointer';
    const inactiveStyle = 'bg-white text-black border-solid border-l-[2px] border-r-[2px] border-b-0 border-[#d5d7d8]';
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