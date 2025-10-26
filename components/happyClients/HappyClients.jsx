import Marquee from "react-fast-marquee";
import { 
  FaIndustry, 
  FaShirtsinbulk, 
  FaGlobeAsia, 
  FaWarehouse,
  FaRobot,
  FaShippingFast
} from "react-icons/fa";

const commonIconClass = "h-8 sm:h-10 md:h-12 text-gray-400 hover:text-primary transition-colors duration-300";

const industryPartners = [
  {
    icon: <FaIndustry key="apex" className={commonIconClass} />,
    name: "Apex Holdings",
    description: "Bangladesh"
  },
  {
    icon: <FaShirtsinbulk key="mas" className={commonIconClass} />,
    name: "MAS Holdings",
    description: "Sri Lanka & Vietnam"
  },
  {
    icon: <FaWarehouse key="omega" className={commonIconClass} />,
    name: "Omega Line",
    description: "Sri Lanka"
  },
  {
    icon: <FaGlobeAsia key="global" className={commonIconClass} />,
    name: "Global Operations",
    description: "Multiple Countries"
  },
  {
    icon: <FaRobot key="automation" className={commonIconClass} />,
    name: "Lean Systems",
    description: "Process Automation"
  },
  {
    icon: <FaShippingFast key="supplychain" className={commonIconClass} />,
    name: "Supply Chain",
    description: "Logistics Partners"
  }
];

const HappyClients = () => {
  return (
    <div className="content py-10 md:py-20 flex flex-col items-center px-2 bg-base-100" id="clients">
      <div className="max-w-3xl text-center mb-12">
        <p className="section-title mb-6">Industry Partners & Experience</p>
        <p className="text-[14px] sm:text-lg text-gray-600 font-normal leading-relaxed">
          I&apos;ve successfully delivered industrial engineering solutions for leading apparel manufacturers 
          and global organizations across Sri Lanka, Vietnam, and Bangladesh.
        </p>
      </div>

      {/* Main Marquee */}
      <div className="w-full mb-12">
        <Marquee pauseOnHover={true} speed={80} gradient={false} className="py-4">
          {industryPartners?.map((partner, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center mx-8 sm:mx-12 md:mx-16 px-6 py-4 bg-base-200 rounded-2xl hover:bg-base-300 transition-all duration-300 min-w-[140px]"
            >
              <div className="mb-3">
                {partner.icon}
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-800 text-sm sm:text-base">{partner.name}</p>
                <p className="text-gray-500 text-xs mt-1">{partner.description}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
        <div className="text-center p-6 bg-primary text-primary-content rounded-2xl shadow-lg">
          <div className="text-2xl md:text-3xl font-bold mb-2">15+</div>
          <div className="text-sm">Years Experience</div>
        </div>
        
        <div className="text-center p-6 bg-secondary text-secondary-content rounded-2xl shadow-lg">
          <div className="text-2xl md:text-3xl font-bold mb-2">3</div>
          <div className="text-sm">Countries</div>
        </div>
        
        <div className="text-center p-6 bg-accent text-accent-content rounded-2xl shadow-lg">
          <div className="text-2xl md:text-3xl font-bold mb-2">100+</div>
          <div className="text-sm">Projects</div>
        </div>
        
        <div className="text-center p-6 bg-info text-info-content rounded-2xl shadow-lg">
          <div className="text-2xl md:text-3xl font-bold mb-2">$2M+</div>
          <div className="text-sm">Cost Savings</div>
        </div>
      </div>

      {/* Testimonial Style */}
      <div className="mt-12 text-center max-w-2xl">
        <div className="bg-base-200 rounded-3xl p-8 border border-base-300">
          <p className="text-lg text-gray-700 italic mb-4">
            &quot;Dinesh has been instrumental in driving operational excellence across our manufacturing facilities. 
            His expertise in industrial engineering and lean manufacturing delivered significant cost savings 
            and process improvements.&quot;
          </p>
          <div className="font-semibold text-gray-900">- Manufacturing Director</div>
          <div className="text-sm text-gray-600">Apparel Industry Leader</div>
        </div>
      </div>
    </div>
  );
};

export default HappyClients;