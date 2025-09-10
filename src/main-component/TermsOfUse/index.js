import React from 'react'
import Footer from '../../components/footer'
import Navbar2 from '../../components/Navbar2'
import Scrollbar from '../../components/scrollbar'
import TermsOfUse from '../../components/termsOfUse'
import PageTitle from '../../components/pageTitles/terms-pagetitle'
import SEO from '../../components/seo'

const TermsOfUsePage = () => {
  return (
    <>
      <SEO
        title="Leading HR Consultants in Kerala | Terms of Use "
        description="Read the Terms of Use for Befirst HR, one of the Leading HR Consultants in Kerala. Learn about our website policies, services, intellectual property rights, liability limitations, and governing laws."
        keywords={"Leading HR Consultants in Kerala, Befirst HR Terms of Use, HR Consultancy Website Terms, HR Services Policies India, Management Consultancy Terms, Recruitment Terms Kerala, Befirst HR Legal Terms"}
      />
      <Navbar2 />
      <PageTitle pageTitle={'Terms of Use'} pagesub={'Terms of Use'} />
      <TermsOfUse />
      <Footer />
      {/* <Scrollbar /> */}
    </>
  )
}

export default TermsOfUsePage