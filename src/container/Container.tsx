import React from "react";
import { Outlet } from "react-router";
import Header from "@component/Global/Header";

function Container() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default Container;
