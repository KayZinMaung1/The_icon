import styles from "./Intro.module.css";

function Intro() {
    return (
            <div className={styles.container}>

                <div className={styles.textcontainer}>
                    <p className={styles.title}>About Us</p>
                    <p className={styles.description}>
                      <span>
                        The Icon အဖွဲ့ကို ဒီဇင်ဘာလ 4 ရက် 2017 ခုနှစ်တွင်စတင်ဖွဲ့စည်းခဲ့ပါသည်။
                        ဓာတ်ပုံဖြင့်အသက်မွေးကြသောသူများနှင့် အကူအညီလိုအပ်နေသူများအား 
                        အကူအညီပေးနိုင်ရန် ရည်ရွယ်၍ဖွဲ့စည်းခဲ့ပါသည်။ ဓာတ်ပုံပညာအား 
                        သင်ပြပေးခြင်း ၊ ပြပွဲများဖြစ်မြောက်စေရန် ပြင်ဆင်နေခြင်းများကို 
                        လုပ်ဆောင်နေပါသည်။
                      </span>
                    </p>
                    
                </div>

                <div>
                    {<img src="/images/aboutusimage.jpg" alt="blog image" className={styles.img} />}
                </div>

               

            </div>
       
    );
}

export default Intro;
