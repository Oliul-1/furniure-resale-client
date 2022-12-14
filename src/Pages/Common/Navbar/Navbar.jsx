import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Navbar = () => {

    const { userLogOut, user } = useContext(AuthContext);


    const LogOut = () => {
        userLogOut()
            .then(res => {
                console.log(res);
                toast.error('successfully logout')
            })
            .catch(err => console.log(err))
    }

    const menuItem = <>

        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Product</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        {
            user?.uid ?
                <>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                </>
                :
                <>

                </>
        }

    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            menuItem
                        }
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-violet-400 normal-case text-xl">Furniture Mala</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        menuItem
                    }
                </ul>
            </div>
            {
                user ?
                    <div className="navbar-end">
                        <button onClick={LogOut} className="btn btn-primary">Log Out</button>
                    </div>
                    :
                    <div className="navbar-end">
                        <Link to='/login'><button className="btn btn-primary">Login</button></Link>
                    </div>
            }
        </div>
    );
};

export default Navbar;