import PropTypes from "prop-types";
import "./Form.css";
const ContactReason = ({ setContactReason, getInputClass, contactReason }) => (
  <div className={`contact-reason ${getInputClass("contactReason")}`}>
    <div id="website-design">
      <label htmlFor="website-design">Website Design</label>
      <input
        type="radio"
        name="contactReason"
        className={`radio-dial ${getInputClass("contactReason")}`}
        value={"design"}
        checked={contactReason === "design"}
        onChange={(e) => setContactReason(e.target.value)}
      />
    </div>
    <div id="schedule-interview">
      <label htmlFor="interview">Schedule Interview</label>
      <input
        type="radio"
        name="contactReason"
        className={`radio-dial ${getInputClass("contactReason")}`}
        value={"interview"}
        checked={contactReason === "interview"}
        onChange={(e) => setContactReason(e.target.value)}
      />
    </div>
  </div>
);

ContactReason.propTypes = {
  setContactReason: PropTypes.func,
  getInputClass: PropTypes.func,
  contactReason: PropTypes.string,
};
export default ContactReason;
