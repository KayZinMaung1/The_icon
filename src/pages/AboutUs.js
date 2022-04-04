import React, { Fragment } from 'react';
import Intro from '../components/AboutUs/Intro';
import Mission from '../components/AboutUs/Mission';

const AboutUs = () => {

      const scrollToTop = ( ) => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
      scrollToTop();
    return ( 
        <Fragment>
            <Intro/>
            <Mission/>
        </Fragment >
     );
}
 
export default AboutUs;