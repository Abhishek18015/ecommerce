import React from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select'


const Navbar = () => {
    const options = [
        { value: "Men", label: <Link className="link" to='/men'>Men</Link> },
        { value: "Women", label: <Link className="link" to='/Women'>Women</Link> },
        { value: "Kid", label: <Link className="link" to='/Kid'>Kid</Link> },
        { value: "About", label: <Link className="link" to='/About'>About</Link> },
         { value: "Contact", label: <Link className="link" to='/Contact'>Contact</Link> }
    ]
    return (
        <>
            <div className="navbar">
                <div className="icon"> <Link to="/"><img src="../Images/logo1.png" width="80%"  className='icon' alt="" /></Link></div>
                <div className='navbar-loc'>
                    <div className='navbar-icon'>
                        <p>Delivering to India </p>
                        <div className='add-icon'>
                        <img className='icon-location' src='../Images/location.png'></img>
                        <select className='location'>
                            <option>Chandigarh</option>
                            <option>Mohali</option>
                            <option>Zirakpur</option>
                            <option>Himachal</option>
                            <option>Haryana</option>
                            <option>Punjab</option>
                        </select>
                        </div>
                    </div>
                    <div className="sinup">
                        <Select options={options}
                            isSearchable
                            placeholder="Search here...." />
                    </div>
                    <div className='link-navbar'>
                        <Link to='/Signup'  >
                            <p>Hello , sign in </p>
                            <h3>Account</h3>
                        </Link>
                    </div>
                    <div>
                    <Link to= "/CartItem" className='link'><img className='logocart' src="../Images/logo3.png" width="30%" alt="" /></Link>
                    </div>
                </div>
            </div>
                


        </>
    )
}




export default Navbar
