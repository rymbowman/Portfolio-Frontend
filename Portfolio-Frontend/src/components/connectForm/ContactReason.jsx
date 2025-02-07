import PropTypes from "prop-types";
import "./Form.css";
const ContactReason = ({ setContactReason, getInputClass }) => (
  <div className={`contact-reason ${getInputClass("contactReason")}`}>
    <div id="website-design">
      <label htmlFor="website-design">Website Design</label>
      <input
        type="radio"
        name="contactReason"
        className={`radio-dial ${getInputClass("contactReason")}`}
        value={"website design"}
        onChange={(e) => setContactReason(e.target.value)}
      />
    </div>
    <div id="schedule-interview">
      <label htmlFor="interview">Schedule Interview</label>
      <input
        type="radio"
        name="contactReason"
        className={`radio-dial ${getInputClass("contactReason")}`}
        value={"schedule interview"}
        onChange={(e) => setContactReason(e.target.value)}
      />
    </div>
  </div>
);

ContactReason.propTypes = {
  setContactReason: PropTypes.func,
  getInputClass: PropTypes.func,
};
export default ContactReason;
