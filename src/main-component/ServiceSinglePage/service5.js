import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pageTitles/service-details-pagetitle'
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';

import SEO from '../../components/seo';

import ServiceSingleSection5 from '../../components/ServiceSingleSection/service5';

const ServiceSinglePage5 = () => {
  
    return (
        <>
            <SEO
                title="Recruitment Services in Kerala | Befirst HR Consultancy"
                description="Befirst HR Consultancy offers expert recruitment services in Kerala, providing trusted manpower services, staffing solutions, and HR outsourcing to help businesses hire the right talent."
                keywords={"recruitment services in Kerala, manpower services in Kerala, staffing solutions in Kerala, HR outsourcing in Kerala"}
            />
            <Navbar2 />
            <PageTitle pageTitle={'Recruitment Services'} pagesub={'Services'} serviceTitle={'Recruitment Services'} />
            <ServiceSingleSection5 />
            <Footer />
            {/* <Scrollbar /> */}
        </>
    );
};

export default ServiceSinglePage5;

