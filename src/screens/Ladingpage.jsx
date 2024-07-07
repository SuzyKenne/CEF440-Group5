import React from "react";
import Button from "../reusable component/Button";
import { Link, useNavigate } from "react-router-dom";

const Ladingpage = () => {
  const navigate = useNavigate();
  function goToLogin() {
    navigate("/login");
  }
  return (
    <div>
      Landing page
      <button onClick={goToLogin}> Login </button>
    </div>
  );
};

export default Ladingpage;
