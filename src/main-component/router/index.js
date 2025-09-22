import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage3 from "../HomePage3";
import AboutPage from "../AboutPage";
import ServicePage from "../ServicePage";
import ServicePageS2 from "../ServicePageS2";
import BlogPage from "../BlogPage";
import BlogPageFullwidth from "../BlogPageFullwidth";
import BlogDetails from "../BlogDetails";
import BlogDetailsFull from "../BlogDetailsFull";
import ErrorPage from "../ErrorPage";
import ContactPage from "../ContactPage";
import BlogSingle2 from "../../components/BlogDetails/blog2";
import BlogSingle3 from "../../components/BlogDetails/blog3";
import BlogSingle5 from "../../components/BlogDetails/blog5";
import BlogSingle4 from "../../components/BlogDetails/blog4";
import CareersPage from "../careersPage";
import FAQPage from "../faqPage";
import PrivacyPolicyPage from "../PrivacyPolicy";
import TermsOfUsePage from "../TermsOfUse";
import VisionAndMission from "../AboutePage3";
import FoundersVisionPage from "../FoundersVisionPage";
import CareersFormPage from "../careersFormPage";
import ServiceSinglePage2 from "../ServiceSinglePage/service2";
import ServiceSinglePage3 from "../ServiceSinglePage/service3";
import ServiceSinglePage4 from "../ServiceSinglePage/service4";
import ServiceSinglePage5 from "../ServiceSinglePage/service5";
import ServiceSinglePage6 from "../ServiceSinglePage/service6";
import ServiceSinglePage1 from "../ServiceSinglePage/service1";
import HRChatbot from "../../components/HR-chatbot";
import ServiceSinglePage7 from "../ServiceSinglePage/service7";
import ServiceSinglePage8 from "../ServiceSinglePage/service8";
import ServiceSinglePage9 from "../ServiceSinglePage/service9";
import ServiceSinglePage10 from "../ServiceSinglePage/service10";
import ServiceSinglePage11 from "../ServiceSinglePage/service11";

const AllRoute = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage3 />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/founders-vision" element={<FoundersVisionPage />} />
        <Route path="/about/mission-&-values" element={<VisionAndMission />} />

        <Route path="/services" element={<ServicePage />} />
        <Route path="/service-s2" element={<ServicePageS2 />} />
        <Route
          path="/service/hr-operations-&-administration"
          element={<ServiceSinglePage1 />}
        />
        <Route
          path="/service/hr-planning-&-organization"
          element={<ServiceSinglePage2 />}
        />
        <Route
          path="/service/learning-&-development"
          element={<ServiceSinglePage3 />}
        />
        <Route
          path="/service/payroll-&-compensation"
          element={<ServiceSinglePage4 />}
        />
        <Route
          path="/service/recruitment-assistance"
          element={<ServiceSinglePage5 />}
        />
        <Route
          path="/service/quality-assurance-&-compliance"
          element={<ServiceSinglePage6 />}
        />
        <Route
          path="/service/talent-acquisition-&-Onboarding"
          element={<ServiceSinglePage7 />}
        />
        <Route
          path="/service/hr-policy-&-procedure"
          element={<ServiceSinglePage8 />}
        />
        <Route
          path="/service/staff-appraisal-system"
          element={<ServiceSinglePage9 />}
        />
        <Route
          path="/service/traing-&-development"
          element={<ServiceSinglePage10 />}
        />
        <Route
          path="/service/customer-care-orientation"
          element={<ServiceSinglePage11 />}
        />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blog-fullwidth" element={<BlogPageFullwidth />} />
        <Route
          path="/blogs/why-choose-a-leading-hr-consultancy-in-calicut-kerala"
          element={<BlogDetails />}
        />
        <Route
          path="/blogs/recruitment-outsourcing-in-kerala"
          element={<BlogSingle2 />}
        />
        <Route
          path="/blogs/payroll-outsourcing-in-kerala"
          element={<BlogSingle3 />}
        />
        <Route
          path="/blogs/the-complete-guide-to-hr-compliance-in-kerala"
          element={<BlogSingle4 />}
        />
        <Route
          path="/blogs/how-to-choose-the-right-hr-consultancy-in-calicut"
          element={<BlogSingle5 />}
        />
        <Route path="/blog-single-fullwidth" element={<BlogDetailsFull />} />

        <Route path="/careers" element={<CareersPage />} />
        <Route path="/careers/careers-form" element={<CareersFormPage />} />

        <Route path="/faqs" element={<FAQPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-use" element={<TermsOfUsePage />} />

        <Route path="/404" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />

        {/* <Route path='/service-single/:id' element={<ServiceSinglePage />} /> */}
        {/* <Route path='/testimonial' element={<TestimonialPage />} /> */}
        {/* <Route path='/home' element={<Homepage/>} />
          <Route path='/home2' element={<Homepage2/>} /> */}
        {/* <Route path='/home3' element={<Homepage3/>} /> */}
        {/* <Route path='/service-single/' element={<ServiceSinglePage />} />
          <Route path='/service-single/' element={<ServiceSinglePage />} />
          <Route path='/service-single/' element={<ServiceSinglePage />} />
          <Route path='/service-single/' element={<ServiceSinglePage />} />
          <Route path='/service-single/' element={<ServiceSinglePage />} /> */}
        {/* <Route path='/project' element={<ProjectPage />} />
          <Route path='/project-s2' element={<ProjectPageS2 />} />
          <Route path='/project-single' element={<ProjectSinglePage />} />
          <Route path='/pricing' element={<PricingPage />} /> */}
        {/* <Route path='/blog-left-sidebar' element={<BlogPageLeft />} /> */}
        {/* <Route path='/blog-single-left-sidebar' element={<BlogDetailsLeftSiide />} /> */}
        {/* <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<SignUpPage />} />
          <Route path='/forgot-password' element={<ForgotPassword />} /> */}
      </Routes>
      <HRChatbot />
    </div>
  );
};

export default AllRoute;
