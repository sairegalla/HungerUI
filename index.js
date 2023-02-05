import React, { Fragment, lazy, Suspense } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
// import About from "./components/About";
import Contactus from "./components/ContactUs";
import ErrorElement from "./components/ErrorElement";
import RestaurantMenu from "./components/ResturantMenu";
import Shimmer from "./components/Shimmer";

const Instamart = lazy(() => import("./components/instamart"));

const About = lazy(() => import("./components/About"));

let App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      { path: "contactus", element: <Contactus /> },
      {
        path: "instamart",
        element: (
          <Suspense>
            <Instamart />
          </Suspense>
        ),
      },
      { path: "resturant/:id", element: <RestaurantMenu /> },
    ],
  },
]);

const Root = ReactDOM.createRoot(document.getElementById("Root"));
Root.render(<RouterProvider router={appRouter} />);
