import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";

import ErrorPage from "@container/ErrorPage";
import Container from "@container/Container";
import CToastList from "@component/Common/CToastList";

import Main from "@container/Main";
import ProductList from "@container/ProductList";
import BookmarkList from "@container/BookmarkList";

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
            {
                path: "/products/list",
                element: <ProductList />,
            },
            {
                path: "/bookmark",
                element: <BookmarkList isMain={false} />,
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
                <CToastList />
            </RecoilRoot>
        </div>
    );
}

export default App;
