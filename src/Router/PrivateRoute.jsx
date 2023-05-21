import React, { useContext } from "react";
import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "./AuthProvider";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  let [color, setColor] = useState("#ffffff");
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="sweet-loading">
        <ClipLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  if (user) {
    return children;
  }
  // path location
  return <Navigate to="/signup" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
