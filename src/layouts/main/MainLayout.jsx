import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import VNavigation from "../vnav/Navigation";
import Wrapper from "../Wrapper";
import HNavigation from "../hnav/Navigation";

// ----------------------------------------------------------------------

export default function MainLayout() {
    return (
        <>
            <Wrapper>
                <HNavigation />
            </Wrapper>
            <VNavigation />

            <Wrapper>
                <Outlet />
            </Wrapper>
        </>
    );
}
