import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const AddDocument = lazy(() => import("./pages/AddDocument"));
const MyDocuments = lazy(() => import("./pages/MyDocuments"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Login = lazy(() => import("./pages/Login"));
const Profile = lazy(() => import("./pages/Profile"));
const EditProfile = lazy(() => import("./pages/EditProdile"));
const Contact = lazy(() => import("./pages/Contact"));
const DocumentDetails = lazy(() => import("./pages/DocumentDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));

import { Navbar } from "./components/Navbar";
import HomeDemo from "./pages/HomeDemo";
import { MyModal } from "./components/MyModal";

import { Signup } from "./components/Signup";

import { Footer } from "./components/Footer";
// import "./App.css";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import AuthLayout from "./components/AuthLayout";
import Loader from "./components/Loader";

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

  const isAuthenticated = useSelector((state) => state.auth.status);

  return (
    <>
      <Router>
        <Navbar />

        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              <Loader />
            </div>
          }
        >
          <Routes>
            {/* Routes accessible to everyone */}
            <Route element={<AuthLayout />}>
              <Route exact path="/" element={<Home />} />
            </Route>

            {/* <Route exact path="/logout" element={<LogoutModal />} /> */}
            <Route path="/login" element={<Login />} />
            {/* <Route path="/signup" element={<Signup />} /> */}
            {/* Protected routes - accessible only if isAuthenticated is true */}
            {isAuthenticated ? (
              <Route element={<AuthLayout />}>
                <Route path="/addDocument" element={<AddDocument />} />
                <Route path="/myDocuments" element={<MyDocuments />} />{" "}
                <Route path="/myDocuments/:id" element={<DocumentDetails />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/editprofile" element={<EditProfile />} />
                <Route exact path="/contact" element={<Contact />} />{" "}
                <Route path="*" element={<NotFound />} />
              </Route>
            ) : (
              <>
                <Route path="/*" element={<Navigate to="/login" replace />} />
              </>
            )}
          </Routes>
        </Suspense>
        <FooterWithCondition />
      </Router>
    </>
  );
}

export default App;

function FooterWithCondition() {
  const location = useLocation();
  const isLoginOrSignup =
    location.pathname === "/login" || location.pathname === "/signup";
  return !isLoginOrSignup && <Footer />;
}
