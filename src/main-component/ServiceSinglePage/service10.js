import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pageTitles/service-details-pagetitle'
import Footer from '../../components/footer';
import SEO from '../../components/seo';
import ServiceSingleSection10 from '../../components/ServiceSingleSection/service10';

const ServiceSinglePage10 = () => {

    return (
        <>
            <SEO
                title="Training & Development Services in Calicut, Kerala | Befirst HR"
                description="Enhance employee skills, knowledge, and leadership with our Training & Development Services in Calicut, Kerala. Transform talent into organizational growth and success."
                keywords="Training & Development Services in Calicut, Kerala"
                ogTitle="Training & Development Services in Calicut, Kerala | Befirst HR"
                ogDescription="Enhance employee skills, knowledge, and leadership with our Training & Development Services in Calicut, Kerala. Transform talent into organizational growth and success."
                ogUrl="https://www.befirsthr.com/training-development-services-calicut-kerala"
                ogType="website"
                ogImage="https://www.befirsthr.com/images/training-development-og.jpg"
                ogLocale="en_IN"
                articleTags={[
           "Training & Development Services in Calicut, Kerala",
           "Employee training Kerala",
           "Leadership development Calicut",
           "Corporate training services Kerala"
                ]}
                canonical="https://www.befirsthr.com/training-development-services-calicut-kerala"
            />

            <Navbar2 />
            <PageTitle pageTitle={'Training & Development'} pagesub={'Services'} serviceTitle={'Training & Development'} />
            <ServiceSingleSection10 />
            <Footer />
            {/* <Scrollbar /> */}
        </>
    );
};

export default ServiceSinglePage10;

