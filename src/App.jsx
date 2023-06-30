/** @format */
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuthCheck from "./hooks/useAuthCheck";
import PublicRoute from "./components/ui/RouteAuthenticate/PublicRoute";
import PrivateRoute from "./components/ui/RouteAuthenticate/PrivateRoute";
import HomeRouting from "./components/ui/RouteAuthenticate/HomeRouting";

import Categories from "./pages/Categories";

function App() {
  const auth = useAuthCheck();

  console.log(process.env.NODE_ENV + " MODE");

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        limit={1}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ zIndex: 999999999999999 }}
      />
      <Routes>
        <Route path="/" element={<HomeRouting />} />
        <Route
          path="/categories"
          element={
            <PrivateRoute>
              <Categories />
            </PrivateRoute>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
