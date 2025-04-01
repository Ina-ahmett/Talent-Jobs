// JobseekerSignup.jsx
import React, { useState, useEffect } from "react";
import logo from "../../assets/Talent-Jobs.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const JobseekerSignup = () => {
  const [step, setStep] = useState(1);
  const [profileImage, setProfileImage] = useState(null);
  const [resume, setResume] = useState(null);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // loading state


  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === "company") {
      navigate("/company/create");
    } else if (selectedValue === "jobseeker") {
      navigate("/jobseeker/create");
    }
  }

  // ✅ 1. Hal object ah oo kaydinaya dhammaan input values
  const [formData, setFormData] = useState(() => {
    const saved = sessionStorage.getItem("jobseekerFormData");
    return saved
      ? JSON.parse(saved)
      : {
          fullName: "",
          email: "",
          phone: "",
          gender: "",
          dateOfBirth: "",
          nationality: "Somali",
          city: "",
          educationLevel: "",
          fieldOfStudy: "",
          placeOfEducation: "",
          experienceYears: 0,
          desiredJobTitle: "",
          skills: [],
          password: "",
          confirmPassword: "",
        };
  });

  // ✅ 2. Markasta oo formData isbedesho → ku keydi sessionStorage
  useEffect(() => {
    sessionStorage.setItem("jobseekerFormData", JSON.stringify(formData));
  }, [formData]);

  // ✅ 3. Hal function oo la maamulo input-yaasha
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // ✅ 4. Hal function oo la maamulo next-step
  const nextStep = () => {
    const form = document.querySelector("form");
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    if (step === 1) {
      const { fullName, email, phone, password, confirmPassword } = formData;
      if (!fullName || !email || !phone || !password || !confirmPassword) {
        alert("Please fill in all fields");
        return;
      }
      if (password !== confirmPassword) {
        setPasswordError("Passwords do not match");
        return;
      }
      setPasswordError("");
    }
    setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    if (!resume || !profileImage) {
      alert("Please upload your resume and profile image.");
      setLoading(false);
      return;
    }
  
    const data = new FormData();
    for (const key in formData) {
      if (key === "skills" && Array.isArray(formData.skills)) {
        formData.skills.forEach(skill => data.append("skills", skill));
      } else if (key !== "confirmPassword") {
        data.append(key, formData[key]);
      }
    }
  
    if (resume) data.append("resume", resume);
    if (profileImage) data.append("profileImage", profileImage);
  
    try {
      const response = await axios.post("http://localhost:5000/create/jobseeker", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
  
      if (response.status === 201) {
        alert("Jobseeker registered successfully!");
        sessionStorage.removeItem("jobseekerFormData");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error:", error);
      console.log("Response:", error.response);
      alert(error.response?.data?.message || "Error sending data to the server.");
    } finally {
      setLoading(false);
    }
  };

  const skillsList = [
    "Graphics & Design",
    "Code & Programming",
    "Digital Marketing",
    "Video & Animation",
    "Time Management",
    "Critical Thinking",
    "Data & Science"
  ];
  return (
    <div className="max-w-xl mx-auto my-10 p-6 rounded-lg bg-white">
      <img src={logo} alt="Talent Jobs Logo" className="w-20 h-20 rounded-full shadow-md object-cover mx-auto" />

      {/* Header */}
      <div className="flex justify-between items-center mb-6 mt-5">
        <div>
          <h1 className="text-2xl font-bold text-center">{step === 1 ? "Register as Jobseeker" : "Continue Registration"}</h1>
          <p className={`text-sm text-gray-600 ${step === 1 ? "block" : "hidden"}`}>Already have account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">Log In</a>
          </p>
        </div>
        <div className={`${step === 1 ? "block" : "hidden"}`}>
          <select onChange={handleSelectChange} className="border rounded-md px-3 py-2 text-sm">
            <option value="company">Company</option>
            <option value="jobseeker" selected>Job Seekers</option>
          </select>
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mb-4">Step {step} of 3</p>

      <form className="mt-6">
        {step === 1 && (
          <>
            <Input label="Full Name" value={formData.fullName} onChange={(val) => handleChange("fullName", val)} />
            <Input label="Email" type="email" value={formData.email} onChange={(val) => handleChange("email", val)} />
            <Input label="Phone" value={formData.phone} onChange={(val) => handleChange("phone", val)} />
            <Input label="Password" type="password" value={formData.password} onChange={(val) => handleChange("password", val)} minLength={8} />
            <Input label="Confirm Password" type="password" value={formData.confirmPassword} onChange={(val) => handleChange("confirmPassword", val)} minLength={8} />
            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
          </>
        )}

        {step === 2 && (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <select
                value={formData.gender}
                onChange={(e) => handleChange("gender", e.target.value)}
                required
                className="mt-1 p-2 w-full border rounded-md"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <Input label="Date of Birth" type="date" value={formData.dateOfBirth} onChange={(val) => handleChange("dateOfBirth", val)} />
            <Input label="City" value={formData.city} onChange={(val) => handleChange("city", val)} />
            <Input label="Nationality" value={formData.nationality} onChange={(val) => handleChange("nationality", val)} />
          </>
        )}

        {step === 3 && (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Education Level</label>
              <select value={formData.educationLevel} onChange={(e) => handleChange("educationLevel", e.target.value)} required className="mt-1 p-2 w-full border rounded-md">
                <option value="" selected disabled hidden>Select Level</option>
                <option value="Primary">Primary</option>
                <option value="Secondary">Secondary</option>
                <option value="Diploma">Diploma</option>
                <option value="Bachelor">Bachelor</option>
                <option value="Master">Master</option>
                <option value="PhD">PhD</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <Input label="Field of Study" value={formData.fieldOfStudy} onChange={(val) => handleChange("fieldOfStudy", val)} />
            <label className="block text-sm font-medium text-gray-700 mt-2">Place of Education</label>
            <input placeholder="Goobta waxbarashada" className="w-full border p-2 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.placeOfEducation} onChange={(e) => handleChange("placeOfEducation", e.target.value)} />
            <Input label="Experience Years" type="number" value={formData.experienceYears} onChange={(val) => handleChange("experienceYears", val)} />
            <label className="block text-sm font-medium text-gray-700 mt-2">Skills</label>
            <div className="flex flex-wrap gap-3 mt-2">
              {skillsList.map((skill) => (
                <label key={skill} className="flex items-center space-x-2 text-sm">
                  <input
                    type="checkbox"
                    value={skill}
                    checked={formData.skills.includes(skill)} // Haddii hore loo doortay
                    onChange={(e) => {
                      const updatedSkills = formData.skills.includes(skill)
                        ? formData.skills.filter((s) => s !== skill) // Haddii la damiyo, ka saar
                        : [...formData.skills, skill];               // Haddii la doorto, ku dar
                      handleChange("skills", updatedSkills);
                    }}
                    className="accent-blue-500"
                  />
                  <span>{skill}</span>
                </label>
              ))}
            </div>
            <label className="block text-sm font-medium text-gray-700 mt-2">Resume</label>
            <input type="file" onChange={(e) => setResume(e.target.files[0])} className="w-full border p-2 rounded-md mb-2" />
            <label className="block text-sm font-medium text-gray-700 mt-2">Profile Image</label>
            <input type="file" onChange={(e) => setProfileImage(e.target.files[0])} className="w-full border p-2 rounded-md" />
          </>
        )}

        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button type="button" onClick={prevStep} className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">
              Back
            </button>
          )}
          {step < 3 ? (
            <button type="button" onClick={nextStep} className="ml-auto bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
              Next
            </button>
          ) : (
            <button type="button" onClick={handleSubmit} disabled={loading} className="ml-auto bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              {loading ? "Creating..." : "Create"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

const Input = ({ label, value, onChange, type = "text", minLength }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required
      minLength={minLength}
      className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default JobseekerSignup;