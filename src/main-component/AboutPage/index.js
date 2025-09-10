import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pageTitles/about-pagetitle'
import FunFact from '../../components/FunFact'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import AboutSection from '../../components/about/page';
import SEO from '../../components/seo';


const AboutPage =() => {
    return(
        <>
           <SEO
                title="Leading HR Consultancy in Calicut | About Befirst HR "
                description="Discover Befirst HR, a trusted HR consultancy in Calicut & Kerala. We help businesses with recruitment, payroll, compliance & training to achieve sustainable growth."
                keywords={" Leading HR consultancy Calicut, HR services Kerala, HR consultancy Kerala, recruitment services Calicut, Befirst HR"}
            />
            <Navbar2/>
            <PageTitle pageTitle={'About Us'} pagesub={'About Us'}/> 
            <AboutSection abClass={'wpo-about-section-s2'}/>
            {/* <VisionMission/> */}
            {/* <Services2 srvClass={'wpo-service-section-s3'}/> */}
            {/* <Pricing/> */}
            <Footer/>
            {/* <Scrollbar/> */}
        </>
    )
};
export default AboutPage;
