import { SidebarComponent } from "@/components/Layout/Sidebar/SidebarComponent";
import { Route, Routes } from "react-router-dom";

// import { Login } from "./Login";
// import { Register } from "./Register";
// import { ForgetPassword } from "./ForgetPassword";
// import { ResetPassword } from "./ResetPassword";

function Login() {
  return <SidebarComponent />
}
export const UserRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      {/* <Route path="register" element={<Register />} />
      <Route path="forget" element={<ForgetPassword />} />*/}
      {/* <Route path="*" element={<Navigate to="/admin/login" />} />  */}
    </Routes>
  );
};
