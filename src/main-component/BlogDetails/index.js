import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pageTitles/Blog-details-pagetitle'
import BlogSingle from '../../components/BlogDetails/blog1'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import SEO from '../../components/seo';


const BlogDetails = () => {
    return (
        <>
            <SEO
                title="Leading HR Consultancy in Calicut, Kerala | Befirst HR"
                description="Discover Befirst HR, the leading HR consultancy in Calicut, Kerala. We provide payroll outsourcing, recruitment outsourcing, compliance management, talent solutions, and HR outsourcing tailored for SMEs and corporates."
                keywords={"leading HR consultancy in Calicut Kerala, HR consultancy Calicut, HR services in Kerala, payroll outsourcing Kerala, recruitment outsourcing Kerala"}
                ogTitle="Leading HR Consultancy in Calicut, Kerala | Befirst HR"
                ogDescription="Discover Befirst HR, the leading HR consultancy in Calicut, Kerala. We provide payroll outsourcing, recruitment outsourcing, compliance management, talent solutions, and HR outsourcing tailored for SMEs and corporates."
                ogUrl="https://www.befirsthr.com/hr-consultancy-calicut"
                ogType="article"
                ogImage="https://www.befirsthr.com/images/hr-consultancy-calicut.jpg"
                ogLocale="en_IN"
                articleTags={[
                    "leading HR consultancy in Calicut Kerala",
                    "HR consultancy Calicut",
                    "HR services in Kerala",
                    "payroll outsourcing Kerala",
                    "recruitment outsourcing Kerala"
                ]}
                canonical="https://www.befirsthr.com/hr-consultancy-calicut"
            />

            <Navbar2 />
            <PageTitle pageTitle={'Articles'} pagesub1={'Articles'} pagesub2={'Article Details'} />
            <BlogSingle />
            <Footer />
            {/* <Scrollbar/> */}
        </>
    )
};
export default BlogDetails;
