import type { Metadata } from 'next'
import Footer from './components/Footer';
import HomeContentServer from './components/HomeContentServer';
import Homeclient from './components/Homeclient';
import HealthConcern from './components/ui/HealthConcern';
import TopBrands from './components/ui/TopBrands';
import Slideshow from './components/ui/SlideShow';
import Homecontent from './components/ui/Homecontent';
import BlogPost from './components/Blogpost';
import Landing from './components/ui/Landing';
import Test from './components/ui/test';





export default function Home() {
  return (
    <>
      <Landing />
      <Homecontent />
      <BlogPost /> 
    </>
  )
}