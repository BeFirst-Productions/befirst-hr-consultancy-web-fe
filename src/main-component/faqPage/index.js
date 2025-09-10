import React from 'react';
import Navbar2 from '../../components/Navbar2';
import Hero3 from '../../components/hero3';
import Footer from '../../components/footer';
import FAQs from '../../components/Faqs';
import PageTitle from '../../components/pageTitles/faq-pagetitle';
import SEO from '../../components/seo';

const FAQPage = () => {


    return (
        <>
          <SEO
                title="HR Services in Calicut | Befirst HR Consultancy "
                description="Get answers to your questions about Befirst, providing expert HR Services in Calicut. We cover recruitment, payroll, compliance, and employee support."
                keywords={"HR Services in Calicut, Recruitment Services Calicut, Payroll Services Calicut, HR Consultancy Calicut, Employee Support Calicut"}
            />
            <Navbar2 />
            <PageTitle pageTitle={'Faqs'} pagesub={'Faqs'}/> 
            <FAQs />
            <Footer />

        </>
    );
};

export default FAQPage;