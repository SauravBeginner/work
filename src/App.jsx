import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<HomeDemo />} />
          <Route path="/addDocument" element={<AddDocument />} />
          <Route path="/myDocuments" element={<MyDocuments />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/modal" element={<MyModal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
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
