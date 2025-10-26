import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Industrial Engineering",
    description: "I specialize in optimizing manufacturing processes through time-motion studies, workload balancing, and value engineering to enhance operational efficiency and reduce costs across global apparel industries.",
    icon: "⚙️"
  },
  {
    id: 2,
    title: "Lean Manufacturing",
    description: "I implement TPM, STW, and QCO methodologies to eliminate waste, improve productivity, and establish standardized work practices that drive continuous improvement in manufacturing operations.",
    icon: "🔄"
  },
  {
    id: 3,
    title: "Project Management",
    description: "I lead cross-functional teams in strategic planning and execution of large-scale industrial projects, delivering measurable improvements in productivity and cost reduction across international facilities.",
    icon: "📊"
  },
  {
    id: 4,
    title: "Process Optimization",
    description: "I analyze and redesign manufacturing workflows using Six Sigma and Lean principles to achieve operational excellence, quality improvement, and sustainable cost savings.",
    icon: "📈"
  }
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-25"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-12 my-auto">
        <div>
          <p className="section-title max-md:text-center">Professional Services</p>
          <div className="mt-6 text-[14px]">
            <p className="text-xs sm:text-lg font-normal text-gray-600 mb-4">
              I specialize in driving operational excellence through industrial engineering, 
              lean manufacturing, and strategic project management across global apparel industries.
            </p>
            <p className="text-xs sm:text-lg font-normal text-gray-600">
              With 15+ years of experience in Sri Lanka, Vietnam, and Bangladesh, I deliver 
              measurable improvements in productivity, cost reduction, and process optimization.
            </p>
          </div>
        </div>
        
        {/* Key Expertise Stats */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="text-center p-4 bg-base-200 rounded-2xl">
            <div className="text-2xl font-bold text-primary">15+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="text-center p-4 bg-base-200 rounded-2xl">
            <div className="text-2xl font-bold text-secondary">3</div>
            <div className="text-sm text-gray-600">Countries</div>
          </div>
          <div className="text-center p-4 bg-base-200 rounded-2xl">
            <div className="text-2xl font-bold text-accent">100+</div>
            <div className="text-sm text-gray-600">Projects</div>
          </div>
          <div className="text-center p-4 bg-base-200 rounded-2xl">
            <div className="text-2xl font-bold text-info">45%</div>
            <div className="text-sm text-gray-600">Avg. Cost Reduction</div>
          </div>
        </div>

        <a
          href="mailto:amiliya177@gmail.com"
          className="mt-8 btn btn-primary text-white w-fit py-3 px-8 text-[16px] font-semibold hover:scale-105 transition-transform duration-300 max-md:mx-auto"
        >
          Discuss Your Project
        </a>
      </div>
      
      <div className="space-y-6 mt-8 md:mt-0">
        {rolesData.map((role, index) => (
          <Roles role={role} key={role.id} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;