import PropTypes from "prop-types";
import "./Form.css";
const FormItem = ({
  type,
  placeholder,
  name,
  id,
  className,
  rows,
  value,
  change,
}) => {
  return (
    <div className="form-row" id={id}>
      <input
        type={type}
        className={`form-item ${className}`}
        name={name}
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={change}
      ></input>
    </div>
  );
};

FormItem.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  rows: PropTypes.number,
  className: PropTypes.string,
  value: PropTypes.string,
  change: PropTypes.func,
};
export default FormItem;
