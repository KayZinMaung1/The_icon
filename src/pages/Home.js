import React, { Fragment } from 'react'
import Cover from '../components/Home/Cover'
import FeaturedBlogs from '../components/Home/FeaturedBlogs';
import FeaturedGallery from '../components/Home/FeaturedGallery';
import FeaturedVideo from '../components/Home/FeaturedVideo';
import Gallery from '../components/Home/Gallery';
import { getFeaturedBlogs, getFeaturedGalleries, getFeaturedVideos, getMainGalleries } from "../data/data";

const Home = () => {
    const maingalleries = getMainGalleries();
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
            <Gallery maingalleries={maingalleries}/>
            <FeaturedBlogs featuredblogs={featuredblogs}/>
            <FeaturedGallery featuredgalleries={featuredgalleries}/>
            <FeaturedVideo  featuredvideos={featuredvideos}/>
        </Fragment >
     );
}
export default Home;