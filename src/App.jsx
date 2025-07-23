import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/Captainlogin";
import CaptainSignup from "./pages/CaptainSignup";
import UserProjectedWrapper from "./pages/UserProtectedWrapper";
import UserLogout from "./pages/UserLogout";
import Home from "./pages/Home";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectWrapper from "./pages/CaptainProtectWrapper";
import CaptainLogout from "./pages/CaptainLogout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
       
        <Route
          path="/home"
          element={
            <UserProjectedWrapper>
              <Home />
            </UserProjectedWrapper>
          }
        />
        <Route
          path="/users/logout"
          element={
            <UserProjectedWrapper>
              <UserLogout />
            </UserProjectedWrapper>
          }
        />

         <Route path="/captain-home" element={
          <CaptainProtectWrapper>
          <CaptainHome/>
          </CaptainProtectWrapper>
          }  />

          <Route path="/captains/logout" element={
          <CaptainProtectWrapper>
          <CaptainLogout/>
          </CaptainProtectWrapper>
          }  />
      </Routes>
    </div>
  );
}

export default App;
