import { IoMdMenu } from "react-icons/io";
import "./index.css"

const Navbar = () => {
    const menuIcon = document.querySelector('#menu-icon');

    return(
    <header class="header">
        <div  class="logo">
            <img src="https://res.cloudinary.com/dn6izpj6p/image/upload/v1728572662/Pngtree_book_logo_and_certificate_vector_15169356_hqsdq3.png" className="logo-image" />
            <p>AEC</p>
        </div>
        <IoMdMenu id="menu-icon" />
        <nav class="navbar">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Portfolio</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
        </nav>
    </header>
)
}

export default Navbar