import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile image */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
            <Image
              className="bg-soft-white h-[120%] object-cover"
              src="/images/Dinesh-Fernando-photo.jpg" // ক্লায়েন্টের প্রোফেশনাল ছবি
              alt="Dinesh S. Fernando - Industrial Engineering & Project Management Professional"
              width={424}
              height={468}
              priority
            />
          </div>
          {/* Social media section */}
          <div className="relative bottom-9">
            <div className="flex justify-center">
              <div className="px-6 max-w-66 py-3 z-50 text-center bg-white rounded-[4px] center shadow-2xl drop-shadow-2xl shadow-white">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        <div className="max-sm:w-full w-[33rem]">
          <h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8`}
          >
            Industrial Engineering & Project Management Specialist
          </h2>
          <div
            className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600`}
          >
            <p className={``}>
              Seasoned Industrial Engineering professional with over 15 years of experience 
              driving operational excellence across manufacturing, non-manufacturing, and 
              costing functions in global apparel industries.
            </p>
            <p className="mt-3">
              Proven expertise in process optimization, value engineering, TPM, STW, 
              workload balancing, and QCO. Adept at leading cross-functional teams and 
              delivering productivity improvements across facilities in Sri Lanka, Vietnam, 
              and Bangladesh.
            </p>
          </div>
          <div className="mt-8 flex max-md:justify-center gap-4">
            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px] hover:scale-105 transition-transform duration-300"
              href="#experience"
            >
              View Experience
            </a>
            <a
              className={`btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary text-xs xxs:text-[14px] sm:text-[16px] hover:scale-105 transition-transform duration-300`}
              href="/cv/dinesh-fernando-cv.pdf" // ক্লায়েন্টের CV লিঙ্ক
              download
            >
              <FaDownload className="inline mr-2" /> Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;