import { Route, Routes } from "react-router-dom";
import RequireAuth from "../components/RequireAuth/RequireAuth";
import SignIn from "../Pages/SingIn/SignIn";
import Unauthorized from "../Pages/Unathorized/Unauthorized";
import Admin from "../Pages/Admin/Admin";
import Home from "../Pages/Home/Home";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="unauthorized" element={<Unauthorized />} />
      <Route path="/signin" element={<SignIn />} />

      <Route element={<RequireAuth />}>
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
};

export default RoutesComponent;
