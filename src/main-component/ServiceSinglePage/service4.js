import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pageTitles/service-details-pagetitle'
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';

import SEO from '../../components/seo';

import ServiceSingleSection4 from '../../components/ServiceSingleSection/service4';

const ServiceSinglePage4 = () => {


    return (
        <>
            <SEO
                title="Payroll & Compensation Services in Kerala | Befirst HR Solutions"
                description="Befirst HR delivers expert Payroll & Compensation Services in Kerala. Ensure accurate salaries, compliance & seamless HR management with tailored solutions for your business."
                keywords="Payroll outsourcing in Kerala, Salary processing services Kerala, Compensation management solutions, Employee payroll services Kerala, HR and payroll services Kerala"
                ogTitle="Payroll & Compensation Services in Kerala | Befirst HR Solutions"
                ogDescription="Befirst HR delivers expert Payroll & Compensation Services in Kerala. Ensure accurate salaries, compliance & seamless HR management with tailored solutions for your business."
                ogUrl="https://www.befirsthr.com/payroll-compensation-services"
                ogType="website"
                ogImage="https://www.befirsthr.com/images/payroll-compensation-og.jpg"
                ogLocale="en_IN"
                articleTags={[
                    "Payroll outsourcing in Kerala",
                    "Salary processing services Kerala",
                    "Compensation management solutions",
                    "Employee payroll services Kerala",
                    "HR and payroll services Kerala"
                ]}
                canonical="https://www.befirsthr.com/payroll-compensation-services"
            />

            <Navbar2 />
            <PageTitle pageTitle={'Payroll & Compensation'} pagesub={'Services'} serviceTitle={'Payroll & Compensation'} />
            <ServiceSingleSection4 />
            <Footer />
            {/* <Scrollbar /> */}
        </>
    );
};

export default ServiceSinglePage4;

