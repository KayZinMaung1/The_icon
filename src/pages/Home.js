import React, { Fragment } from 'react'
import Cover from '../components/Home/Cover'
import FeaturedBlogs from '../components/Home/FeaturedBlogs';
import Motto from '../components/Home/Motto';
import FeaturedGallery from '../components/Home/FeaturedGallery';
import FeaturedVideo from '../components/Home/FeaturedVideo';
import { getFeaturedBlogs, getFeaturedGalleries, getFeaturedVideos } from "../data/data";

const Home = () => {
    const featuredblogs = getFeaturedBlogs();
    const featuredgalleries = getFeaturedGalleries();
    const featuredvideos = getFeaturedVideos();
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
    scrollToTop();
    return (
        <Fragment>
            <Cover />
            <Motto/>
            <FeaturedBlogs featuredblogs={featuredblogs}/>
            <FeaturedGallery featuredgalleries={featuredgalleries}/>
            <FeaturedVideo  featuredvideos={featuredvideos}/>
        </Fragment >
     );
}
export default Home;