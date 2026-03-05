import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layout/MainLayout";
import LandingPage from "@/pages/Landing/LandingPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;