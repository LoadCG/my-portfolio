import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AdminLogin from "./pages/Admin/Login";
import AdminDashboard from "./pages/Admin/Dashboard";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import './i18n';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
      <CustomCursor />
    </>
  );
}