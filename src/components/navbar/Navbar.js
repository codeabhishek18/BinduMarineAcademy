import Hamburger from '../hamburger/Hamburger';
import Logo from '../logo/Logo';
import Navlinks from '../navlinks/Navlinks';
import Sidebar from '../sidebar/Sidebar';
import navbar from './Navbar.module.css'
import { useState } from 'react'

const Navbar = () =>
{
    const [ open, setOpen ] = useState(false);

    return(
        <div className={navbar.container}>
            <Logo/>
            {open && <Navlinks setOpen={setOpen}/>}
            <Hamburger setOpen={setOpen}/>
        </div>
    )
}

export default Navbar;