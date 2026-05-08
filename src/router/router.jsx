import { createBrowserRouter } from "react-router";
import Root from "../mainLayout/Root";
import HomePage from './../pages/homePage/HomePage';

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                path: '/',
                Component: HomePage
            }
        ]

    }
])
export default router