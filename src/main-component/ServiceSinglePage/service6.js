import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pageTitles/service-details-pagetitle'
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import SEO from '../../components/seo';
import ServiceSingleSection6 from '../../components/ServiceSingleSection/service6';

const ServiceSinglePage6 = () => {

    return (
        <>
            <SEO
                title="HR Compliance Services in Kerala | Befirst HR"
                description="Befirst HR provides expert Quality Assurance & HR Compliance Services in Kerala. We help businesses in Kozhikode, Kochi & Trivandrum stay legally compliant, reducing risks."
                keywords={"HR compliance services Kerala, Statutory compliance for businesses, Labour law compliance Kerala, HR audit services Kerala, Employee compliance solutions Kerala"}
            />
            <Navbar2 />
            <PageTitle pageTitle={'Quality Assurance & Compliance'} pagesub={'Services'} serviceTitle={'Quality Assurance & Compliance'} />
            <ServiceSingleSection6 />
            <Footer />
            {/* <Scrollbar /> */}
        </>
    );
};

export default ServiceSinglePage6;

