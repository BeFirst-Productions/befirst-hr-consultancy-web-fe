import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pageTitles/service-details-pagetitle'
import Footer from '../../components/footer';
import SEO from '../../components/seo';
import ServiceSingleSection11 from '../../components/ServiceSingleSection/service11';

const ServiceSinglePage11 = () => {

    return (
        <>
            <SEO
                title="Customer Care Orientation in Calicut | Befirst HR Training"
                description="Enhance employee customer service skills with our Customer Care Orientation in Calicut. Befirst HR provides tailor made training to improve customer satisfaction, loyalty, and service excellence."
                keywords="Customer Care Training Calicut, Customer Care Orientation Calicut, Employee Customer Service Training Calicut, Customer Service Skills Calicut, Customer Relationship Management Calicut, "
                ogTitle="Customer Care Orientation in Calicut | Befirst HR Training"
                ogDescription="Enhance employee customer service skills with our Customer Care Orientation in Calicut. Befirst HR provides tailor made training to improve customer satisfaction, loyalty, and service excellence."
                ogUrl="https://www.befirsthr.com/customer-care-training-calicut"
                ogType="website"
                ogImage="https://www.befirsthr.com/images/customer-care-orientation-og.jpg"
                ogLocale="en_IN"
                articleTags={[
                    "Customer Care Training Calicut",
                    "Customer Care Orientation Calicut",
                    "Employee Customer Service Training Calicut",
                    "Customer Service Skills Calicut",
                    "Customer Relationship Management Calicut"
                ]}
                canonical="https://www.befirsthr.com/customer-care-training-calicut"
            />

            <Navbar2 />
            <PageTitle pageTitle={'Customer Care Orientation'} pagesub={'Services'} serviceTitle={'Customer Care Orientation'} />
            <ServiceSingleSection11 />
            <Footer />
            {/* <Scrollbar /> */}
        </>
    );
};

export default ServiceSinglePage11;

