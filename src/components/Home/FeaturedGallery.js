import styles from "./FeaturedGallery.module.css";
import { Link } from "react-router-dom";

function FeaturedGallery({featuredgalleries}) {

  return (
    <div className={styles.container}>
     
      <div className={styles.title}>PHOTOS</div>
        
      <div className={styles.cardcontainer}>
      {featuredgalleries.map((gallery,index) => (
          <div className={styles.card} key={index}>
            <img src={gallery.image} alt={gallery.description} className={styles.photo} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedGallery;
