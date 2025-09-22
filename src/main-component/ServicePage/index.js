import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pageTitles/service-pagetitle'
import Services from '../../components/Services'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import SEO from '../../components/seo';


const ServicePage =() => {
    return(
        <>
        <SEO
                title="HR Operations & Administration Services in Kerala | Befirst HR"
                description="Befirst HR offers trusted HR Operations & Administration Services in Kerala. We help businesses in Kozhikode, Kochi, and Trivandrum streamline."
                keywords="HR Operations & Administration Services in Kerala, HR administration services Kerala, HR services Kozhikode, HR services Kochi, HR services Trivandrum"
                ogTitle="HR Operations & Administration Services in Kerala | Befirst HR"
                ogDescription="Befirst HR offers trusted HR Operations & Administration Services in Kerala. We help businesses in Kozhikode, Kochi, and Trivandrum streamline HR functions and improve efficiency."
                ogUrl="https://www.befirsthr.com/hr-operations-administration"
                ogType="website"
                ogImage="https://www.befirsthr.com/images/hr-operations-og.jpg"
                ogLocale="en_IN"
                articleTags={[
                    "HR Operations & Administration Services in Kerala",
                    "HR administration services Kerala",
                    "HR services Kozhikode",
                    "HR services Kochi",
                    "HR services Trivandrum"
                ]}
                canonical="https://www.befirsthr.com/hr-operations-administration"
            />
            <Navbar2/>
            <PageTitle pageTitle={'Services'} pagesub={'Services'}/> 
            <Services/>
            <Footer/>
            {/* <Scrollbar/> */}
        </>
    )
};
export default ServicePage;
