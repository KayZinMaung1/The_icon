import { useState } from "react";
import styles from './Navbar.module.css';
import { NavLink , Link} from "react-router-dom";
import UpBar from "./UpBar";


const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return (
        <div className={styles.container}>
            <UpBar/>
            <nav className={styles.navbar}>
                <NavLink to="/" className={styles.navtitle}>
                    <img
                        src='/images/logo.jpg'
                        alt="The Icon"
                        className={styles.navlogo}
                    />
                    <p> The Icon </p>
                </NavLink>
                <div className={styles.menuicon} onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul
                    className={
                        click ? [styles.navmenu, styles.active].join(" ") : styles.navmenu
                    }
                >
                    <li className={styles.navitem}>
                        <NavLink to="/"  onClick={closeMobileMenu}  className={({ isActive }) => (isActive ? [styles.navlinks, styles.active].join(" "): styles.navlinks)}>
                            Home
                        </NavLink>
                    </li>
                    <li className={styles.navitem}>
                       <NavLink to="/aboutus"  onClick={closeMobileMenu}  className={({ isActive }) => (isActive ? [styles.navlinks, styles.active].join(" ") : styles.navlinks)}>
                            About Us
                        </NavLink>
                    </li>
                    <li className={styles.navitem}>
                        <NavLink to="/blogs"  onClick={closeMobileMenu}  className={({ isActive }) => (isActive ? [styles.navlinks, styles.active].join(" ") : styles.navlinks)}>
                            Blogs
                        </NavLink>
                    </li>
                    <li className={styles.navitem}>
                        <NavLink to="/gallery"  onClick={closeMobileMenu}  className={({ isActive }) => (isActive ? [styles.navlinks, styles.active].join(" ") : styles.navlinks)}>
                            Gallery
                        </NavLink>
                    </li>
                    <li className={styles.navitem}>
                        <NavLink to="/contactus"  onClick={closeMobileMenu}  className={({ isActive }) => (isActive ? [styles.navlinks, styles.active].join(" ") : styles.navlinks)}>
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;