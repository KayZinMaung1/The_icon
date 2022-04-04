import { useRef, useState, useEffect } from "react";
import styles from "./Gallery.module.css";
import Carousel from "react-elastic-carousel";

function Gallery({maingalleries}) {
  let resetTimeout;
  const carouselRef = useRef(null);

  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    function updateSize() {
      setTotalPages(window.innerWidth >= 1119 ? 5 : 6);
    }
    window.addEventListener("resize", updateSize);

    updateSize();

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);


  return (
    <div className={styles.container}>
      <Carousel
        ref={carouselRef}
        enableAutoPlay
        autoPlaySpeed={1500} // same time
        onNextEnd={({ index }) => {
          clearTimeout(resetTimeout);
          if (index + 1 === totalPages) {
            resetTimeout = setTimeout(() => {
              carouselRef?.current?.goTo(0);
            }, 1500); // same time
          }
        }}
      >
        {maingalleries.map((gallery, index) => (
          <img key={index} src={gallery.image} alt={gallery.description} className={styles.photo}/>  
        ))}

      </Carousel>
    </div>
  ); 
}

export default Gallery;
