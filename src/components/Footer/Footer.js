import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
    
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
    return ( 
        <footer className={styles.footer}>
            <div className={styles.subcontainer}>
                <a href="https://www.facebook.com/Towards-A-Better-Peace-103755628814730/" target="_blank">
                    <div className={styles.icon}><i className="fa-brands fa-facebook"></i></div>
                </a>
            </div>
            <div className={styles.subcontainer}>
                 <Link to="/aboutus" style={{textDecoration: 0}}>
                     <div className={styles.link}>About Us</div>
                </Link>
                <Link to="/blogs" style={{textDecoration: 0}}>
                     <div className={styles.link}>Blogs</div>
                </Link>
                <Link to="/gallery"  style={{textDecoration: 0}}>
                     <div className={styles.link}>Gallery</div>
                </Link>
                <Link to="/contactus"  style={{textDecoration: 0}}>
                     <div className={styles.link}>Contact Us</div>
                </Link>
            </div>
            <hr className={styles.line}></hr>
            <div className={styles.subcontainer}>
                <div className={styles.text}>All Rights Reserved by Second Tap Root</div>
                <div className={styles.upicon}  onClick={scrollToTop}><i className="fa-solid fa-angle-up"></i></div>
            </div>
        </footer>
     );
}
 
export default Footer;