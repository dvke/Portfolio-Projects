import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthContextProvider>
      <Footer />
    </>
  );
}

export default App;
