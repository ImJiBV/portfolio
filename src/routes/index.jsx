import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
// auth
import MainLayout from "../layouts/main/MainLayout";

const Loadable = (Component) => (props) =>
    (
        <Suspense /* fallback={<LoadingScreen />} */>
            <Component {...props} />
        </Suspense>
    );

export default function Router({ state }) {
    return useRoutes([
        {
            path: "/portfolio",
            element: <MainLayout state={state} />,
            children: [
                { path: "/portfolio", element: <MainPage state={state} /> },
            ],
        },
    ]);
}

// PAGES
export const MainPage = Loadable(lazy(() => import("../pages/Main")));
