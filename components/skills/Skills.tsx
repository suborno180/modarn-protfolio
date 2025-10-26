"use client";
import { FaCogs, FaChartLine, FaUsers, FaTools, FaBalanceScale, FaRocket, FaLightbulb, FaSyncAlt } from "react-icons/fa";

const skillsData = [
  {
    category: "Industrial Engineering",
    icon: <FaCogs className="text-2xl" />,
    skills: [
      { name: "Process Optimization", level: 95 },
      { name: "Value Engineering", level: 90 },
      { name: "Time & Motion Studies (TMS)", level: 92 },
      { name: "SMV & GSD", level: 88 },
      { name: "Workload Balancing", level: 85 },
      { name: "Line Balancing", level: 87 }
    ],
    color: "primary"
  },
  {
    category: "Lean Manufacturing",
    icon: <FaSyncAlt className="text-2xl" />,
    skills: [
      { name: "TPM Implementation", level: 88 },
      { name: "Standardized Work (STW)", level: 90 },
      { name: "Quick Changeover (QCO)", level: 85 },
      { name: "Six Sigma Methodology", level: 92 },
      { name: "Lean Principles", level: 89 },
      { name: "Waste Reduction", level: 86 }
    ],
    color: "secondary"
  },
  {
    category: "Project Management",
    icon: <FaRocket className="text-2xl" />,
    skills: [
      { name: "Strategic Planning", level: 88 },
      { name: "Cross-functional Leadership", level: 90 },
      { name: "Cost Reduction Initiatives", level: 87 },
      { name: "Productivity Enhancement", level: 91 },
      { name: "Operational Excellence", level: 89 },
      { name: "Performance Metrics", level: 86 }
    ],
    color: "accent"
  },
  {
    category: "Leadership & Soft Skills",
    icon: <FaUsers className="text-2xl" />,
    skills: [
      { name: "Team Leadership", level: 90 },
      { name: "Training & Development", level: 85 },
      { name: "Business Coaching", level: 82 },
      { name: "Stakeholder Management", level: 88 },
      { name: "Problem Solving", level: 91 },
      { name: "Global Team Management", level: 84 }
    ],
    color: "info"
  }
];

const technicalExpertise = [
  {
    area: "Manufacturing Systems",
    technologies: ["ERP Systems", "Production Planning", "Capacity Analysis", "Factory Layout", "Quality Systems"]
  },
  {
    area: "Process Improvement",
    technologies: ["Kaizen", "5S Methodology", "PDCA Cycle", "Value Stream Mapping", "Root Cause Analysis"]
  },
  {
    area: "Cost Management",
    technologies: ["Cost Analysis", "Budgeting", "ROI Calculation", "Cost Benchmarking", "Financial Modeling"]
  },
  {
    area: "Global Operations",
    technologies: ["International Standards", "Cross-cultural Management", "Supply Chain", "Compliance", "Best Practices"]
  }
];

const Skills = () => {
  const getProgressColor = (level: number) => {
    if (level >= 90) return "progress-success";
    if (level >= 80) return "progress-primary";
    if (level >= 70) return "progress-warning";
    return "progress-error";
  };

  return (
    <div className="content px-2 py-5 md:py-10 lg:py-25 max-xxl:px-4 bg-base-100" id="skills">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="section-title">Professional Skills</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Extensive expertise in industrial engineering, lean manufacturing, and project management 
          with proven track record across global operations in Sri Lanka, Vietnam, and Bangladesh.
        </p>
      </div>

      {/* Main Skills Grid */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {skillsData.map((category, index) => (
          <div key={index} className="card bg-base-100 shadow-lg border border-base-300 hover:shadow-xl transition-all duration-300">
            <div className="card-body">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${category.color} text-${category.color}-content`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="card-title text-xl">{category.category}</h3>
                  <div className="text-sm text-gray-500">{category.skills.length} core competencies</div>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <progress 
                      className={`progress w-full h-3 ${getProgressColor(skill.level)}`}
                      value={skill.level} 
                      max="100"
                    ></progress>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Technical Expertise */}
      <div className="mb-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Technical Expertise</h3>
          <p className="text-gray-600">Specialized knowledge across manufacturing and operational domains</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technicalExpertise.map((expertise, index) => (
            <div key={index} className="card bg-base-200 shadow-md border border-base-300">
              <div className="card-body">
                <h4 className="card-title text-lg mb-4 text-center">{expertise.area}</h4>
                <div className="space-y-2">
                  {expertise.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industry Experience */}
      <div className="card bg-primary text-primary-content shadow-2xl">
        <div className="card-body">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-primary-content/80">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-primary-content/80">Countries Worked</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-primary-content/80">Projects Managed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Summary */}
      <div className="mt-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Methodology Certifications</h3>
          <p className="text-gray-600">Industry-recognized certifications in quality and process improvement</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Six Sigma Black Belt", level: "Expert", color: "badge-error" },
            { name: "Lean Black Belt", level: "Expert", color: "badge-success" },
            { name: "TPM Practitioner", level: "Advanced", color: "badge-primary" },
            { name: "Business Coach", level: "Professional", color: "badge-info" },
            { name: "Six Sigma Green Belt", level: "Advanced", color: "badge-success" },
            { name: "Work Study Expert", level: "Expert", color: "badge-warning" },
            { name: "Quality Systems", level: "Advanced", color: "badge-accent" },
            { name: "Project Management", level: "Professional", color: "badge-secondary" }
          ].map((cert, index) => (
            <div key={index} className="card bg-base-100 shadow-sm border border-base-300">
              <div className="card-body p-4 text-center">
                <div className={`badge ${cert.color} badge-sm mb-2`}>{cert.level}</div>
                <p className="text-sm font-medium">{cert.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Achievements */}
      <div className="mt-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Key Competencies</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Global Operations",
              description: "Managed industrial engineering functions across Sri Lanka, Vietnam, and Bangladesh",
              icon: <FaChartLine className="text-2xl text-primary" />
            },
            {
              title: "Cost Optimization",
              description: "Delivered significant cost reductions through process improvements and lean implementation",
              icon: <FaBalanceScale className="text-2xl text-secondary" />
            },
            {
              title: "Team Leadership",
              description: "Led cross-functional teams in implementing operational excellence initiatives",
              icon: <FaUsers className="text-2xl text-accent" />
            },
            {
              title: "Process Innovation",
              description: "Implemented cutting-edge manufacturing processes and standardization",
              icon: <FaLightbulb className="text-2xl text-info" />
            },
            {
              title: "Training & Development",
              description: "Mentored teams in IE principles and systematic problem-solving methodologies",
              icon: <FaTools className="text-2xl text-warning" />
            },
            {
              title: "Continuous Improvement",
              description: "Championed continuous improvement culture across multiple manufacturing facilities",
              icon: <FaSyncAlt className="text-2xl text-success" />
            }
          ].map((achievement, index) => (
            <div key={index} className="card bg-base-100 shadow-md border border-base-300 hover:shadow-lg transition-all duration-300">
              <div className="card-body text-center">
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <h4 className="card-title text-lg justify-center">{achievement.title}</h4>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;