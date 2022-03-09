import React, { Fragment } from 'react'
import Cover from '../components/Home/Cover'
import FeaturedBlogs from '../components/Home/FeaturedBlogs';
import Motto from '../components/Home/Motto';
import FeaturedGallery from '../components/Home/FeaturedGallery';
import VisionMissionGoal from '../components/Home/VisionMissionGoal';
import FeaturedVideo from '../components/Home/FeaturedVideo';
import { getFeaturedBlogs, getFeaturedGalleries, getFeaturedVideos } from "../data/data";

const Home = () => {
    const video1 ='https://media.w3.org/2010/05/sintel/trailer_hd.mp4';
    const videos = [video1,video1,video1,video1,video1,video1];

    
    const featuredblogs = getFeaturedBlogs();
    const featuredgalleries = getFeaturedGalleries();
    const featuredvideos = getFeaturedVideos();

    return (
        <Fragment>
            <Cover />
            <Motto/>
            <FeaturedBlogs featuredblogs={featuredblogs}/>
            <FeaturedGallery featuredgalleries={featuredgalleries}/>
            <FeaturedVideo  featuredvideos={featuredvideos}/>
            <VisionMissionGoal/>
        </Fragment >
     );
}
export default Home;