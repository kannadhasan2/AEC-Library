import { IoMdMenu } from "react-icons/io";
import {Link} from 'react-router-dom'
import "./index.css"

const Navbar = () => {
    const menuClicked = ()=>{}

    return(
    <header className="header">
        <div  className="logo">
            <img src="https://res.cloudinary.com/dn6izpj6p/image/upload/v1728572662/Pngtree_book_logo_and_certificate_vector_15169356_hqsdq3.png" className="logo-image" />
            <p>AEC</p>
        </div>
        <button className="menu-button" onClick={menuClicked}><IoMdMenu id="menu-icon" /></button>
        <nav className="navbar">
            <Link to="/"><a >Home</a></Link>
            <Link><a >Departments</a></Link>
            <Link><a >Books</a></Link>
            <Link to="/timeline"><a >Timeline</a></Link>
            <Link to="/contact"><a>Contact</a></Link>
        </nav>
    </header>
)
}

export default Navbar