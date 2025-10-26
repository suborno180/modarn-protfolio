"use client";
import { useState } from "react";
import { FaAward, FaMapMarkerAlt, FaStar, FaCheckCircle, FaBookOpen, FaGlobeAsia, FaIndustry } from "react-icons/fa";

// Type definitions
interface Certification {
  id: number;
  title: string;
  institution: string;
  year: string;
  level: string;
  category: string;
  description: string;
  status: "completed" | "in-progress";
  country: string;
  progress?: number; // Make progress optional
}

const certificationData: Certification[] = [
  {
    id: 1,
    title: "Six Sigma Black Belt 5.0",
    institution: "Mickle J Harry Management Institute (SSMI)",
    year: "2020",
    level: "Black Belt",
    category: "quality",
    description: "Advanced certification in Six Sigma methodology for process improvement and quality management",
    status: "completed",
    country: "Sri Lanka"
  },
  {
    id: 2,
    title: "Six Sigma Yellow & Green Belt",
    institution: "Anexus Europe Institute India",
    year: "2019",
    level: "Green Belt",
    category: "quality",
    description: "Dual certification in Six Sigma Yellow and Green Belt methodologies",
    status: "completed",
    country: "India"
  },
  {
    id: 3,
    title: "Lean Black Belt Practitioner",
    institution: "AIMS Institute Sri Lanka",
    year: "2018",
    level: "Black Belt",
    category: "lean",
    description: "Expert level certification in Lean manufacturing principles and waste elimination",
    status: "completed",
    country: "Sri Lanka"
  },
  {
    id: 4,
    title: "Lean Green Belt Practitioner",
    institution: "AIMS Institute Sri Lanka",
    year: "2017",
    level: "Green Belt",
    category: "lean",
    description: "Advanced certification in Lean manufacturing tools and techniques",
    status: "completed",
    country: "Sri Lanka"
  },
  {
    id: 5,
    title: "TPM Practitioner",
    institution: "Institute of Lean Management (ILM)",
    year: "2016",
    level: "Practitioner",
    category: "maintenance",
    description: "Professional certification in Total Productive Maintenance implementation",
    status: "completed",
    country: "Sri Lanka"
  },
  {
    id: 6,
    title: "Advance Certification of Work Study",
    institution: "AIMS Sri Lanka (UK)",
    year: "2015",
    level: "Advanced",
    category: "engineering",
    description: "Advanced work study techniques and time-motion analysis certification",
    status: "completed",
    country: "Sri Lanka"
  },
  {
    id: 7,
    title: "Certification Clothing Technology",
    institution: "Clothing Industry Training Institute",
    year: "2014",
    level: "Professional",
    category: "technical",
    description: "Specialized certification in clothing manufacturing technology and processes",
    status: "completed",
    country: "Sri Lanka"
  },
  {
    id: 8,
    title: "Certified Life & Business Coach",
    institution: "Sri Lanka Institute of Training & Development (SLITAD)",
    year: "2018",
    level: "Professional",
    category: "leadership",
    description: "Professional coaching certification for business and personal development",
    status: "completed",
    country: "Sri Lanka"
  },
  {
    id: 9,
    title: "Lean Yellow Belt",
    institution: "MAS Group",
    year: "2015",
    level: "Yellow Belt",
    category: "lean",
    description: "Foundation certification in Lean manufacturing principles",
    status: "completed",
    country: "Sri Lanka"
  }
];

const ongoingCertifications: Certification[] = [
  {
    id: 1,
    title: "TPS Practitioner",
    institution: "TMS & TPS Institute (Japan)",
    year: "2024",
    level: "Practitioner",
    category: "lean",
    description: "Toyota Production System implementation and optimization",
    status: "in-progress",
    country: "Japan",
    progress: 60
  },
  {
    id: 2,
    title: "TQM Practitioner",
    institution: "Ontario Business Excellence Inc. (Canada)",
    year: "2024",
    level: "Practitioner",
    category: "quality",
    description: "Total Quality Management system implementation",
    status: "in-progress",
    country: "Canada",
    progress: 40
  }
];

