import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pageTitles/contact-pagetitle'
import Contactpage from '../../components/Contactpage'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Careers from '../../components/careers';
import SEO from '../../components/seo';


const CareersPage = () => {
    return (
        <>
            <SEO
                title="HR Jobs in Kerala & India | Careers at Befirst "
                description="Join Befirst HR & find HR jobs in Kerala and India. Explore career opportunities where passion, talent, and innovation thrive."
                keywords={"Befirst HR careers, HR jobs in Kerala, HR consultancy jobs India, management consultancy careers, HR opportunities Kerala, join Befirst HR, HR recruitment jobs, careers in HR consultancy, HR talent development jobs"}
            />
            <Navbar2 />
            <PageTitle pageTitle={'Careers'} pagesub={'Careers'} />
            <Careers />
            <Footer />
            {/* <Scrollbar /> */}
        </>
    )
};
export default CareersPage;

