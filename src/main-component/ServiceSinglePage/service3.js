import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pageTitles/service-details-pagetitle'
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';

import SEO from '../../components/seo';
import ServiceSingleSection3 from '../../components/ServiceSingleSection/service3';

const ServiceSinglePage3 = () => {

    return (
        <>
            <SEO
                title="Learning & Development (L&D) Services in Kerala | Befirst HR"
                description="Befirst HR offers expert Learning & Development (L&D) Services in Kerala. We provide employee training, leadership programs, and skill development for businesses across Kerala."
                keywords="Learning & Development (L&D) Services in Kerala, Learning & Development (L&D) Services in Calicut, leadership training Kerala, HR consultancy Kerala"
                ogTitle="Learning & Development (L&D) Services in Kerala | Befirst HR"
                ogDescription="Befirst HR offers expert Learning & Development (L&D) Services in Kerala. We provide employee training, leadership programs, and skill development for businesses across Kerala."
                ogUrl="https://www.befirsthr.com/learning-development"
                ogType="website"
                ogImage="https://www.befirsthr.com/images/learning-development-og.jpg"
                ogLocale="en_IN"
                articleTags={[
                    "Learning & Development (L&D) Services in Kerala",
                    "Learning & Development (L&D) Services in Calicut",
                    "Leadership training Kerala",
                    "HR consultancy Kerala"
                ]}
                canonical="https://www.befirsthr.com/learning-development"
            />

            <Navbar2 />
            <PageTitle pageTitle={'Learning & Development'} pagesub={'Services'} serviceTitle={'Learning & Development'} />
            <ServiceSingleSection3 />
            <Footer />
            {/* <Scrollbar /> */}
        </>
    );
};

export default ServiceSinglePage3;

