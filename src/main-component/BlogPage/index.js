import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pageTitles/Blogs-pagetitle'
import BlogList from '../../components/BlogList'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import SEO from '../../components/seo'


const BlogPage = () => {
    return (
        <>
            <SEO
                title="HR Consulting Services in Kerala | Befirst HR Consultancy"
                description="Befirst provides expert HR Consulting Services in Kerala, including recruitment, payroll, compliance, and employee management solutions for businesses of all sizes."
                keywords={"HR Consulting Services in Kerala, Recruitment Consulting Kerala, Payroll Consulting Kerala, HR Compliance Kerala, Employee Management Kerala"}
                ogTitle="HR Consulting Services in Kerala | Befirst HR Consultancy"
                ogDescription="Befirst provides expert HR Consulting Services in Kerala, including recruitment, payroll, compliance, and employee management solutions for businesses of all sizes."
                ogUrl="https://www.befirsthr.com/hr-consulting-kerala"
                ogType="website"
                ogImage="https://www.befirsthr.com/assets/images/hr-consulting-kerala.jpg"
                ogLocale="en_IN"
                articleTags={[
                    "HR Consulting Services in Kerala",
                    "Recruitment Consulting Kerala",
                    "Payroll Consulting Kerala",
                    "HR Compliance Kerala",
                    "Employee Management Kerala"
                ]}
                canonical="https://www.befirsthr.com/hr-consulting-kerala"
            />

            <Navbar2 />
            <PageTitle pageTitle={'Articles'} pagesub={'Articles'} />
            <BlogList />
            <Footer />
            {/* <Scrollbar/> */}
        </>
    )
};
export default BlogPage;

