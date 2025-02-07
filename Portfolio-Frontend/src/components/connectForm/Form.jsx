import FormItem from "./FormItem";
import { useState } from "react";
import "./Form.css";
const Form = () => {
  const [contactReason, setContactReason] = useState("");

  return (
    <form className="form">
      <div className="names-row">
        <FormItem
          type={"text"}
          name={"fname"}
          placeholder={"First Name"}
          id={"first-name"}
          className=""
        />
        <FormItem
          type={"text"}
          name={"lname"}
          placeholder={"Last Name"}
          id={"last-name"}
          className=""
        />
      </div>
      <FormItem
        type={"email"}
        name={"email"}
        placeholder={"Email"}
        className=""
      />
      <FormItem
        type={"phone"}
        placeholder={"Phone"}
        id={"phone"}
        name={"phone"}
        className={"form-item"}
      />
      <div className={`contact-reason`}>
        <div id="website-design">
          <label htmlFor="website-design">Website Design</label>
          <FormItem
            type={"radio"}
            id={"design"}
            name={"contactReason"}
            className={`radio-dial`}
            value={"design"}
            change={(e) => setContactReason(e.target.value)}
          />
        </div>
        <div id="schedule-interview">
          <label htmlFor="interview">Schedule Interview</label>
          <FormItem
            type={"radio"}
            id={"interview"}
            name={"contactReason"}
            className={`radio-dial`}
            value={"interview"}
            change={(e) => setContactReason(e.target.value)}
          />
        </div>
      </div>
      <FormItem
        type={"text"}
        name={"subject"}
        placeholder={"Subject"}
        className=""
      />
      <div className="form-row">
        <textarea
          type="message"
          className=""
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
