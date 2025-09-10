import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function PrivateRoute() {
  const navigate = useNavigate();
  const [isLogined, _setIsLogined] = useState<boolean>(() => {
    const cloneStatus = localStorage.getItem("loginStatus");
    return cloneStatus ? JSON.parse(cloneStatus) : false;
  });
  useEffect(() => {
    if (!isLogined) {
      navigate("/login");
    }
  }, [isLogined, navigate]);

  return isLogined ? <Outlet /> : <></>;
}
