import React from 'react'
import Footer from '../../components/footer'
import Navbar2 from '../../components/Navbar2'
import Scrollbar from '../../components/scrollbar'
import PageTitle from '../../components/pageTitles/privacy-policy-pagetitle'
import PrivacyPolicy from '../../components/PrivacyPolicy'
import SEO from '../../components/seo'

const PrivacyPolicyPage = () => {
  return (
    <>
      <SEO
        title="Best HR Consultancy in Kerala | Privacy Policy"
        description="Read Privacy Policy of Be First HR, the Best HR Consultancy in Kerala. Learn how we collect, use, and protect your information."
        keywords={"Best HR Consultancy in Kerala,Befirst HR Privacy Policy,HR Services Data Protection,HR Consultancy Legal Policy Kerala,Management Consultancy Privacy Terms"}
      />
      <Navbar2 />
      <PageTitle pageTitle={'Privacy Policy'} pagesub={'Privacy Policy'} />
      <PrivacyPolicy />
      <Footer />
      {/* <Scrollbar /> */}
    </>
  )
}

export default PrivacyPolicyPage