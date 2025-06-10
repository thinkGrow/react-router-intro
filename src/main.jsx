import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Mobiles from "./components/Mobiles/Mobiles.jsx";
import Home from "./components/Home/Home.jsx";
import Root from "./components/Root/Root.jsx";
import Laptops from "./components/Laptops/Laptops.jsx";
import Users from "./components/Users/Users.jsx";
import Users2 from "./components/Users2/Users2.jsx";
import User from "./components/User/User.jsx";
import UserDetails from "./components/UserDetails/UserDetails.jsx";

const users2Promise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

// const users2 = use(users2Promise);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "laptops", Component: Laptops },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),

        // to test if loader works properly
        // loader: () =>
        //   new Promise((resolve) =>
        //     setTimeout(
        //       () =>
        //         resolve(
        //           fetch("https://jsonplaceholder.typicode.com/users").then(
        //             (res) => res.json()
        //           )
        //         ),
        //       1500 // 1.5 seconds delay
        //     )
        //   ),

        Component: Users,
      },
      {
        path: "users2",
        element: (
          <Suspense fallback={<span>Loading</span>}>
            <Users2 users2Promise={users2Promise}></Users2>
          </Suspense>
        ),
      },
      {
        path: "/users/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails,
      },
    ],
  },

  {
    path: "about",
    element: <div>About me</div>,
  },
  {
    path: "blogs",
    element: <div>All my blogs are here</div>,
  },
  {
    path: "app",
    element: <App></App>,
  },
  {
    path: "app/:id",
    Component: App,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
