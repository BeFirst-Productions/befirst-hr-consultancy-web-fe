import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pageTitles/service-details-pagetitle'
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';

import SEO from '../../components/seo';
import ServiceSingleSection2 from '../../components/ServiceSingleSection/service2';

const ServiceSinglePage2 = () => {
   

    return (
        <>
            <SEO
                title="HR Planning & Organization Services in Kerala | Befirst HR Consultancy"
                description="Befirst HR provides expert HR Planning & Organization along with HR Operations & Administration Services in Kerala. We help businesses in Kozhikode, Kochi & Trivandrum streamline policies, workforce planning, and performance systems for sustainable growth."
                keywords={"HR Operations & Administration Services in Kerala, HR Planning Kerala, HR consultancy Kozhikode, HR consultancy Kochi, HR consultancy Trivandrum, manpower planning Kerala, HR policy development Kerala, performance appraisal Kerala, HR management services Kerala"}
            />
            <Navbar2 />
            <PageTitle pageTitle={'HR Planning & Organization'} pagesub={'Services'} serviceTitle={'HR Planning & Organization'} />
            <ServiceSingleSection2  />
            <Footer />
            {/* <Scrollbar /> */}
        </>
    );
};

export default ServiceSinglePage2;


