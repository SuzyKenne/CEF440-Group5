import React from "react";
import Button from "../reusable component/Button";
import { Link, useNavigate } from "react-router-dom";

import Homes from "./Homes";
import About from "./About";

const Ladingpage = () => {
  const navigate = useNavigate();
  function goToLogin() {
    navigate("/login");
  }
  return (
    <div>
      <Homes />
      {/* <About /> */}
    </div>
  );
};

export default Ladingpage;
