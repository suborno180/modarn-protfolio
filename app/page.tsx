import Introduction from "@/components/introduction/Introduction";
import Profile from "@/components/profile/Profile";
import WorkProcess from "@/components/workProcess/WorkProcess";
// import Portfolio from "@/components/portfolio/Portfolio";
import WorkTogether from "@/components/workTogether/WorkTogether";
// import Blog from "@/components/blog/Blog";
import Profession from "@/components/profession/Profession";
import HappyClients from "@/components/happyClients/HappyClients";
import Testimonial from "@/components/testimonial/Testimonial";

import Contact from "@/components/contact/Contact";
import Education from "@/components/education/Education";
import Skills from "@/components/skills/Skills";
import Certifications from "@/components/certifications/Certifications";


const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>
      <div className="bg-soft-white pt-30">
        <WorkProcess />
      </div>
      <Education />
      <Skills />
      <Certifications />
      {/* <Portfolio /> */}
      <WorkTogether />
      {/* <div className="blog-background">
        <Blog />
      </div> */}
      <div className="bg-soft-white">
        <Profession />
      </div>
      <HappyClients />
      {/* <Testimonial /> */}
      <Contact />
    </div>
  );
};

export default Home;
