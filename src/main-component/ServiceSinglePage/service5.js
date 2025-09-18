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
                title="Recruitment Assistance in Kerala | Befirst HR Consultancy"
                description="Befirst HR Consultancy offers expert Recruitment Assistance in Kerala, providing trusted manpower services, staffing solutions, and HR outsourcing to help businesses hire the right talent."
                keywords="Recruitment Assistance in Kerala, manpower services in Kerala, staffing solutions in Kerala, HR outsourcing in Kerala"
                ogTitle="Recruitment Assistance in Kerala | Befirst HR Consultancy"
                ogDescription="Befirst HR Consultancy offers expert Recruitment Assistance in Kerala, providing trusted manpower services, staffing solutions, and HR outsourcing to help businesses hire the right talent."
                ogUrl="https://www.befirsthr.com/recruitment-services-kerala"
                ogType="website"
                ogImage="https://www.befirsthr.com/images/recruitment-services-og.jpg"
                ogLocale="en_IN"
                articleTags={[
                    "Recruitment Assistance in Kerala",
                    "Manpower services in Kerala",
                    "Staffing solutions in Kerala",
                    "HR outsourcing in Kerala"
                ]}
                canonical="https://www.befirsthr.com/recruitment-services-kerala"
            />

            <Navbar2 />
            <PageTitle pageTitle={'Recruitment Assistance'} pagesub={'Services'} serviceTitle={'Recruitment Assistance'} />
            <ServiceSingleSection5 />
            <Footer />
            {/* <Scrollbar /> */}
        </>
    );
};

export default ServiceSinglePage5;

