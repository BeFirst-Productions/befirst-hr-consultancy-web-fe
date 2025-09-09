import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pageTitles/service-details-pagetitle'
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import SEO from '../../components/seo';
import ServiceSingleSection7 from '../../components/ServiceSingleSection/service7';

const ServiceSinglePage7 = () => {

    return (
        <>
            <SEO
                title="Talent Acquisition & Onboarding Services in Kerala | Befirst HR Consultancy"
                description="Befirst HR offers expert Talent Acquisition & Onboarding Services in Kerala. We help businesses in Kozhikode, Kochi & Trivandrum hire top talent, streamline recruitment, and ensure smooth employee integration."
                keywords={"Talent Acquisition & Onboarding Services in Kerala, recruitment services Kerala, onboarding solutions Kerala, HR consultancy Kozhikode, HR consultancy Kochi, HR consultancy Trivandrum, employee onboarding Kerala, talent management Kerala, hiring services Kerala"}
            />
            <Navbar2 />
            <PageTitle pageTitle={'Talent Acquisition & Onboarding'} pagesub={'Services'} serviceTitle={'Talent Acquisition & Onboarding'} />
            <ServiceSingleSection7 />
            <Footer />
            {/* <Scrollbar /> */}
        </>
    );
};

export default ServiceSinglePage7;

