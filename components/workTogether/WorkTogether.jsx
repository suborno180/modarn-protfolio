import { FaArrowRight, FaHandshake, FaProjectDiagram, FaComments } from "react-icons/fa";

const WorkTogether = () => {
  return (
    <div className="content px-2 py-16 lg:py-25 max-xxl:px-4 bg-gradient-to-br from-primary to-primary/90 text-primary-content rounded-3xl my-12">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Header Section */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <FaHandshake className="text-2xl text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Let&apos;s Collaborate on Your Next Project
          </h2>
        </div>

        {/* Description */}
        <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
          Ready to drive operational excellence in your manufacturing operations? 
          With 15+ years of global experience in industrial engineering and lean manufacturing, 
          I can help optimize your processes and deliver measurable results.
        </p>

        {/* Key Offerings */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="flex flex-col items-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
            <FaProjectDiagram className="text-2xl text-white mb-3" />
            <h3 className="font-semibold text-lg mb-2">Process Optimization</h3>
            <p className="text-white/80 text-sm">Enhance manufacturing efficiency and reduce costs</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
            <FaComments className="text-2xl text-white mb-3" />
            <h3 className="font-semibold text-lg mb-2">Consultation</h3>
            <p className="text-white/80 text-sm">Expert guidance on industrial engineering challenges</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
            <FaHandshake className="text-2xl text-white mb-3" />
            <h3 className="font-semibold text-lg mb-2">Project Leadership</h3>
            <p className="text-white/80 text-sm">Lead your teams to operational excellence</p>
          </div>
        </div>

        {/* Industries Served */}
        <div className="mb-10">
          <h4 className="text-white/90 text-lg font-semibold mb-4">Industries I Serve:</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Apparel Manufacturing",
              "Textile Industry", 
              "Lean Implementation",
              "Process Improvement",
              "Cost Reduction",
              "Global Operations"
            ].map((industry, index) => (
              <span 
                key={index}
                className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:amiliya177@gmail.com"
            className="btn btn-secondary btn-lg px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform duration-300"
          >
            Start a Conversation
            <FaArrowRight className="ms-3 text-lg" />
          </a>
          
          <a
            href="tel:+94763155822"
            className="btn btn-outline btn-lg px-8 py-4 text-lg font-semibold border-white text-white hover:bg-white hover:text-primary"
          >
            Call Now
          </a>
        </div>

        {/* Quick Contact Info */}
        <div className="mt-8 text-white/80 text-sm">
          <p>📧 amiliya177@gmail.com | 📱 +94 76 315 5822</p>
          <p className="mt-1">📍 Available for projects in Sri Lanka, Vietnam, Bangladesh & globally</p>
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;