import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Provider } from "react-redux";
import store from "./store/store.js";
import AddDocument from "./pages/AddDocument.jsx";
import MyDocuments from "./pages/MyDocuments.jsx";
import Login from "./pages/Login.jsx";
import { Signup } from "./components/Signup.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AuthLayout from "./components/AuthLayout.jsx";
import Profile from "./pages/Profile.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/login",
//         element: (
//           <AuthLayout authentication={false}>
//             <Login />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/signup",
//         element: (
//           <AuthLayout authentication={false}>
//             <Signup />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/addDocument",
//         element: (
//           <AuthLayout authentication>
//             <AddDocument />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/myDocuments",
//         element: (
//           <AuthLayout authentication>
//             <MyDocuments />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/profile",
//         element: (
//           <AuthLayout authentication>
//             <Profile />
//           </AuthLayout>
//         ),
//       },

//       // {
//       //   path: "/edit-post/:slug",
//       //   element: (
//       //     <AuthLayout authentication>
//       //       {" "}
//       //       <EditPost />
//       //     </AuthLayout>
//       //   ),
//       // },
//       // {
//       //   path: "/post/:slug",
//       //   element: <Post />,
//       // },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <RouterProvider router={router}> */}
      <App />
      {/* </RouterProvider> */}
    </Provider>
  </React.StrictMode>
);
