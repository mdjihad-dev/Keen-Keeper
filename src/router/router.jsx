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
                path: '/details/:id',
                loader: async({params}) => {
                   const res = await fetch(`/friend.json`);
                   const data = await res.json();
                   return data.find(f => f.id == params.id)
                },
                Component: FriendDetails
            }
        ]

    }
])
export default router