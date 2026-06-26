import React, { useContext } from "react";
import Button from "../global/Button";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";

const LogOut = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut(navigate("/"));
  };
  return (
    <div className=" flex items-center justify-center">
      <div className="bg-white rounded-[10px] shadow-2xl flex items-center justify-center w-100 h-50">
        <Button onClick={handleLogout} variant="green">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default LogOut;
