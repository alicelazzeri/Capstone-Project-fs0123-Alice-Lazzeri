import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
// import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  // const navigate = useNavigate();
  const [email, emailUpdate] = useState("");
  const [password, passwordUpdate] = useState("");

  const handleLogin = e => {
    e.preventDefault();
  };

  return (
    <div className="formContainer">
      <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
        <Form.Control
          required
          className="loginInput"
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={e => emailUpdate(e.target.value)}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control
          required
          className="loginInput"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => passwordUpdate(e.target.value)}
        />
      </FloatingLabel>

      <button type="submit" className="loginBtn" onClick={handleLogin}>
        Sign in
      </button>
    </div>
  );
};

export default LoginForm;
