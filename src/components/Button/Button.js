import PropTypes from 'prop-types'

import "./Button.scss";

export const Button = ({text, onAdd, showAdd}) => {
  return <button className={`btn ${showAdd ? "" : "btn--off"}`} onClick={onAdd}>{text}</button>;
};

Button.propTypes = {
    text: PropTypes.string,
    onAdd: PropTypes.func
}

export default Button