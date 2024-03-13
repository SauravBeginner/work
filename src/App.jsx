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

function App() {
  return (
    <>
      <Router>
        {/* <Sidebar /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<HomeDemo />} />
          <Route path="/addDocument" element={<AddDocument />} />
          <Route path="myDocuments" element={<MyDocuments />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/modal" element={<MyModal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
