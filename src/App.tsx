import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "@container/ErrorPage";
import Main from "@container/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
