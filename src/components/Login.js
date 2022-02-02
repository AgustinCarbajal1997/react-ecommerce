import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/auth.action";

const Login = ({ setOpenLogin }) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onMailHandle = (e) => {
    setMail(e.target.value);
  };
  const onPassHandle = (e) => {
    setPassword(e.target.value);
  };
  const onSubmitHandle = (e) => {
    e.preventDefault();
    dispatch(login({ mail, password }));
  };
  return (
    <div className="login-form-container">
      <div className="login-form-close">
        <IoCloseSharp
          size={32}
          color="#654bb9"
          style={{ cursor: "pointer" }}
          onClick={() => setOpenLogin(false)}
        />
      </div>
      <form onSubmit={onSubmitHandle} className="login-form">
        <label>MAIL</label>
        <input type="text" name="mail" value={mail} onChange={onMailHandle} />
        <label>CONTRASEÑA</label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={onPassHandle}
        />
        <input type="submit" value={"INGRESAR"} />
      </form>
    </div>
  );
};

export default Login;
