import PropTypes from "prop-types";
import "./Form.css";
const ContactReason = ({ onChange, getInputClass, contactReason }) => {
  const options = [
    { id: "website-design", label: "Website Design", value: "design" },
    {
      id: "schedule-interview",
      label: "Schedule Interview",
      value: "interview",
    },
  ];
  return (
    <div
      className={`contact-reason-container ${getInputClass("contactReason")}`}
    >
      <p className="contact-reason-heading">*Contact Reason</p>
      <div className="contact-reason">
        {options.map((option) => (
          <div key={option.id} id={option.id}>
            <label htmlFor={option.id}>{option.label}</label>
            <input
              type="radio"
              name="contactReason"
              className={`radio-dial ${getInputClass("contactReason")}`}
              value={option.value}
              checked={contactReason === option.value}
              onChange={onChange}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

ContactReason.propTypes = {
  onChange: PropTypes.func,
  getInputClass: PropTypes.func,
  contactReason: PropTypes.string,
};
export default ContactReason;
