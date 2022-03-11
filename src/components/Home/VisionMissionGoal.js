import styles from "./VisionMissionGoal.module.css";
import visionimage from '../../images/visionimage.jpg';
import missionimage from '../../images/missionimage.jpg';
import goalimage from '../../images/goalimage.jpg';
import { Link } from "react-router-dom";
import VMGBlogs from "../AboutUs/VMGBlogs";

const VisionMissionGoal = () => {
    return ( 
        <div className={styles.container}>
             <div className={styles.title}>OUR VISION , MISSION , GOAL</div>
             <div className={styles.subtitle}>(ကျွန်ုပ်တို့၏  ရည်မှန်းချက်/ မျှော်မှန်းချက် / ပန်းတိုင်)</div>
             <div className={styles.subcontainer}>
                <div className={styles.imagecontainer}>
                    <img src={visionimage} alt="vision" className={styles.img} />
                    <Link to="/aboutus" style={{textDecoration: 0}}>
                        <div className={styles.text}>Vission</div>
                    </Link>
                </div>
                <div className={styles.imagecontainer}>
                    <img src={missionimage} alt="mission" className={styles.img} />
                    <Link to="/aboutus" style={{textDecoration: 0}}>
                        <div className={styles.text}>Mission</div>
                    </Link>
                </div>
                <div className={styles.imagecontainer}>
                    <img src={goalimage} alt="goal" className={styles.img} />
                    <Link to="/aboutus" style={{textDecoration: 0}}>
                        <div className={styles.text}>Goal</div>
                    </Link>
                </div>
            </div>
           
        </div>            
     );
}
 
export default VisionMissionGoal;