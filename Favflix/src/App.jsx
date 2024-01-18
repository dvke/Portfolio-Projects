import Navbar from "./components/Navbar";
import IFrame from "./components/IFrame";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import { Route, Routes } from "react-router-dom";
import { IFrameProvider } from "./context/IFrameContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <IFrameProvider>
          <Navbar />
          <IFrame />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
          </Routes>
        </IFrameProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
