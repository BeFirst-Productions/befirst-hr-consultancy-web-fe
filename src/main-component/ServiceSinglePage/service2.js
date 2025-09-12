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
                title="HR Planning & Organization Services in Kerala | Befirst HR"
                description="Befirst HR provides professional HR planning and organization services in Kerala, supporting businesses to optimize workforce, improve efficiency, and drive success."
                keywords="HR Planning services in Kerala, HR Planning & Organization Services in Kerala, manpower planning Kerala, HR management services Kerala"
                ogTitle="HR Planning & Organization Services in Kerala | Befirst HR"
                ogDescription="Befirst HR provides professional HR planning and organization services in Kerala, helping businesses optimize workforce, improve efficiency, and drive success."
                ogUrl="https://www.befirsthr.com/hr-planning-organization"
                ogType="website"
                ogImage="https://www.befirsthr.com/images/hr-planning-og.jpg"
                ogLocale="en_IN"
                articleTags={[
                    "HR Planning services in Kerala",
                    "HR Planning & Organization Services in Kerala",
                    "Manpower planning Kerala",
                    "HR management services Kerala"
                ]}
                canonical="https://www.befirsthr.com/hr-planning-organization"
            />

            <Navbar2 />
            <PageTitle pageTitle={'HR Planning & Organization'} pagesub={'Services'} serviceTitle={'HR Planning & Organization'} />
            <ServiceSingleSection2 />
            <Footer />
            {/* <Scrollbar /> */}
        </>
    );
};

export default ServiceSinglePage2;


