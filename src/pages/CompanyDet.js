import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

import { FaUpload, FaPlus } from "react-icons/fa";

function CompanyForm1() {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const [domain, setDomain] = useState("");
  const [description, setDescription] = useState("");
  const [wordCount, setWordCount] = useState(null); // Initialize word count to null
  const [errors, setErrors] = useState({
    companyName: "",
    domain: "",
    description: "",
    street: "",
    landmark: "",
    pincode: "",
  });

  // Form2
  const [street, setStreet] = useState("");
  const [landmark, setLandmark] = useState("");
  const [pincode, setPincode] = useState("");
  const [logo, setLogo] = useState(null);
  const [skillSet, setSkillSet] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  // Form 3
  const [members, setMembers] = useState([
    { name: "", designation: "", socialLink: "" },
  ]);
  const [memberErrors, setMemberErrors] = useState([
    { name: "", designation: "", socialLink: "" },
  ]);
  const [showValidationMessage, setShowValidationMessage] = useState(false);
  const [testLinkError, setTestLinkError] = useState("");

  const validateForm = () => {
    const newErrors = {
      companyName: "",
      domain: "",
      description: "",
      street: "",
      landmark: "",
      pincode: "",
    };

    if (!companyName.trim()) {
      newErrors.companyName = "Please fill out this field";
    }

    if (!domain.trim()) {
      newErrors.domain = "Please select a domain";
    }

    if (!description.trim()) {
      newErrors.description = "Description is required";
    } else if (description.trim().split(/\s+/).length < 50) {
      newErrors.description = "50 words are mandatory";
    } else if (description.trim().split(/\s+/).length > 100) {
      newErrors.description = "You can't write more";
    }

    if (!street.trim()) {
      newErrors.street = "Please fill out this field";
    }

    if (!landmark.trim()) {
      newErrors.landmark = "Please fill out this field";
    }

    if (!pincode.trim()) {
      newErrors.pincode = "Please fill out this field";
    } else if (!/^\d{6}$/.test(pincode)) {
      newErrors.pincode = "Invalid pincode";
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  const validateMembers = () => {
    let isValid = true;
    const newMemberErrors = members.map((member) => ({
      name: "",
      designation: "",
      socialLink: "",
    }));

    members.forEach((member, index) => {
      if (!member.name.trim()) {
        newMemberErrors[index].name = "Please enter a name";
        isValid = false;
      }

      if (!member.designation.trim()) {
        newMemberErrors[index].designation = "Please enter a designation";
        isValid = false;
      }

      if (!member.socialLink.trim()) {
        newMemberErrors[index].socialLink = "Please enter a social link";
        isValid = false;
      }
    });

    setMemberErrors(newMemberErrors);
    return isValid;
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    if (validateMembers()) {
      console.log("Team Details:", members);
      // Redirect or further actions can be placed here
    }
  };

  const handleInputChange = (index, key, value) => {
    const newMembers = [...members];
    newMembers[index][key] = value;
    setMembers(newMembers);

    const newMemberErrors = [...memberErrors];
    newMemberErrors[index][key] = "";
    setMemberErrors(newMemberErrors);
  };

  const addMember = () => {
    const lastMember = members[members.length - 1];
    if (
      !lastMember.name.trim() ||
      !lastMember.designation.trim() ||
      !lastMember.socialLink.trim()
    ) {
      setShowValidationMessage(true);
    } else {
      setMembers([...members, { name: "", designation: "", socialLink: "" }]);
      setMemberErrors([
        ...memberErrors,
        { name: "", designation: "", socialLink: "" },
      ]);
      setShowValidationMessage(false);
    }
  };

  const handleTestLink = () => {
    const lastMember = members[members.length - 1];
    if (lastMember.socialLink.trim()) {
      window.open(lastMember.socialLink, "_blank");
      setTestLinkError("");
    } else {
      setTestLinkError("Please provide the social profile link.");
    }
  };

  const handleCompanyNameChange = (value) => {
    setCompanyName(value);
    setErrors((prevErrors) => ({ ...prevErrors, companyName: "" }));
  };

  const handleDomainChange = (value) => {
    setDomain(value);
    setErrors((prevErrors) => ({ ...prevErrors, domain: "" }));
  };

  const handleDescriptionChange = (value) => {
    setDescription(value);
    setErrors((prevErrors) => ({ ...prevErrors, description: "" }));
    const words = value.trim().split(/\s+/);
    setWordCount(words.length);
  };

  const handleStreetChange = (value) => {
    setStreet(value);
    setErrors((prevErrors) => ({ ...prevErrors, street: "" }));
  };

  const handleLandmarkChange = (value) => {
    setLandmark(value);
    setErrors((prevErrors) => ({ ...prevErrors, landmark: "" }));
  };

  const handlePincodeChange = (value) => {
    if (/^\d*$/.test(value)) {
      setPincode(value);
      setErrors((prevErrors) => ({ ...prevErrors, pincode: "" }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        pincode: "Enter correct pincode",
      }));
    }
  };

  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    setLogo(file);
  };

  const handleSkillChange = (event) => {
    setNewSkill(event.target.value);
  };

  const addSkill = () => {
    if (newSkill.trim() !== "") {
      setSkillSet([...skillSet, newSkill]);
      setNewSkill("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = {
        companyName: companyName,
        domain: domain,
        description: description,
        street: street,
        landmark: landmark,
        pincode: pincode,
        logo: logo,
        skillSet: skillSet,
      };
      console.log("Form Data:", formData);
    }
  };

  return (
    <div>
      
      <div className="min-h-screen flex items-center justify-center bg-white overflow-hidden sm:px-6 lg:px-8  pb-5 ">
        <div className="bg-white p-8 rounded shadow-md sm:max-w-md w-full mt-10 ">
          <h1 className="text-3xl font-semibold text-center text-black">
            Company Details
          </h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-black"
                htmlFor="companyName"
              >
                Name of the company
              </label>
              <input
                placeholder="Enter your company name"
                type="text"
                id="companyName"
                className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm"
                value={companyName}
                disabled
                onChange={(e) => handleCompanyNameChange(e.target.value)}
              />
              {errors.companyName && (
                <div className="text-red-500">{errors.companyName}</div>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-black"
                htmlFor="domain"
              >
                Domain
              </label>
              <select
                id="domain"
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm ${
                  domain ? "text-black" : ""
                }`}
                value={domain}
                disabled
                onChange={(e) => handleDomainChange(e.target.value)}
              >
                <option value="" disabled hidden>
                  Select a domain
                </option>
                <option value="healthcare">Healthcare</option>
                <option value="software">Software</option>
                <option value="eCommerce">ECommerce</option>
                <option value="entertainment">Entertainment</option>
                <option value="fintech">Fintech</option>
                <option value="technology">Technology</option>
                <option value="education">Education</option>
                <option value="energy">Energy</option>
                <option value="agriculture">Agriculture</option>
                <option value="logistics">Logistics</option>
              </select>
              {errors.domain && (
                <div className="text-red-500">{errors.domain}</div>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-black"
                htmlFor="description"
              >
                Description of the company
              </label>
              <textarea
                id="description"
                placeholder="Few words about your company" // Placeholder added here
                rows="5" // Increased number of rows
                className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm"
                value={description}
                disabled
                onChange={(e) => handleDescriptionChange(e.target.value)}
              />
              {wordCount !== null && (
                <div className="text-right text-sm text-gray-500">
                  {wordCount}/100
                </div>
              )}
              {errors.description && (
                <div className="text-red-500">{errors.description}</div>
              )}
            </div>
            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="mb-4">
                <p className="block text-sm font-medium text-black mb-2">
                  Address
                </p>
                <input
                  placeholder="Street"
                  type="text"
                  className="mt-1 block w-full px-3 text-black py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm mb-2"
                  value={street}
                  disabled
                  onChange={(e) => handleStreetChange(e.target.value)}
                />
                {errors.street && (
                  <div className="text-red-500">{errors.street}</div>
                )}
                <input
                  placeholder="Landmark"
                  type="text"
                  className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm mb-2"
                  value={landmark}
                  disabled
                  onChange={(e) => handleLandmarkChange(e.target.value)}
                />
                {errors.landmark && (
                  <div className="text-red-500">{errors.landmark}</div>
                )}
                <input
                  placeholder="Pincode"
                  type="text"
                  className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm"
                  value={pincode}
                  disabled
                  onChange={(e) => handlePincodeChange(e.target.value)}
                />
                {errors.pincode && (
                  <div className="text-red-500">{errors.pincode}</div>
                )}
              </div>
              <div className="mb-4">
                <p className="block text-sm font-medium text-black mb-2">
                  Logo
                </p>
                <label className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoChange}
                    className="absolute inset-0 w-full h-full text-black opacity-0 cursor-pointer"
                    disabled
                  />
                  <div className="flex items-center justify-center w-full h-9 border border-gray-300 rounded-md shadow-sm focus-within:border-slate-700 bg-white">
                    <FaUpload className="w-4 h-4 mr-2" /> Upload File
                  </div>
                </label>
              </div>
              <div className="mb-4">
                <p className="block text-sm font-medium text-black mb-2">
                  Skill Set of Firm
                </p>
                <div className="flex mb-2 relative">
                  <input
                    type="text"
                    placeholder="Enter skill"
                    className="flex-1 px-3 py-2 border border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm"
                    value={newSkill}
                    disabled
                    onChange={handleSkillChange}
                  />
                  <button
                    type="button"
                    className="absolute right-0 inset-y-0 px-3 py-2 text-black rounded-md"
                    onClick={addSkill}
                  >
                    <FaPlus className="w-4 h-4 " />
                  </button>
                </div>
                {skillSet.length > 0 && (
                  <ul className="max-h-32 overflow-y-auto border border-gray-300 rounded-md p-2">
                    {skillSet.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                )}
              </div>
            </form>
          </form>
          <form className="mt-6" onSubmit={handleSubmit1}>
            {members.map((member, index) => (
              <div key={index} className="mb-4">
                <h2 className="text-lg text-center pb-2 font-semibold text-black">
                 Member
                </h2>

                <div className="mb-2">
                  <label
                    className="block text-sm font-medium text-black"
                    htmlFor={`name-${index}`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id={`name-${index}`}
                    placeholder="Enter name"
                    className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm"
                    value={member.name}
                    disabled
                    onChange={(e) =>
                      handleInputChange(index, "name", e.target.value)
                    }
                  />
                  {memberErrors[index]?.name && (
                    <div className="text-red-500">
                      {memberErrors[index].name}
                    </div>
                  )}
                </div>

                <div className="mb-2">
                  <label
                    className="block text-sm font-medium text-black"
                    htmlFor={`designation-${index}`}
                  >
                    Designation
                  </label>
                  <input
                    type="text"
                    id={`designation-${index}`}
                    placeholder="Enter designation"
                    className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm"
                    value={member.designation}
                    disabled
                    onChange={(e) =>
                      handleInputChange(index, "designation", e.target.value)
                    }
                  />
                  {memberErrors[index]?.designation && (
                    <div className="text-red-500">
                      {memberErrors[index].designation}
                    </div>
                  )}
                </div>

                <div className="mb-2">
                  <label
                    className="block text-sm font-medium text-black"
                    htmlFor={`socialLink-${index}`}
                  >
                    Social Profile Link
                  </label>
                  <input
                    type="text"
                    id={`socialLink-${index}`}
                    placeholder="Enter social profile link"
                    className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm"
                    value={member.socialLink}
                    disabled
                    onChange={(e) =>
                      handleInputChange(index, "socialLink", e.target.value)
                    }
                  />
                  {memberErrors[index]?.socialLink && (
                    <div className="text-red-500">
                      {memberErrors[index].socialLink}
                    </div>
                  )}
                </div>

                <div className="form-field">
              <div className="form-control justify-between">
                <label className="form-label">
                  <p
                    className="text-m text-blue-600 hover:text-blue-600 hover:underline focus:outline-none pb-5 pr-10 cursor-pointer"
                    onClick={handleTestLink}
                  >
                    Test link
                  </p>
                  <button
                type="button"
                onClick={addMember}>
                  <p
                    className="text-m text-black ml-10 hover:text-gray-900 hover:underline focus:outline-none pb-5 pr-10 cursor-pointer"
                    // onClick={}
                  >
                    Add member
                  </p>
                  </button>
                </label>
              </div>
            </div>
   
              </div>
            ))}
          </form>
        </div>
      </div>
    </div>
  );
}

export default CompanyForm1;
