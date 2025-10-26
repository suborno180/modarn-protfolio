"use client";
import { useState } from "react";
import { FaPaperPlane, FaCheckCircle, FaExclamationTriangle, FaClock, FaUser, FaEnvelope, FaMapMarkerAlt, FaDollarSign, FaProjectDiagram, FaFileAlt } from "react-icons/fa";

const commonClass = "input input-lg border-0 border-b-2 focus:outline-none focus:placeholder:text-primary placeholder:text-[15px] md:placeholder:text-lg focus:border-primary border-[#E6E8EB] w-full rounded-none px-0 transition-all duration-300";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    budget: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const simulateProgress = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + 10;
      });
    }, 200);
    return interval;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setProgress(0);

    const progressInterval = simulateProgress();

    try {
      // Simulate API call with realistic timing
      await new Promise(resolve => setTimeout(resolve, 2000));

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setProgress(100);
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          location: "",
          budget: "",
          subject: "",
          message: ""
        });

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setIsSuccess(false);
          setProgress(0);
        }, 5000);
      } else {
        throw new Error(result.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setProgress(0);
      setError(err.message || 'Failed to send message. Please check your connection.');
    } finally {
      clearInterval(progressInterval);
      setIsLoading(false);
    }
  };

  // Calculate form completion percentage
  const formCompletion = Math.round(
    (Object.values(formData).filter(value => value.trim() !== '').length / Object.keys(formData).length) * 100
  );

  return (
    <div className="relative">
      {/* Form Completion Indicator */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">Form Completion</span>
          <span className="text-sm font-semibold text-primary">{formCompletion}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${formCompletion}%` }}
          ></div>
        </div>
      </div>

      <p className="text-[12px] xs:text-[14px] max-lg:text-center sm:text-lg font-normal text-gray-600 mb-6">
        Interested in industrial engineering consultation or project collaboration?
        Let&apos;s discuss how we can optimize your manufacturing operations.
      </p>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl z-10 flex flex-col items-center justify-center p-8">
          {/* Animated Spinner */}
          <div className="relative mb-6">
            <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin border-t-blue-600"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <FaPaperPlane className="text-blue-600 text-lg animate-pulse" />
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full max-w-xs mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Sending your proposal</span>
              <span className="text-sm font-semibold text-blue-600">{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Loading Steps */}
          <div className="space-y-2 text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <FaClock className="text-blue-500 animate-pulse" />
              <span>Processing your information...</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <FaPaperPlane className="text-purple-500" />
              <span>Securing connection...</span>
            </div>
          </div>
        </div>
      )}

      {/* Success Message */}
      {isSuccess && (
        <div className="mb-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <FaCheckCircle className="text-2xl text-green-600 animate-bounce" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-green-800 text-lg mb-1">Proposal Sent Successfully! 🎉</h4>
              <p className="text-green-700 text-sm">
                Thank you for your interest! I've received your proposal and will review it carefully.
                Expect a detailed response within 2-4 business hours.
              </p>
              <div className="flex items-center gap-4 mt-3 text-xs text-green-600">
                <div className="flex items-center gap-1">
                  <FaClock />
                  <span>Response Time: 2-4 hours</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaEnvelope />
                  <span>Confirmation sent to {formData.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mb-6 p-6 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <FaExclamationTriangle className="text-2xl text-red-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-red-800 text-lg mb-1">Submission Failed</h4>
              <p className="text-red-700 text-sm">{error}</p>
              <button
                onClick={() => setError("")}
                className="mt-3 text-xs text-red-600 hover:text-red-800 font-medium"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Form Fields */}
      <div className="mx-2">
        <form className="flex flex-col gap-6 mt-4" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="relative">
            <div className="flex items-center gap-3 mb-2">
              <FaUser className="text-gray-400 text-sm" />
              <label className="text-sm font-medium text-gray-700">Your Name</label>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name*"
              className={`${commonClass} ${formData.name ? 'border-primary' : ''}`}
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <div className="flex items-center gap-3 mb-2">
              <FaEnvelope className="text-gray-400 text-sm" />
              <label className="text-sm font-medium text-gray-700">Email Address</label>
            </div>
            <input
              type="email"
              name="email"
              placeholder="your.email@company.com*"
              className={`${commonClass} ${formData.email ? 'border-primary' : ''}`}
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          {/* Location Field */}
          <div className="relative">
            <div className="flex items-center gap-3 mb-2">
              <FaMapMarkerAlt className="text-gray-400 text-sm" />
              <label className="text-sm font-medium text-gray-700">Company Location</label>
            </div>
            <input
              type="text"
              name="location"
              placeholder="City, Country*"
              className={`${commonClass} ${formData.location ? 'border-primary' : ''}`}
              value={formData.location}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          {/* Budget and Project Type */}
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
            <div className="relative">
              <div className="flex items-center gap-3 mb-2">
                <FaDollarSign className="text-gray-400 text-sm" />
                <label className="text-sm font-medium text-gray-700">Project Budget</label>
              </div>
              <input
                type="text"
                name="budget"
                placeholder="Estimated budget*"
                className={`${commonClass} ${formData.budget ? 'border-primary' : ''}`}
                value={formData.budget}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>

            <div className="relative">
              <div className="flex items-center gap-3 mb-2">
                <FaProjectDiagram className="text-gray-400 text-sm" />
                <label className="text-sm font-medium text-gray-700">Project Type</label>
              </div>
              <input
                type="text"
                name="subject"
                placeholder="e.g., Process Optimization*"
                className={`${commonClass} ${formData.subject ? 'border-primary' : ''}`}
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="relative">
            <div className="flex items-center gap-3 mb-2">
              <FaFileAlt className="text-gray-400 text-sm" />
              <label className="text-sm font-medium text-gray-700">Project Details</label>
            </div>
            <textarea
              name="message"
              placeholder="Describe your project requirements, challenges, and objectives*"
              className={`${commonClass} min-h-[100px] resize-none ${formData.message ? 'border-primary' : ''}`}
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isLoading}
              rows={4}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`group relative btn gap-3 max-lg:mx-auto rounded-xl mt-6 text-[13px] md:text-[16px] w-fit font-semibold lg:mt-8 p-4 md:px-8 transition-all duration-500 overflow-hidden ${isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105'
              }`}
            disabled={isLoading}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

            {/* Button Content */}
            <span className="relative z-10 text-white flex items-center gap-3">
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending Proposal...
                </>
              ) : (
                <>
                  <FaPaperPlane className="text-white group-hover:animate-pulse" />
                  Submit Proposal
                </>
              )}
            </span>
          </button>

          {/* Form Disclaimer */}
          <div className="text-xs text-gray-500 text-center mt-4">
            <p>Your information is secure and will only be used to respond to your inquiry.</p>
            <p>Typical response time: 2-4 hours during business days</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;