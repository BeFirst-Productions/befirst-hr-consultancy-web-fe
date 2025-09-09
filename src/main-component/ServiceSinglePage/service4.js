import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pageTitles/service-details-pagetitle'
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';

import SEO from '../../components/seo';

import ServiceSingleSection4 from '../../components/ServiceSingleSection/service4';

const ServiceSinglePage4 = () => {


    return (
        <>
            <SEO
                title="Learning & Development (L&D) Services in Kerala | Befirst HR Consultancy"
                description="Befirst HR offers expert Learning & Development (L&D) Services in Kerala. We provide employee training, leadership programs, and skill development for businesses in Kozhikode, Kochi & Trivandrum."
                keywords={"Learning & Development (L&D) Services in Kerala, employee training Kerala, leadership training Kerala, soft skills training Kerala, management training Kerala, HR consultancy Kerala, corporate training Kozhikode, training services Kochi, training consultancy Trivandrum"}
            />
            <Navbar2 />
            <PageTitle pageTitle={'Payroll & Compensation'} pagesub={'Services'} serviceTitle={'Payroll & Compensation'} />
            <ServiceSingleSection4 />
            <Footer />
            {/* <Scrollbar /> */}
        </>
    );
};

export default ServiceSinglePage4;

