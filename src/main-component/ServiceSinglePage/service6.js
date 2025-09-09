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
                title="Quality Assurance & HR Compliance Services in Kerala | Befirst HR Consultancy"
                description="Befirst HR provides expert Quality Assurance & HR Compliance Services in Kerala. We help businesses in Kozhikode, Kochi & Trivandrum stay legally compliant, reduce risks, and maintain global HR standards."
                keywords={"Quality Assurance & HR Compliance Services in Kerala, HR compliance Kerala, HR audit Kerala, statutory compliance Kerala, labour law compliance Kerala, HR consultancy Kozhikode, HR consultancy Kochi, HR consultancy Trivandrum, workplace safety compliance Kerala, HR policy review Kerala"}
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

