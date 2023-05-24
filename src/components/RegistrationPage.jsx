import { Card, Form, FormGroup } from "react-bootstrap";
import flowers from "../assets/images/flowers.png";
import logo from "../assets/images/logo.png";
import RegistrationForm from "./RegistrationForm";
import { useState } from "react";
import LoadingSpinnerSmall from "./LoadingSpinnerSmall";

const RegistrationPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleFormSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };
  return (
    <div className="loginContainer">
      <Card className="d-flex flex-column flex-md-row align-items-center">
        <Card.Img className="flowersBackground d-none d-md-flex" src={flowers} />
        <Card.Body className="loginForm mx-5">
          <Card.Text>
            <img className="rounded-circle mb-4" width={80} height={80} src={logo} alt="Logo pic" />
            <h1 className="loginTitle">The Rabbit Hole</h1>
            <RegistrationForm />
            <div className="d-flex justify-content-between lign-items-center">
              <FormGroup className="mb-3 mt-3 loginCheckbox">
                <Form.Check label="Remember me" />
              </FormGroup>
            </div>
            {isLoading ? (
              <LoadingSpinnerSmall />
            ) : (
              <button type="submit" className="loginBtn" onClick={handleFormSubmit}>
                Create account
              </button>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RegistrationPage;
