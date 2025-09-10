import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pageTitles/Blogs-pagetitle'
import BlogList from '../../components/BlogList'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import SEO from '../../components/seo'


const BlogPage =() => {
    return(
        <>
            <SEO
                title="HR Consulting Services in Kerala | Befirst "
                description="Befirst provides expert HR Consulting Services in Kerala, including recruitment, payroll, compliance, and employee management solutions for businesses of all sizes."
                keywords={"HR Consulting Services in Kerala, Recruitment Consulting Kerala, Payroll Consulting Kerala, HR Compliance Kerala, Employee Management Kerala"}
            />
            <Navbar2/>
            <PageTitle pageTitle={'Articles'} pagesub={'Articles'}/> 
            <BlogList/>
            <Footer/>
            {/* <Scrollbar/> */}
        </>
    )
};
export default BlogPage;

