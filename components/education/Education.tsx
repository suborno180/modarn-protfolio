"use client";
import { useState } from "react";
import { FaCalendarAlt, FaGraduationCap, FaMapMarkerAlt, FaAward, FaCertificate, FaStar, FaBookOpen } from "react-icons/fa";

const educationData = [
  {
    id: 1,
    degree: "Masters of Business Administration",
    specialization: "Project Management",
    institution: "Cardiff Metropolitan University – UK",
    period: "2024",
    grade: "CL/CARDIFFMB/24/28",
    location: "United Kingdom",
    type: "masters"
  },
  {
    id: 2,
    degree: "Advanced Diploma in Industrial Engineering",
    institution: "National Institute of Business Management (NIBM), Colombo",
    period: "2015-2016",
    grade: "Advanced Diploma",
    location: "Colombo, Sri Lanka",
    type: "diploma"
  },
  {
    id: 3,
    degree: "Advance Diploma in Industrial Engineering",
    institution: "Sri Lanka Institute of Textile & Apparel",
    period: "2013-2014",
    grade: "Advance Diploma",
    location: "Sri Lanka",
    type: "diploma"
  },
  {
    id: 4,
    degree: "HND in Apparel & Textile Management",
    institution: "Sri Lanka Institute of Textile & Apparel",
    period: "2011-2012",
    grade: "Higher National Diploma",
    location: "Sri Lanka",
    type: "diploma"
  },
  {
    id: 5,
    degree: "Certified Life & Business Coach",
    institution: "Sri Lanka Institute of Training & Development (SLITAD)",
    period: "2018",
    grade: "Professional Certification",
    location: "Sri Lanka",
    type: "certification"
  }
];

const certificationData = [
  {
    id: 1,
    title: "Six Sigma Black Belt 5.0",
    institution: "Mickle J Harry Management Institute (SSMI)",
    year: "2020",
    level: "Black Belt"
  },
  {
    id: 2,
    title: "Six Sigma Yellow & Green Belt",
    institution: "Anexus Europe Institute India",
    year: "2019",
    level: "Green Belt"
  },
  {
    id: 3,
    title: "Lean Black Belt Practitioner",
    institution: "AIMS Institute Sri Lanka",
    year: "2018",
    level: "Black Belt"
  },
  {
    id: 4,
    title: "Lean Green Belt Practitioner",
    institution: "AIMS Institute Sri Lanka",
    year: "2017",
    level: "Green Belt"
  },
  {
    id: 5,
    title: "TPM Practitioner",
    institution: "Institute of Lean Management (ILM)",
    year: "2016",
    level: "Practitioner"
  },
  {
    id: 6,
    title: "Advance Certification of Work Study",
    institution: "AIMS Sri Lanka (UK)",
    year: "2015",
    level: "Advanced"
  }
];