const Certifications = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("year");

  const categories = [
    { id: "all", name: "All Certifications", count: certificationData.length + ongoingCertifications.length },
    { id: "quality", name: "Quality Management", count: certificationData.filter(c => c.category === "quality").length },
    { id: "lean", name: "Lean Manufacturing", count: certificationData.filter(c => c.category === "lean").length + ongoingCertifications.filter(c => c.category === "lean").length },
    { id: "engineering", name: "Industrial Engineering", count: certificationData.filter(c => c.category === "engineering").length },
    { id: "leadership", name: "Leadership", count: certificationData.filter(c => c.category === "leadership").length }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Black Belt": return "badge-error";
      case "Green Belt": return "badge-success";
      case "Yellow Belt": return "badge-warning";
      case "Practitioner": return "badge-primary";
      case "Advanced": return "badge-info";
      default: return "badge-accent";
    }
  };

  const filteredCertifications = [
    ...certificationData,
    ...ongoingCertifications
  ].filter(cert => 
    activeFilter === "all" || cert.category === activeFilter
  ).sort((a, b) => {
    if (sortBy === "year") return parseInt(b.year) - parseInt(a.year);
    if (sortBy === "level") {
      const levelOrder = { "Black Belt": 5, "Green Belt": 4, "Practitioner": 3, "Advanced": 2, "Professional": 1, "Yellow Belt": 0 };
      return levelOrder[b.level as keyof typeof levelOrder] - levelOrder[a.level as keyof typeof levelOrder];
    }
    return 0;
  });

  return (
    <div className="content px-2 py-5 md:py-10 lg:py-25 max-xxl:px-4 bg-base-100" id="certifications">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
            <FaAward className="text-2xl text-white" />
          </div>
          <h2 className="section-title">Professional Certifications</h2>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Industry-recognized certifications in quality management, lean manufacturing, 
          and industrial engineering from prestigious institutions worldwide.
        </p>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="stat bg-base-200 rounded-2xl">
          <div className="stat-figure text-primary">
            <FaAward className="text-2xl" />
          </div>
          <div className="stat-title">Total Certifications</div>
          <div className="stat-value text-primary">{certificationData.length}</div>
          <div className="stat-desc">Completed</div>
        </div>
        
        <div className="stat bg-base-200 rounded-2xl">
          <div className="stat-figure text-secondary">
            <FaStar className="text-2xl" />
          </div>
          <div className="stat-title">Black Belt</div>
          <div className="stat-value text-secondary">2</div>
          <div className="stat-desc">Expert Level</div>
        </div>
        
        <div className="stat bg-base-200 rounded-2xl">
          <div className="stat-figure text-accent">
            <FaGlobeAsia className="text-2xl" />
          </div>
          <div className="stat-title">Countries</div>
          <div className="stat-value text-accent">4</div>
          <div className="stat-desc">Global Recognition</div>
        </div>
        
        <div className="stat bg-base-200 rounded-2xl">
          <div className="stat-figure text-info">
            <FaBookOpen className="text-2xl" />
          </div>
          <div className="stat-title">In Progress</div>
          <div className="stat-value text-info">{ongoingCertifications.length}</div>
          <div className="stat-desc">Continuous Learning</div>
        </div>
      </div>

      {/* Filters and Sorting */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-8 p-6 bg-base-200 rounded-2xl">
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`btn btn-sm ${activeFilter === category.id ? 'btn-primary' : 'btn-ghost'}`}
            >
              {category.name}
              <span className="badge badge-sm ml-2">{category.count}</span>
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <select 
            className="select select-bordered select-sm"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="year">Year (Newest)</option>
            <option value="level">Level (Highest)</option>
          </select>
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
        {filteredCertifications.map(cert => (
          <div 
            key={cert.id} 
            className={`card shadow-lg border-2 transition-all duration-300 hover:scale-105 ${
              cert.status === "completed" 
                ? "border-base-300 bg-base-100" 
                : "border-primary bg-primary/5"
            }`}
          >
            <div className="card-body">
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  cert.status === "completed" ? "bg-primary text-white" : "bg-secondary text-white"
                }`}>
                  {cert.status === "completed" ? <FaCheckCircle /> : <FaBookOpen />}
                </div>
                <div className="text-right">
                  <div className={`badge ${getLevelColor(cert.level)}`}>
                    {cert.level}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{cert.year}</div>
                </div>
              </div>

              {/* Title & Institution */}
              <h3 className="card-title text-lg mb-2">{cert.title}</h3>
              <p className="text-gray-700 font-medium mb-3">{cert.institution}</p>
              
              {/* Description */}
              <p className="text-gray-600 text-sm mb-4">{cert.description}</p>

              {/* Meta Information */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <FaMapMarkerAlt />
                  <span>{cert.country}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <FaIndustry />
                  <span className="capitalize">{cert.category.replace('-', ' ')}</span>
                </div>
              </div>

              {/* Progress for ongoing certifications */}
              {cert.status === "in-progress" && cert.progress !== undefined && (
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{cert.progress}%</span>
                  </div>
                  <progress 
                    className="progress progress-primary w-full" 
                    value={cert.progress} 
                    max="100"
                  ></progress>
                </div>
              )}

              {/* Status Badge */}
              <div className="card-actions justify-end mt-4">
                <div className={`badge badge-outline ${
                  cert.status === "completed" ? "badge-success" : "badge-warning"
                }`}>
                  {cert.status === "completed" ? "Completed" : "In Progress"}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Methodology Progress */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center mb-8">Certification Journey</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Six Sigma Path */}
          <div className="card bg-base-100 shadow-lg border border-base-300">
            <div className="card-body">
              <h4 className="card-title justify-center text-primary mb-4">Six Sigma Path</h4>
              <div className="space-y-3">
                {[
                  { level: "Yellow Belt", year: "2019", status: "completed" },
                  { level: "Green Belt", year: "2019", status: "completed" },
                  { level: "Black Belt", year: "2020", status: "completed" }
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step.status === "completed" ? "bg-success text-white" : "bg-gray-300"
                    }`}>
                      {step.status === "completed" ? <FaCheckCircle /> : index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{step.level}</div>
                      <div className="text-sm text-gray-500">{step.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Lean Manufacturing */}
          <div className="card bg-base-100 shadow-lg border border-base-300">
            <div className="card-body">
              <h4 className="card-title justify-center text-success mb-4">Lean Manufacturing</h4>
              <div className="space-y-3">
                {[
                  { level: "Yellow Belt", year: "2015", status: "completed" },
                  { level: "Green Belt", year: "2017", status: "completed" },
                  { level: "Black Belt", year: "2018", status: "completed" },
                  { level: "TPS Practitioner", year: "2024", status: "in-progress" }
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step.status === "completed" ? "bg-success text-white" : 
                      step.status === "in-progress" ? "bg-warning text-white" : "bg-gray-300"
                    }`}>
                      {step.status === "completed" ? <FaCheckCircle /> : 
                       step.status === "in-progress" ? <FaBookOpen /> : index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{step.level}</div>
                      <div className="text-sm text-gray-500">{step.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Professional Development */}
          <div className="card bg-base-100 shadow-lg border border-base-300">
            <div className="card-body">
              <h4 className="card-title justify-center text-info mb-4">Professional Growth</h4>
              <div className="space-y-3">
                {[
                  { level: "Work Study Expert", year: "2015", status: "completed" },
                  { level: "TPM Practitioner", year: "2016", status: "completed" },
                  { level: "Business Coach", year: "2018", status: "completed" },
                  { level: "TQM Practitioner", year: "2024", status: "in-progress" }
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step.status === "completed" ? "bg-success text-white" : 
                      step.status === "in-progress" ? "bg-warning text-white" : "bg-gray-300"
                    }`}>
                      {step.status === "completed" ? <FaCheckCircle /> : 
                       step.status === "in-progress" ? <FaBookOpen /> : index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{step.level}</div>
                      <div className="text-sm text-gray-500">{step.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Recognition */}
      <div className="card bg-primary text-primary-content shadow-2xl">
        <div className="card-body text-center">
          <h3 className="card-title justify-center text-2xl mb-4">Global Certification Recognition</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { country: "Sri Lanka", count: 8, flag: "🇱🇰" },
              { country: "India", count: 1, flag: "🇮🇳" },
              { country: "Japan", count: 1, flag: "🇯🇵" },
              { country: "Canada", count: 1, flag: "🇨🇦" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{item.flag}</div>
                <div className="text-2xl font-bold">{item.count}</div>
                <div className="text-primary-content/80">{item.country}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;