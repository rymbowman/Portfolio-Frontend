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
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [invalidFields, setInvalidFields] = useState([]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "radio") {
      setFormData((prevData) => ({
        ...prevData,
        contactReason: value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form data
    const invalidFields = [];
    if (!formData.fName) {
      invalidFields.push("fName");
    }
    if (!formData.lName) {
      invalidFields.push("lName");
    }
    if (!formData.email) {
      invalidFields.push("email");
    }
    if (!formData.phone) {
      invalidFields.push("phone");
    }
    if (!formData.contactReason) {
      invalidFields.push("contactReason");
    }
    if (!formData.subject) {
      invalidFields.push("subject");
    }
    if (!formData.message) {
      invalidFields.push("message");
    }

    if (invalidFields.length > 0) {
      setInvalidFields(invalidFields);
      console.log(invalidFields);
      setError("Please fill in all required fields");
      return;
    }

    const { fName, lName, email, phone, contactReason, subject, message } =
      formData;

    try {
      await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fName,
          lName,
          email,
          phone,
          contactReason,
          subject,
          message,
        }),
      });

      // Submit form data
      setFormSubmitted(true);
      setSuccess("Thank you for connecting!");
      setError("");
      setInvalidFields([]);
    } catch (err) {
      setError("Error, please try again later.", err);
    }
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
          <Form
            formData={formData}
            handleChange={handleChange}
            getInputClass={getInputClass}
            handleSubmit={handleSubmit}
            error={error}
          />
        </div>
      )}
    </div>
  );
};

export default Connectpage;