const Education = () => {
  const [activeTab, setActiveTab] = useState("education");

  const getTypeColor = (type: string) => {
    switch (type) {
      case "masters": return "bg-gradient-to-r from-blue-500 to-blue-600";
      case "diploma": return "bg-gradient-to-r from-purple-500 to-purple-600";
      case "certification": return "bg-gradient-to-r from-green-500 to-green-600";
      default: return "bg-gradient-to-r from-gray-500 to-gray-600";
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Black Belt": return "bg-gradient-to-r from-red-500 to-red-600";
      case "Green Belt": return "bg-gradient-to-r from-emerald-500 to-emerald-600";
      case "Practitioner": return "bg-gradient-to-r from-blue-500 to-blue-600";
      case "Advanced": return "bg-gradient-to-r from-orange-500 to-orange-600";
      default: return "bg-gradient-to-r from-gray-500 to-gray-600";
    }
  };

  const getLevelStars = (level: string) => {
    switch (level) {
      case "Black Belt": return 5;
      case "Green Belt": return 4;
      case "Practitioner": return 3;
      case "Advanced": return 4;
      default: return 3;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 py-16 lg:py-24" id="education">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <FaGraduationCap className="text-2xl text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <FaStar className="text-xs text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                Education & Certifications
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Continuous journey of professional development in industrial engineering, 
            project management, and operational excellence methodologies across global institutions.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("education")}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  activeTab === "education"
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <FaGraduationCap className="text-lg" />
                Academic Education
              </button>
              <button
                onClick={() => setActiveTab("certifications")}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  activeTab === "certifications"
                    ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <FaCertificate className="text-lg" />
                Professional Certs
              </button>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-6xl mx-auto">
          {activeTab === "education" && (
            <div className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Formal Education */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-3 h-12 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Academic Credentials</h3>
                      <p className="text-gray-600">Formal education and degrees</p>
                    </div>
                  </div>
                  
                  {educationData.map((edu, index) => (
                    <div 
                      key={edu.id} 
                      className="group relative"
                    >
                      {/* Timeline */}
                      {index !== educationData.length - 1 && (
                        <div className="absolute left-8 top-20 w-0.5 h-24 bg-gradient-to-b from-blue-200 to-purple-200 group-last:hidden"></div>
                      )}
                      
                      <div className="flex gap-6 p-8 rounded-3xl transition-all duration-500 hover:scale-[1.02] bg-white hover:shadow-2xl border border-gray-200/50 backdrop-blur-sm">
                        <div className="flex-shrink-0 relative">
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg ${getTypeColor(edu.type)}`}>
                            <FaGraduationCap className="text-2xl" />
                          </div>
                          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white rounded-full border-2 border-white flex items-center justify-center">
                            <div className={`w-3 h-3 rounded-full ${getTypeColor(edu.type).replace('bg-gradient-to-r', 'bg-blue-500')}`}></div>
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                            <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                              {edu.degree}
                            </h4>
                            <span className={`text-xs font-semibold px-3 py-1.5 rounded-full text-white ${getTypeColor(edu.type)}`}>
                              {edu.type.charAt(0).toUpperCase() + edu.type.slice(1)}
                            </span>
                          </div>
                          
                          {edu.specialization && (
                            <p className="text-blue-600 font-semibold text-sm mb-3 bg-blue-50 px-3 py-1.5 rounded-lg inline-block">
                              {edu.specialization}
                            </p>
                          )}
                          
                          <p className="text-gray-700 font-semibold text-base mb-3 flex items-center gap-2">
                            <FaBookOpen className="text-blue-500" />
                            {edu.institution}
                          </p>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg">
                              <FaCalendarAlt className="text-blue-500" />
                              <span className="font-medium">{edu.period}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg">
                              <FaMapMarkerAlt className="text-green-500" />
                              <span className="font-medium">{edu.location}</span>
                            </div>
                          </div>
                          
                          <div className="mt-3">
                            <span className="text-sm font-medium text-gray-700 bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-2 rounded-lg border border-gray-300">
                              {edu.grade}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats & Achievements */}
                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-6">Academic Journey</h3>
                    <div className="space-y-4">
                      {[
                        { label: "Highest Degree", value: "MBA", icon: "🎓" },
                        { label: "Field of Expertise", value: "Industrial Engineering", icon: "⚙️" },
                        { label: "Years of Study", value: "15+ Years", icon: "📚" },
                        { label: "International Education", value: "UK & Sri Lanka", icon: "🌍" }
                      ].map((stat, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                          <span className="text-2xl">{stat.icon}</span>
                          <div>
                            <div className="font-semibold">{stat.value}</div>
                            <div className="text-blue-100 text-sm">{stat.label}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ongoing Development */}
                  <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Continuous Learning</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl border border-orange-200">
                        <div className="w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
                        <div className="flex-1">
                          <p className="font-bold text-gray-900 text-lg">TPS Practitioner</p>
                          <p className="text-gray-600">TMS & TPS Institute, Japan</p>
                        </div>
                        <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1.5 rounded-full">
                          In Progress
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl border border-purple-200">
                        <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
                        <div className="flex-1">
                          <p className="font-bold text-gray-900 text-lg">TQM Practitioner</p>
                          <p className="text-gray-600">Ontario Business Excellence Inc., Canada</p>
                        </div>
                        <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1.5 rounded-full">
                          In Progress
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "certifications" && (
            <div className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Certifications Grid */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-3 h-12 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full"></div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Professional Certifications</h3>
                      <p className="text-gray-600">Industry-recognized credentials</p>
                    </div>
                  </div>
                  
                  <div className="grid gap-6">
                    {certificationData.map((cert) => (
                      <div 
                        key={cert.id} 
                        className="group p-8 rounded-3xl bg-white border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] backdrop-blur-sm"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h5 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-green-600 transition-colors">
                              {cert.title}
                            </h5>
                            <p className="text-gray-700 font-semibold text-base flex items-center gap-2">
                              <FaAward className="text-green-500" />
                              {cert.institution}
                            </p>
                          </div>
                          
                          <div className={`text-sm font-bold px-4 py-2 rounded-full text-white shadow-lg ${getLevelColor(cert.level)}`}>
                            {cert.level}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-lg">
                            <FaCalendarAlt className="text-green-500" />
                            <span className="font-semibold text-gray-700">Completed {cert.year}</span>
                          </div>
                          
                          {/* Skill Level Indicator */}
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <div 
                                key={i}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                  i < getLevelStars(cert.level)
                                    ? getLevelColor(cert.level).replace('bg-gradient-to-r', 'bg-green-500')
                                    : 'bg-gray-300'
                                } ${i < getLevelStars(cert.level) ? 'scale-110' : 'scale-100'}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certification Stats & Info */}
                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-6">Certification Impact</h3>
                    <div className="space-y-4">
                      {[
                        { label: "Process Improvement", value: "85%", icon: "📊" },
                        { label: "Cost Reduction", value: "45%", icon: "💰" },
                        { label: "Efficiency Gain", value: "60%", icon: "⚡" },
                        { label: "Quality Improvement", value: "75%", icon: "🎯" }
                      ].map((stat, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                          <span className="text-2xl">{stat.icon}</span>
                          <div className="flex-1">
                            <div className="flex justify-between items-center">
                              <div className="font-semibold">{stat.value}</div>
                              <div className="text-green-100 text-sm">{stat.label}</div>
                            </div>
                            <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                              <div 
                                className="bg-white rounded-full h-2 transition-all duration-1000"
                                style={{ width: stat.value }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Certification Journey */}
                  <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Certification Journey</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-2xl">
                        <span className="font-semibold text-gray-900">Six Sigma Path</span>
                        <div className="flex gap-1">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-green-50 rounded-2xl">
                        <span className="font-semibold text-gray-900">Lean Methodology</span>
                        <div className="flex gap-1">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-purple-50 rounded-2xl">
                        <span className="font-semibold text-gray-900">TPM & TQM</span>
                        <div className="flex gap-1">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Overall Summary */}
        <div className="mt-16 pt-12 border-t border-gray-300/50">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { label: "Total Qualifications", value: "11+", color: "from-blue-500 to-purple-600" },
              { label: "Years of Learning", value: "15+", color: "from-green-500 to-emerald-600" },
              { label: "Global Institutions", value: "8", color: "from-orange-500 to-red-600" },
              { label: "Countries", value: "3", color: "from-purple-500 to-pink-600" }
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className={`bg-gradient-to-r ${stat.color} rounded-2xl p-8 text-white shadow-lg transform group-hover:scale-105 transition-all duration-300`}>
                  <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/90 text-sm font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;