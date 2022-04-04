import ListBlog from "../Common/ListBlog";
import styles from './Mission.module.css';

const Mission = () => {
    const mission = [' ဓာတ်ပုံပညာရှင်များ၏ တဦးချင်းစီ၏ ဖန်တီးမှုတိုးတက်မှုအားပံ့ပိုးရန် ၊ အားပေးရန် နှင့် လှုံ့ဆော်ရန်။'];
    return ( 
        <div className={styles.container}>
            <p className={styles.title}>အဖွဲ့အစည်း၏ ရည်ရွယ်ချက်</p>
            <hr className={styles.line}></hr>
            <ListBlog 
                title=" "
                image='/images/missionimage.jpg'
                data={mission}
                margintop='0px'
            />
        </div>
        
     );
}
 
export default Mission;