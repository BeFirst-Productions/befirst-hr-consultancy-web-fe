// import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pageTitles/service-details-pagetitle'
// import ServiceSingleSection from '../../components/ServiceSingleSection';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
// import { useParams, Link } from 'react-router-dom';
// import { service } from '../../components/data/dummyService';
import SEO from '../../components/seo';
import ServiceSingleSection1 from '../../components/ServiceSingleSection/service1';

const ServiceSinglePage1 = () => {
    // const { id } = useParams();
    // const serviceData = service.find(item => item.id === parseInt(id));

    // if (!serviceData) {
    //     return (
    //         <>
    //             <Navbar2 />
    //             <div style={styles.container}>
    //                 <div style={styles.card}>
    //                     <h2 style={styles.heading}>🚫 Service Not Found</h2>
    //                     <p style={styles.text}>
    //                         The service you’re looking for doesn’t exist or may have been removed.
    //                     </p>
    //                     <Link to="/" style={styles.button}>
    //                         Back to Home
    //                     </Link>
    //                 </div>
    //             </div>
    //             <Footer />
    //             <Scrollbar />
    //         </>
    //     );
    // }

    return (
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

            <Navbar2 />
            <PageTitle pageTitle={'HR Operations & Administration'} pagesub={'Services'} serviceTitle={'HR Operations & Administration'} />
            <ServiceSingleSection1 />
            <Footer />
            {/* <Scrollbar /> */}
        </>
    );
};

export default ServiceSinglePage1;

// const styles = {
//     container: {
//         minHeight: '60vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: '20px',
//         background: '#f8f9fa',
//     },
//     card: {
//         background: '#fff',
//         padding: '40px',
//         borderRadius: '10px',
//         boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
//         maxWidth: '500px',
//         textAlign: 'center',
//     },
//     heading: {
//         fontSize: '24px',
//         marginBottom: '15px',
//         color: '#dc3545',
//     },
//     text: {
//         fontSize: '16px',
//         color: '#555',
//         marginBottom: '25px',
//     },
//     button: {
//         display: 'inline-block',
//         padding: '10px 20px',
//         background: '#007bff',
//         color: '#fff',
//         borderRadius: '5px',
//         textDecoration: 'none',
//         transition: 'background 0.3s ease',
//     },
// };
