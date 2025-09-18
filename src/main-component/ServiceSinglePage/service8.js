import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pageTitles/service-details-pagetitle'
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import SEO from '../../components/seo';
import ServiceSingleSection8 from '../../components/ServiceSingleSection/service8';

const ServiceSinglePage8 = () => {

    return (
        <>
            <SEO
                title="HR Policy Services in Kerala | HR Policy Consultancy in Kozhikode, Kochi & Trivandrum"
                description="Befirst HR & Management Consultancy offers expert HR policy services in Kerala. Get tailor-made HR policies in Kozhikode, Kochi, and Trivandrum for compliance, smooth operations, and effective HR management."
                keywords="HR Policy Services Kerala, HR Policy Consultancy Kerala, HR Policies Kozhikode, HR Policy Management Kerala, HR Compliance Kerala, HR Procedures Kerala,Befirst HR Services"
                ogTitle="HR Policy Services in Kerala | HR Policy Consultancy in Kozhikode, Kochi & Trivandrum"
                ogDescription="Befirst HR & Management Consultancy offers expert HR policy services in Kerala. Get tailor-made HR policies in Kozhikode, Kochi, and Trivandrum for compliance, smooth operations, and effective HR management."
                ogUrl="https://www.befirsthr.com/hr-policy-services-kerala"
                ogType="website"
                ogImage="https://www.befirsthr.com/images/hr-policy-services-og.jpg"
                ogLocale="en_IN"
                articleTags={[
                    "HR Policy Services Kerala",
                    "HR Policy Consultancy Kerala",
                    "HR Policies Kozhikode",
                    "HR Policy Management Kerala",
                    "HR Compliance Kerala",
                    "HR Procedures Kerala",
                    "Befirst HR Services"
                ]}
                canonical="https://www.befirsthr.com/hr-policy-services-kerala"
            />

            <Navbar2 />
            <PageTitle pageTitle={'HR Policy & Procedure'} pagesub={'Services'} serviceTitle={'HR Policy & Procedure'} />
            <ServiceSingleSection8 />
            <Footer />
            {/* <Scrollbar /> */}
        </>
    );
};

export default ServiceSinglePage8;

