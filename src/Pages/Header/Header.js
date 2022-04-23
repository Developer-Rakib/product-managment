import { Link as button, NavLink, useNavigate } from 'react-router-dom';
import "./Header.css"
import { useContext, useState } from 'react';
import { GoThreeBars } from 'react-icons/go';
import { GrClose } from 'react-icons/gr';


const Header = () => {
    let [toggle, setToggle] = useState(false);

    let navigat = useNavigate();

    // console.log(user);
    // console.log(user?.photoURL);



    const navBtnHndle = () => {
        setToggle(!toggle)
    }

    return (
        <div className='header-container z-10 sticky sm:pt-3 sm:pb-4  nav flex px-5 md:px-10 lg:px-20 justify-between items-center'>
            <div className="logo">
                <h2 className="text-2xl lg:text-4xl sm:mt-3">Product Managment</h2>
            </div>
            <nav onClick={() => setToggle(!toggle)}>
                <span onClick={navBtnHndle} className='sm:hidden absolute right-8 top-5'>{toggle ? <GrClose></GrClose> : <GoThreeBars></GoThreeBars>}</span>
                <ul className={`flex flex-col sm:flex-row absolute left-0 justify-center sm:relative sm:opacity-100 sm:top-0 bg-white sm:bg-inherit w-full py-2 duration-500 ease-out ${toggle ? "top-12 opacity-100" : "top-[-250px] opacity-0"}`}>
                    <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/home"}>HOME</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/addProduct"}>Add Product</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/upgadeProduct"}>Upgrade Product</NavLink>
                </ul>

            </nav>
        </div >
    );
};

export default Header;