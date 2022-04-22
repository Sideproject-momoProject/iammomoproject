import { Routes, Route, Outlet } from "react-router-dom";
import Nav from "./components/MainPage/Nav";
import AuthSelection from "./pages/AuthSelection";
import BecomePage from "./pages/BecomePage/BecomePage";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage/MainPage";
import Register from "./pages/Register";
import SharePage from "./pages/SharePage/SharePage";

const Layout  = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/momoshare" element={<SharePage />} />
        <Route path="/beamomo" element={<BecomePage />} />
      </Route>
        <Route path="/authselection" element={<AuthSelection />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
