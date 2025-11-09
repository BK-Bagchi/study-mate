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
import PartnerDetails from "./pages/PartnerDetails.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import PrivateRoute from "./routes/privateRoute.jsx";
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
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoute />}>
            {/* prettier-ignore */}
            <Route path="/create-partner-profile" element={<CreatePartnerProfile />} />
            <Route path="/find-partners" element={<FindPartners />} />
            <Route path="/my-connections" element={<MyConnections />} />
            <Route path="/partner/:id" element={<PartnerDetails />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
