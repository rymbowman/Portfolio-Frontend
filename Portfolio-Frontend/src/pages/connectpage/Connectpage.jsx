import Form from "../../components/connectForm/Form";
import "./Connectpage.css";

const Connectpage = () => {
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
          />
        </div>
      )}
    </div>
  );
};

export default Connectpage;
