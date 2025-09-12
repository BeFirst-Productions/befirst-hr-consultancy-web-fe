import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2'
import Features from '../../components/Features'
import About from '../../components/about'
import Services2 from '../../components/Services2'
import Support from '../../components/Support'
import BlogSection from '../../components/BlogSection'
import Footer from '../../components/footer'
import ProfessionalBanner from '../../components/careers/banner';
import HRBanner from '../../components/banner/hrBanner';
import SEO from '../../components/seo';
// import Hero3 from '../../components/hero3'
// import Pricing from '../../components/Pricing'
// import FunFact from '../../components/FunFact'
// import Projects from '../../components/Projects'
// import Testimonial from '../../components/Testimonial'
// import Scrollbar from '../../components/scrollbar'
// import CoreValues from '../../components/CoreValues';


const HomePage3 = () => {
    return (
        <>

            <SEO
                title="HR Consultancy in Calicut,Kerala | Befirst HR & Management Services"
                description="Befirst HR is one of the best HR consultancy in Calicut,Kerala, also offers recruitment, payroll & training solutions for SMEs, startups & corporates in Calicut & GCC. Book your free consultation."
                keywords={"HR Consultancy in Calicut,HR Consultancy in Kerala,HR Services in Calicut"}
                ogTitle="HR Consultancy in Calicut, Kerala | Befirst HR & Management Services"
                ogDescription="Befirst HR is one of the best HR consultancy in Calicut, Kerala. We also offer recruitment, payroll, and training solutions for SMEs, startups, and corporates in Calicut & GCC. Book your free consultation."
                ogUrl="https://www.befirsthr.com/"
                ogType="website"
                ogImage="https://www.befirsthr.com/images/homepage-og.jpg"
                ogLocale="en_IN"
                articleTags={[
                    "HR Consultancy in Calicut",
                    "HR Consultancy in Kerala",
                    "HR Services in Calicut"
                ]}
                canonical="https://www.befirsthr.com/"
            />
            <Navbar2 />
            {/* <Hero3/> */}
            <ProfessionalBanner />
            <Features featuresClass="wpo-features-section-s2" />
            <About />
            <HRBanner />
            <Services2 srvClass={'wpo-service-section-s3'} />
            {/* <Pricing/> */}
            {/* <FunFact fnClass={'section-padding'}/> */}
            {/* <Projects/> */}
            {/* <Testimonial/> */}
            <Support />
            {/* <CoreValues/> */}
            <BlogSection />
            <Footer />
        </>
    )
};
export default HomePage3;