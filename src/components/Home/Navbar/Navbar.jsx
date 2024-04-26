import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    return (
        <div className="navbar container mx-auto bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                       
                    <NavLink to='/'
                            className={({ isActive }) => isActive ? 'text-[#7111EB] poppins-medium rounded-lg border-2 p-2 border-[#7111EB]' : 'poppins-regular'}>Home</NavLink>


                        <NavLink to='/all_art_&_craft_items'
                            className={({ isActive }) => isActive ? 'text-[#7111EB] poppins-medium rounded-lg border-2 p-2 border-[#7111EB]' : 'poppins-regular'}>All Art & craft Items</NavLink>

                        <NavLink to='/add_craft_item'
                            className={({ isActive }) => isActive ? 'text-[#7111EB] poppins-medium rounded-lg border-2 p-2 border-[#7111EB]' : 'poppins-regular'}>Add Craft Item</NavLink>
                        <NavLink to='/art_&_craft_lists'
                            className={({ isActive }) => isActive ? 'text-[#7111EB] poppins-medium rounded-lg border-2 p-2 border-[#7111EB]' : 'poppins-regular'}>My Art&Craft List</NavLink>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Craftopia</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu  flex items-center space-x-6 menu-horizontal px-1">
                <NavLink to='/'
                            className={({ isActive }) => isActive ? 'text-[#7111EB] poppins-medium rounded-lg border-2 p-2 border-[#7111EB]' : 'poppins-regular'}>Home</NavLink>


                        <NavLink to='/all_art_&_craft_items'
                            className={({ isActive }) => isActive ? 'text-[#7111EB] poppins-medium rounded-lg border-2 p-2 border-[#7111EB]' : 'poppins-regular'}>All Art & craft Items</NavLink>

                        <NavLink to='/add_craft_item'
                            className={({ isActive }) => isActive ? 'text-[#7111EB] poppins-medium rounded-lg border-2 p-2 border-[#7111EB]' : 'poppins-regular'}>Add Craft Item</NavLink>
                        <NavLink to='/art_&_craft_lists'
                            className={({ isActive }) => isActive ? 'text-[#7111EB] poppins-medium rounded-lg border-2 p-2 border-[#7111EB]' : 'poppins-regular'}>My Art&Craft List</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/register' className="btn">Register</Link>
                <Link to='/login' className="btn">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;