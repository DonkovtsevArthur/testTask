import React from 'react';
import PropTypes from "prop-types";

const Form = ({ onSubmit, email, onChange, password }) => (
  <form onSubmit={onSubmit}>
    <div>
      <input
        type="email"
        data-get-name={"email"}
        value={email}
        onChange={onChange}
        placeholder="Введите email"
      />
    </div>
    <div>
      <input
        data-get-name={"password"}
        type="password"
        value={password}
        onChange={onChange}
        placeholder="Введите пароль"
      />
    </div>
    <input type="submit" />
  </form>
);


Form.propTypes = {
  onSubmit: PropTypes.func,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

export default Form;