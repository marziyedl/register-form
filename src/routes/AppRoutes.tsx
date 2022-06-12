import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Spinner } from "reactstrap";

const Home = React.lazy(() => import("pages/home"));
const Register = React.lazy(() => import("pages/register"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Routes>
    </Suspense>
  );
};
export default AppRoutes;
