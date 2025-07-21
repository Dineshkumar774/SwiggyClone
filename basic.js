import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Aboutus from "./src/components/Aboutus";
import ContactUs from "./src/components/ContactUs";
import Error from "./src/components/Error";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
{
    path: "/about",
    element: <Aboutus />,
  },
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
    ],
    errorElement: <Error />,
}
],
 {
    future: {
      v7_startTransition: true, // Opt-in for smoother state transitions
    },
  });

const root = ReactDOM.createRoot(document.getElementById("Root"));
root.render(<RouterProvider router={appRouter} />);
