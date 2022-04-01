import styles from './UpBar.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

const UpBar = () => {
    return (
        <div className={styles.container}>

            <div className={styles.subcontainer1}>
                <div className={styles.componentcontainer}>
                    <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                    <div className={styles.text}>theicon@gmail.com</div>
                </div>
                <div className={styles.sperator}> | </div>
                <div className={styles.componentcontainer}>
                    <FontAwesomeIcon icon={faPhoneAlt} className={styles.icon} />
                    <div className={styles.text}> 09-123456789</div>
                </div>
            </div>
            <div className={styles.subcontainer2}>
                <a href="https://www.facebook.com/Second-Tap-Root-447073468698841/" target="_blank">
                    <FontAwesomeIcon icon={faFacebookSquare} className={styles.brandicon} />
                </a>
            </div>
        </div>
    );
}

export default UpBar;