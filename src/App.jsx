import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import AddDocument from "./pages/AddDocument";
import MyDocuments from "./pages/MyDocuments";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import { Navbar } from "./components/Navbar";
import HomeDemo from "./pages/HomeDemo";
import { MyModal } from "./components/MyModal";
import Login from "./pages/Login";
import { Signup } from "./components/Signup";
import Profile from "./pages/Profile";
import { Footer } from "./components/Footer";
// import "./App.css";
import { useDispatch } from "react-redux";

import { Outlet } from "react-router-dom";
import { login, logout } from "./redux/authSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AuthLayout from "./components/AuthLayout";
import EditProfile from "./pages/EditProdile";
import LogoutModal from "./components/LogoutModal";

export const isAuthenticated = true;

function App() {
  // const [loading, setLoading] = useState(true);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const token = localStorage.getItem("token");

  //       const authToken = JSON.parse(token);
  //       console.log(authToken);
  //       if (!token) {
  //         // Handle case where token is not found in localStorage
  //         return null;
  //       }

  //       const response = await axios.get(`${BASE_URL}/user/getUserData`, {
  //         headers: {
  //           Authorization: "Bearer " + authToken,
  //         },
  //       });
  //       console.log(response);
  //       const userData = response.data;

  //       if (!userData) {
  //         dispatch(logout());
  //       }
  //       dispatch(login({ userData }));
  //       console.log(userData);
  //       setUsername(userData.username);
  //       if (!userData.username) {
  //         setIsModalOpen(true);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };

  //   fetchUserData();
  // }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* Routes accessible to everyone */}
          <Route element={<AuthLayout />}>
            <Route exact path="/" element={<Home />} />
          </Route>{" "}
          <Route exact path="/logout" element={<LogoutModal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Protected routes - accessible only if isAuthenticated is true */}
          {isAuthenticated ? (
            <Route element={<AuthLayout />}>
              <Route path="/addDocument" element={<AddDocument />} />
              <Route path="/myDocuments" element={<MyDocuments />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/editprofile" element={<EditProfile />} />
            </Route>
          ) : (
            <>
              <Route path="*" element={<Navigate to="/login" replace />} />
            </>
          )}
        </Routes>
        <Footer />
      </Router>

      {/* <div className="w-full block">
        <Navbar />
        <Sidebar />
        <main>
          TODO: <Outlet />
        </main>
        <Footer />
      </div> */}
    </>
  );
}

export default App;
