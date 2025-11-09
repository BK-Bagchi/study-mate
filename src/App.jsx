import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import NotFound from "./components/NotFound.jsx";
import Home from "./pages/Home/Home.jsx";
import Register from "./forms/Register.jsx";
import Login from "./forms/login.jsx";
import CreatePartnerProfile from "./forms/CreatePartnerProfile.jsx";
import FindPartners from "./pages/FindPartners.jsx";
import MyConnections from "./pages/MyConnections.jsx";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* prettier-ignore */}
        <Route path="/create-partner-profile" element={<CreatePartnerProfile />} />
        <Route path="/find-partners" element={<FindPartners />} />
        <Route path="/my-connections" element={<MyConnections />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
