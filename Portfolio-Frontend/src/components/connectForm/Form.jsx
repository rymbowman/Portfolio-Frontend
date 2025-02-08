import FormItem from "./FormItem";

import "./Form.css";
import ContactReason from "./ContactReason";
import PropTypes from "prop-types";
const Form = ({
  formData,
  handleChange,
  getInputClass,
  handleSubmit,
  setContactReason,
  contactReason,
  emailError,
}) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="names-row">
        <FormItem
          type={"text"}
          name={"fName"}
          placeholder={"First Name"}
          id={"first-name"}
          className={`form-item ${getInputClass("fName")}`}
          value={formData.fName}
          onChange={handleChange}
        />
        <FormItem
          type={"text"}
          name={"lName"}
          placeholder={"Last Name"}
          id={"last-name"}
          className={`form-item ${getInputClass("lName")}`}
          value={formData.lName}
          onChange={handleChange}
        />
      </div>
      {emailError && <p className="error-message">{emailError}</p>}
      <FormItem
        type={"email"}
        name={"email"}
        placeholder={"Email"}
        className={`form-item ${getInputClass("email")}`}
        value={formData.email}
        onChange={handleChange}
      />
      <FormItem
        type={"phone"}
        placeholder={"Phone"}
        id={"phone"}
        name={"phone"}
        className="form-item"
        value={formData.phone}
        onChange={handleChange}
      />
      <ContactReason
        setContactReason={setContactReason}
        getInputClass={getInputClass}
        contactReason={contactReason}
      />
      <FormItem
        type={"text"}
        name={"subject"}
        placeholder={"Subject"}
        className={`form-item ${getInputClass("subject")}`}
        value={formData.subject}
        onChange={handleChange}
      />
      <div className="form-row">
        <textarea
          type="message"
          className={`form-item ${getInputClass("message")}`}
          name="message"
          rows="5"
          placeholder="Type message here"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit" className="form-btn">
        Submit
      </button>
    </form>
  );
};

Form.propTypes = {
  formData: PropTypes.object,
  handleChange: PropTypes.func,
  getInputClass: PropTypes.func,
  handleSubmit: PropTypes.func,
  setContactReason: PropTypes.func,
  contactReason: PropTypes.string,
  emailError: PropTypes.string,
};
export default Form;
