import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pageTitles/contact-pagetitle'
import Contactpage from '../../components/Contactpage'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import SEO from '../../components/seo';


const ContactPage = () => {
    return (
        <>
            <SEO
                title="Top HR Consultancy in Kerala | Contact Us"
                description="Contact Befirst HR, the Top HR Consultancy in Kerala. We provide HR services, payroll solutions, talent acquisition, and compliance support across Kerala."
                keywords="Top HR Consultancy in Kerala, Recruitment Services Kerala, HR Outsourcing Kerala, Employee Training Kerala, Business Consulting Kerala"
                ogTitle="Top HR Consultancy in Kerala | Contact Us"
                ogDescription="Contact Befirst HR, the Top HR Consultancy in Kerala. We provide HR services, payroll solutions, talent acquisition, and compliance support across Kerala."
                ogUrl="https://www.befirsthr.com/contact"
                ogType="website"
                ogImage="https://www.befirsthr.com/assets/images/hr-consultancy-kerala.jpg"
                ogLocale="en_IN"
                ogSiteName="Befirst HR"
                articleTags={[
                    "Top HR Consultancy in Kerala",
                    "Recruitment Services Kerala",
                    "HR Outsourcing Kerala",
                    "Employee Training Kerala",
                    "Business Consulting Kerala"
                ]}
                canonical="https://www.befirsthr.com/contact"
            />

            <Navbar2 />
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact Us'} />
            <Contactpage />
            <Footer />
            {/* <Scrollbar /> */}
        </>
    )
};
export default ContactPage;

