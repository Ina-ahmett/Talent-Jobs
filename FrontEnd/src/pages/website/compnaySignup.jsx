import React, { useState, useEffect } from "react";
import logo from "../../assets/Talent-Jobs.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CompnaySignup = () => {
  const [step, setStep] = useState(1);
  const [companyLogo, setCompanyLogo] = useState(null);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === "Employers") {
      navigate("/company/create");
    } else if (selectedValue === "Job Seekers") {
      navigate("/jobseeker/create");
    }
  }

  // ✅ 1. Hal object ah oo kaydinaya dhammaan input values
  const [formData, setFormData] = useState(() => {
    const saved = sessionStorage.getItem("formData");
    return saved
      ? JSON.parse(saved)
      : {
          name: "",
          phone: "",
          companyType: "",
          industry: "",
          description: "",
          establishedYear: "",
          location: "",
          website: "",
          email: "",
          password: "",
          confirmPassword: ""
        };
  });

  // ✅ 2. Markasta oo formData isbedesho → ku keydi sessionStorage
  useEffect(() => {
    sessionStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  // ✅ 3. Hal function oo la maamulo input-yaasha
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    const form = document.querySelector("form");
    if (!form.checkValidity()) {
      form.reportValidity(); // waxay tusineysaa error-yada input-yada
      return;
    }
    if (step === 1) {
      const { name, email, phone, password, confirmPassword } = formData;
      if (!name || !email || !phone || !password || !confirmPassword) {
        alert("Please fill in all fields");
        return;
      }
      if (password !== confirmPassword) {
        setPasswordError("Passwords do not match");
        return;
      }
      setPasswordError("");
    }

    if (step === 2) {
      const { location, website, companyType } = formData;
      if (!location || !website || !companyType) {
        alert("Please complete all fields in Step 2");
        return;
      }
    }

    setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    if (companyLogo) {
      data.append("logo", companyLogo);
    }

    try {
      const response = await axios.post("http://localhost:5000/create/company", data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      if (response.status === 201) {
        alert("Company created successfully!");
        navigate("/login");
      } else {
        alert("Error creating company.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending data to the server.");
    }
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-6 rounded-lg  bg-white">
      <img src={logo} alt="Talent Jobs Logo" className="w-20 h-20 rounded-full shadow-md object-cover mx-auto" />

      {/* Header */}
      <div className="flex justify-between items-center mb-6 mt-5">
        <div>
          <h1 className="text-2xl font-bold text-center">{step === 1 ? "Create a Company" : "Creating..."}</h1>
          <p className={`text-sm text-gray-600 ${step === 1 ? "block" : "hidden"}`}>Already have account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">Log In</a>
          </p>
        </div>
        <div className={`${step === 1 ? "block" : "hidden"}`}>
          <select onChange={handleSelectChange} className="border rounded-md px-3 py-2 text-sm">
            <option value="Employers">Company</option>
            <option value="Job Seekers">Job Seekers</option>
          </select>
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mb-4">Step {step} of 3</p>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <Input
              label="Company Name"
              value={formData.name}
              onChange={(val) => handleChange("name", val)}
              required
            />

            <Input
              label="Company Email"
              value={formData.email}
              onChange={(val) => handleChange("email", val)}
              type="email"
              required
            />

            <label className="block text-sm font-medium text-gray-700">Company Phone</label>
            <input
              type="text"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              pattern="^\+?[0-9]{7,15}$"
              title="Enter a valid phone number"
              required
              placeholder="Phone (+2526xxxxxxx)"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />

            <Input
              label="Password"
              value={formData.password}
              onChange={(val) => handleChange("password", val)}
              type="password"
              minLength={8}
              required
              title="Password must be at least 8 characters, include uppercase, lowercase, and number"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 invalid:border-red-500"
            />

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                value={formData.confirmPassword} onChange={(e) => handleChange("confirmPassword", e.target.value)}
                minLength={8}
                required
                className={`mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  passwordError ? "border-red-500" : "border-gray-300"
                }`}
              />
              {passwordError && (
                <p className="text-red-500 text-sm mt-1">{passwordError}</p>
              )}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <Input
              label="Company Location"
              value={formData.location}
              onChange={(val) => handleChange("location", val)}
              required
            />

            <input
              type="url"
              value={formData.website}
              onChange={(e) => handleChange("website", e.target.value)}
              pattern="^(https?:\/\/)?([\w\d-]+\.)+[\w\d]{2,}(\/.*)?$"
              title="Enter a valid website URL"
              placeholder="https://yourcompany.com"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Logo</label>
              <input
                type="file"
                onChange={(e) => setCompanyLogo(e.target.files[0])}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Select for companyType */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Company Type</label>
              <select
                value={formData.companyType}
                onChange={(e) => handleChange("companyType", e.target.value)}
                required
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" selected disabled hidden>Select Type</option>
                <option value="Private">Private</option>
                <option value="Public">Public</option>
                <option value="NGO">NGO</option>
                <option value="Government">Government</option>
              </select>
            </div>
          </>
        )}

        {step === 3 && (
          <>
          <label className="block text-sm font-medium text-gray-700">Industry</label>
            <Input
              placeholder="Qaybtee shirkaddu ka shaqeysa It, healthy, food, etc"
              value={formData.industry}
              onChange={(val) => handleChange("industry", val)}
            />

            <Input
              label="Description"
              value={formData.description}
              onChange={(val) => handleChange("description", val)}
            />

            <input
              type="number"
              value={formData.establishedYear}
              onChange={(e) => handleChange("establishedYear", e.target.value)}
              min={1900}
              max={2025}
              placeholder="Established Year"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
          </>
        )}

        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
            >
              Back
            </button>
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="ml-auto bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="ml-auto bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Create Company
            </button>
          )}
        </div>
      </form> 

    </div>
  );
};

const Input = ({ label, value, onChange, type = "text" }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required
      className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 invalid:border-red-500"
    />
  </div>
);

export default CompnaySignup;
