import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "50px",
      }}
    >
      <Outlet />
    </div>
  );
};

export default AuthLayout;