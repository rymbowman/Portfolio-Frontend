import FormItem from "./FormItem";
import "./Form.css";

const Form = () => {
  return (
    <form className="form">
      <div className="names-row">
        <FormItem
          type={"text"}
          name={"fname"}
          placeholder={"First Name"}
          id={"first-name"}
          className={getInputClass("fname")}
        />
        <FormItem
          type={"text"}
          name={"lname"}
          placeholder={"Last Name"}
          id={"last-name"}
          className={getInputClass("lname")}
        />
      </div>
      <FormItem
        type={"email"}
        name={"email"}
        placeholder={"Email"}
        className={getInputClass("email")}
      />
      <FormItem
        type={"phone"}
        placeholder={"Phone"}
        id={"phone"}
        name={"phone"}
        className={"form-item"}
      />
      <div className={getInputClass("contactReason")}>
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
      <FormItem
        type={"text"}
        name={"subject"}
        placeholder={"Subject"}
        className={getInputClass("subject")}
      />
      <div className="form-row">
        <textarea
          type="message"
          className={getInputClass("message")}
          name="message"
          rows="5"
          placeholder="Type message here"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary" id="btn-contact">
        Submit
      </button>
    </form>
  );
};

export default Form;
