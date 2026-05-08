import { createBrowserRouter } from "react-router";
import Root from "../mainLayout/Root";
import HomePage from './../pages/homePage/HomePage';
import FriendDetails from "../component/ui/friendDetails/FriendDetails";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                path: '/',
                Component: HomePage
            },
            {
                path: '/:id',
                loader: ({params}) => fetch(`/friend.json/${params.id}`),
                Component: FriendDetails
            }
        ]

    }
])
export default router