import { useState } from "react";
import Form from "../../components/connectForm/Form";
import "./Connectpage.css";

const Connectpage = () => {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    contactReason: "",
    subject: "",
    message: "",
  });
  const [contactReason, setContactReason] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [invalidFields, setInvalidFields] = useState([]);
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    const invalidFields = [];
    if (!formData.email) {
      setEmailError("Email is required");
      invalidFields.push("email");
    } else {
      setEmailError("");
    }

    if (invalidFields.length > 0) {
      setInvalidFields(invalidFields);
      setError("Please fill in all required fields");
      return;
    }

    // Submit form data
    setFormSubmitted(true);
    setSuccess("Thank you for connecting!");
  };

  const getInputClass = (name) => {
    return invalidFields.includes(name) ? "invalid" : "";
  };

  return (
    <div className="connectpage">
      {formSubmitted ? (
        <h1 className="success-message">{success}</h1>
      ) : (
        <div className="form-container">
          <h1 className="page-heading">{"Let's Connect!"}</h1>
          {error && <p className="error-message">{error}</p>}
          <Form
            formData={formData}
            handleChange={handleChange}
            getInputClass={getInputClass}
            setContactReason={setContactReason}
            emailError={emailError}
            handleSubmit={handleSubmit}
          />
        </div>
      )}
    </div>
  );
};

export default Connectpage;
