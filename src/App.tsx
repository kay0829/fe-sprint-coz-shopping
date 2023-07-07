import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";

import ErrorPage from "@container/ErrorPage";
import Container from "@container/Container";

import Main from "@container/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Container />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Main />,
            },
        ],
    },
]);

function App() {
    const globalCss = "m-0 p-0 box-border font-inter";

    return (
        <div className={`${globalCss}`}>
            <RecoilRoot>
                <RouterProvider router={router} />
            </RecoilRoot>
        </div>
    );
}

export default App;
