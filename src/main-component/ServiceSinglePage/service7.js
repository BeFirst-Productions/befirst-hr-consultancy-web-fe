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
                title="Talent Acquisition Services in Kerala | Befirst HR"
                description="Befirst HR provides Talent Acquisition Services in Kerala, helping businesses in Kozhikode, Kochi, and Trivandrum hire the right talent and ensure smooth onboarding."
                keywords="Talent Acquisition Services in Kerala, recruitment services Kerala, onboarding solutions Kerala, HR consultancy Kozhikode, HR consultancy Kochi"
                ogTitle="Talent Acquisition Services in Kerala | Befirst HR"
                ogDescription="Befirst HR provides Talent Acquisition Services in Kerala, helping businesses in Kozhikode, Kochi, and Trivandrum hire the right talent and ensure smooth onboarding."
                ogUrl="https://www.befirsthr.com/talent-acquisition-services"
                ogType="website"
                ogImage="https://www.befirsthr.com/images/talent-acquisition-og.jpg"
                ogLocale="en_IN"
                articleTags={[
                    "Talent Acquisition Services in Kerala",
                    "Recruitment services Kerala",
                    "Onboarding solutions Kerala",
                    "HR consultancy Kozhikode",
                    "HR consultancy Kochi"
                ]}
                canonical="https://www.befirsthr.com/talent-acquisition-services"
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

