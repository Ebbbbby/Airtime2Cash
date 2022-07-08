import Registration from "./components/registrationUI/Registration";
import Login from "./components/loginUI/Login";
import "./index.css";
import ForgetPassword from "./components/forgetPassword/ForgetPassword";
import ResetPassword from "./components/resetPasswordUI/ResetPassword";
import CheckEmail from "./components/checkEmail/CheckEmail";
import HomePage from "./components/homePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />}></Route>
        
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/forgotPassword" element={<ForgetPassword />} />
          <Route path="resetPassword" element={<ResetPassword />} />
          <Route path="checkEmail" element={<CheckEmail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
