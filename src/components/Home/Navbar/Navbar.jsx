import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";


const Navbar = () => {

    const { logOut, user } = useContext(AuthContext);

    const [theme, setTheme] = useState('light')


    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }


    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
        <div className="navbar mt-4 container mx-auto bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        <NavLink to='/'
                            className={({ isActive }) => isActive ? 'text-[#FFB400] poppins-medium rounded-lg border-2 p-2 border-[#FFB400]' : 'poppins-regular'}>Home</NavLink>


                        <NavLink to='/all_art_&_craft_items'
                            className={({ isActive }) => isActive ? 'text-[#FFB400] poppins-medium rounded-lg border-2 p-2 border-[#FFB400]' : 'poppins-regular'}>All Art & craft Items</NavLink>

                        <NavLink to='/add_craft_item'
                            className={({ isActive }) => isActive ? 'text-[#FFB400] poppins-medium rounded-lg border-2 p-2 border-[#FFB400]' : 'poppins-regular'}>Add Craft Item</NavLink>
                        <NavLink to='/art_&_craft_lists'
                            className={({ isActive }) => isActive ? 'text-[#FFB400] poppins-medium rounded-lg border-2 p-2 border-[#FFB400]' : 'poppins-regular'}>My Art&Craft List</NavLink>
                    </ul>
                </div>
                <div className="flex items-center">
                    <img className="w-10" src={"https://i.ibb.co/Q952KYR/art-logo-removebg-preview.png"} alt="" />
                    <a className="btn btn-ghost bg-clip-text text-transparent bg-gradient-to-r from-[#d4a37b] to-[#FFB400] sora-700 lg:text-3xl text-xl">Craftopia</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu  flex items-center space-x-6 menu-horizontal px-1">
                    <NavLink to='/'
                        className={({ isActive }) => isActive ? 'text-[#FFB400] poppins-medium rounded-lg border-2 p-2 border-[#FFB400] sora-500' : 'sora-400'}>Home</NavLink>


                    <NavLink to='/all_art_&_craft_items'
                        className={({ isActive }) => isActive ? 'text-[#FFB400] poppins-medium rounded-lg border-2 p-2 border-[#FFB400] sora-500' : 'sora-400'}>All Art & craft Items</NavLink>

                    <NavLink to='/add_craft_item'
                        className={({ isActive }) => isActive ? 'text-[#FFB400] poppins-medium rounded-lg border-2 p-2 border-[#FFB400] sora-500' : 'sora-400'}>Add Craft Item</NavLink>
                    <NavLink to='/art_&_craft_lists'
                        className={({ isActive }) => isActive ? 'text-[#FFB400] poppins-medium rounded-lg border-2 p-2 border-[#FFB400] sora-500' : 'sora-400'}>My Art&Craft List</NavLink>
                </ul>
            </div>



            {/* <div className="navbar-end">
            {user ? (
                <div className="dropdown dropdown-end" onMouseEnter={handleDropdownOpen} >
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user.photoURL || "Not Found"} alt="User Avatar" />
                        </div>
                    </label>
                    {isDropdownOpen && (
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <button className="btn btn-sm btn-ghost">{user.displayName || 'User name not found'}</button>
                            </li>
                            <li>
                                <button onClick={handleLogOut} className="btn btn-sm btn-ghost">Logout</button>
                            </li>
                        </ul>
                    )}
                </div>
            ) : (
                <div>
                    <Link to='/login' className="btn text-white bg-gradient-to-r from-[#FD650B] to-[#FFB400]">Login</Link>
                    <Link to='/register' className="btn bg-[#7111EB] text-white">Register</Link>
                </div>
            )}
        </div> */}






            <div className="navbar-end">
                {/* theme controller */}
                <div className="mr-4">
                    <label className="cursor-pointer grid place-items-center">
                        <input onChange={handleToggle} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>

                {
                    user ? <div className="dropdown dropdown-end  ">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL || "Not Found"} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm bg-[#d4a37b] text-white dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                            <li>
                                <button className="btn  btn-sm  btn-ghost">{user?.displayName || 'user name not found'}</button>

                            </li>
                            <li>
                                <button
                                    onClick={handleLogOut}
                                    className="btn btn-sm  btn-ghost">Logout</button>

                            </li>
                        </ul>
                    </div>
                        :
                        <div className="flex gap-2">
                            <Link to='/login' className="btn rounded-2xl text-white bg-gradient-to-r from-[#d4a37b] to-[#FFB400]" > Login</Link>

                            <Link to='/register' className="btn rounded-2xl bg-gradient-to-r from-[#d4a37b] to-[#FFB400] text-white">Register</Link>
                        </div>
                }
            </div>


        </div>
    );
};

export default Navbar;